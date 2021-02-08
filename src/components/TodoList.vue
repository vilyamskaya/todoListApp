<template>
  <div class="todos">
    <h1>Твой список задач</h1>
    <create-item />
    <transition name="slide-fade" appear>
      <div v-if="todoList.length">
        <filter-items />
        <transition-group name="list" tag="ul" appear>
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
      <p class="empty" v-else>Список задач пуст</p>
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

<style>
  @import url('https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');

  h2 {
    font-family: 'Amatic SC', cursive;
    line-height: 1;
    margin: 2rem;
    font-weight: normal;
    text-align: center;
    font-size: 6rem;
  }

  .todos ul {
    padding: 0;
    position: relative;
  }

  .empty {
    position: absolute;
    width: 50%;
    top: 60%;
    left: 25%;
    border-top: 1px solid #2e2e34;
    padding-top: 4rem;
    margin-top: 6rem;
    color: #2e2e34;
    font-family: 'Montserrat', sans-serif;
    font-size: 2.5rem;
    text-align: center;
  }

  /*----АНИМАЦИЯ ПОЯВЛЕНИЯ И УДАЛЕНИЯ СПИСКА----*/

  .slide-fade-enter {
    opacity: 0;
    transform: translateY(20rem);
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
    transform: translateY(20rem);
  }

  .list-leave-to {
    opacity: 0;
    transform: translateX(-40rem);
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
