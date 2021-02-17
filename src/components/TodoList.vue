<template>
  <div class="container todos">
    <h1 class="todos-title">Твой список задач</h1>
    <create-item />
    <transition name="slide-fade" appear>
      <div v-if="todoList.length">
        <filter-items />
        <transition-group name="list" tag="ul" class="todos-list" appear>
          <li
            is="todo-item"
            v-for="item in filteredTodos"
            :index="todoList.indexOf(item)"
            :key="item.id"
            :completed="item.completed"
            :text="item.text"
            :isEditing="item.isEditing"
            @on-complete="completeItem(item)"
            @on-edit="editItem({ item, text: $event })"
          />
        </transition-group>
      </div>
      <p class="empty text-md" v-else>Список задач пуст</p>
    </transition>
  </div>
</template>

<script>
  import CreateItem from './CreateItem.vue'
  import TodoItem from './TodoItem.vue'
  import FilterItems from './FilterItems'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    mounted() {
      this.setAllTodos()
      this.setId()
    },
    computed: {
      ...mapGetters(['id', 'todoList', 'filteredTodos']),
    },
    components: {
      CreateItem,
      TodoItem,
      FilterItems,
    },
    methods: {
      ...mapActions(['setAllTodos', 'setId', 'editItem', 'completeItem']),
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/vars';
  @import '../assets/scss/mixins';

  .todos {
    &-title {
      margin: $p-20 0;
      text-align: center;
    }

    &-list {
      padding: 0;
      margin-top: $p-5;
      position: relative;
    }
  }

  .empty {
    position: absolute;
    width: 50%;
    top: 60%;
    left: 25%;
    border-top: 1px solid $color-black;
    padding-top: $p-40;
    margin-top: $p-60;
    text-align: center;
  }

  /*----АНИМАЦИЯ ПОЯВЛЕНИЯ И УДАЛЕНИЯ СПИСКА----*/

  .slide-fade-enter {
    opacity: 0;
    transform: translateY($p-20 * 10);
  }

  .slide-fade-leave-to {
    opacity: 0;
  }

  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 1s;
  }

  .slide-fade-move {
    transition: all 1s;
  }

  /*----АНИМАЦИЯ ПОЯВЛЕНИЯ И УДАЛЕНИЯ ЭЛЕМЕНТОВ СПИСКА----*/

  .list-enter {
    opacity: 0;
    transform: translateY($p-20 * 10);
  }

  .list-leave-to {
    opacity: 0;
    transform: translateX(-$p-40 * 10);
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }

  .list-leave-active {
    position: absolute;
  }

  .list-move {
    transition: all 1s;
  }

  /*----КОНЕЦ СТИЛЕЙ АНИМАЦИИ----*/
</style>
