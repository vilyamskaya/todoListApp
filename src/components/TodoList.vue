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
            v-for="(item, i) in filteredTodos"
            :index="i"
            :key="item.id"
            :todo="item"
            :other-editing="isEditing"
            @is-editing="item.isEditing = $event"
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
      isEditing() {
        return this.filteredTodos.some((el) => !!el.isEditing)
      },
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
    border-top: 1px solid var(--color-black);
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
