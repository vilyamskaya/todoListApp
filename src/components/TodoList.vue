<template>
  <div class="todos">
    <create-item/>
    <transition name="slide-fade" appear>
      <div v-if="todoList.length">
        <filter-items/>
        <transition-group name="list" tag="ul" appear>
          <li
            is="todo-item"
            v-for="item in filteredTodoList"
            :index = todoList.indexOf(item)
            :key="item.id"
            :completed="item.completed"
            :text="item.text"
            :isEditing="item.isEditing"
            @on-complete = "completeItem(item)"
            @on-edit = "editItem(item, $event)"
          ></li>
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
import { mapState } from 'vuex'

export default {
  mounted () {
    this.$store.commit('setAllTodos')
    this.$store.commit('setId')
  },
  computed: {
    filteredTodoList () {
      return this.$store.getters.filteredTodos
    },
    ...mapState([
      'id',
      'todoList'
    ])
  },
  components: {
    'create-item': CreateItem,
    'todo-item': TodoItem,
    'filter-items': FilterItems
  },
  methods: {
    completeItem: function (item) {
      this.$store.dispatch('completeItem', item)
    },
    editItem (item, newText) {
      this.$store.commit('editItem', {
        item,
        newText
      })
    }
  }
}
</script>

<style>
  @import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");
  @font-face {
    font-family: "Montserrat";
    src: url("../assets/Montserrat-Light.ttf");
  }

  h2 {
    font-family: 'Amatic SC', cursive;
    line-height: 1;
    margin: 2rem;
    font-weight: normal;
    text-align: center;
    font-size: 6rem;
  }

  .todos {
    display: flex;
    flex-direction: column;
    width: 70%;
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
    border-top: 1px solid #2E2E34;
    padding-top: 4rem;
    margin-top: 6rem;
    color: #2E2E34;
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
