<template>
  <div class="todos">
    <create-item @on-add-todo="addItem($event)"></create-item>
    <transition name="slide-fade" appear>
      <div v-if="todoList.length">
        <div class="filter">
          <h2>{{ listName + ' задачи'}}</h2>
          <div class="filter-btns">
            <div class='m-filter'>
              <button
                type="button"
                class="btn btn-filter"
                @click="isMobile = !isMobile"
                @blur="isMobile = !isMobile"
              >Фильтры
              </button>
              <div class="content">
                <a
                  href="#"
                  class="m-btn"
                  :class="{ selected: listName === 'Активные' }"
                  @click.prevent="showActive">Активные
                </a>
                <a
                  href="#"
                  class="m-btn"
                  :class="{ selected: listName === 'Выполненные' }"
                  @click.prevent="showDone">Выполненные
                </a>
                <a
                  href="#"
                  class="m-btn"
                  :class="{ selected: listName === 'Все' }"
                  @click.prevent="showAll">Все
                </a>
              </div>
            </div>
            <div class="visible-lg">
              <button
                type="button"
                class="btn"
                :class="{ selected: listName === 'Активные' }"
                @click="showActive">Активные
              </button>
              <button
                type="button"
                class="btn"
                :class="{ selected: listName === 'Выполненные' }"
                @click="showDone">Выполненные
              </button>
              <button
                type="button"
                class="btn"
                :class="{ selected: listName === 'Все' }"
                @click="showAll">Все
              </button>
            </div>
            <button
              type="button"
              class="btn delete-all"
              @click="deleteAll">Очистить список
            </button>
          </div>
        </div>
        <transition-group name="list" tag="ul" appear>
          <li
            is="todo-item"
            v-for="(item, index) in todoList"
            :key="item.id"
            :completed="item.completed"
            :text="item.text"
            :isEditing="item.isEditing"
            @on-delete="deleteItem(index)"
            @on-complete="completeItem(item)"
            @on-edit="editItem(item, $event)"
            v-show="item.shown"
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

export default {
  data () {
    return {
      todoList: [],
      listName: 'Все',
      id: 0,
      isMobile: false
    }
  },
  components: {
    'create-item': CreateItem,
    'todo-item': TodoItem
  },
  methods: {
    addItem: function (text) {
      this.todoList.push({
        completed: false,
        shown: true,
        text: text,
        id: this.id++
      })
    },
    deleteItem: function (index) {
      this.todoList.splice(index, 1)
    },
    completeItem: function (item) {
      item.completed = !item.completed
      switch (this.listName) {
        case 'Активные':
          this.showActive()
          break
        case 'Выполненные':
          this.showDone()
          break
        default:
          this.showAll()
      }
    },
    editItem: function (item, newText) {
      item.text = newText
    },
    showActive: function () {
      this.listName = 'Активные'
      this.todoList.forEach(function (item) {
        item.shown = !item.completed
      })
    },
    showDone: function () {
      this.listName = 'Выполненные'
      this.todoList.forEach(function (item) {
        item.shown = item.completed
      })
    },
    showAll: function () {
      this.listName = 'Все'
      this.todoList.forEach(function (item) {
        item.shown = true
      })
    },
    deleteAll: function () {
      this.todoList = []
      this.id = 0
    }
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
  @import url("https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css");

  h2 {
    font-family: 'Amatic SC', cursive;
    line-height: 1;
    margin: 2rem;
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

  .filter {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FFF8F2;
    z-index: 2;
  }

  .filter-btns {
    display: flex;
    justify-content: space-between;
  }

  .filter button {
    width: auto;
    padding: 0 1rem;
  }

  .btn {
    border: 0.5rem solid #F49737;
    background: #F49737;
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    height: 6rem;
    width: 6rem;
    color: #FFF8F2;
    transition: all 0.5s;
    margin: 0.5rem;
  }

  .btn.selected {
    border-color: #2E2E34;
    background-color: #2E2E34;
  }

  .btn:hover {
    border-color: #2E2E34;
    background-color: #2E2E34;
  }

  .btn:active {
    color: transparent;
  }

  .btn:focus {
    outline: none;
  }

  .m-filter {
    display: none;
    position: relative;
  }

  .btn-filter {
    border: none;
  }

  .m-filter .content {
    display: none;
    background-color: #2E2E34;
    list-style: none;
    margin: 0;
    padding: 1rem 0;
    position: absolute;
    z-index: 2;
    top: 100%;
    left: 0;
    width: 20rem;
    text-align: center;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .m-filter:hover .content {
    display: block;
  }

  .m-filter:hover .btn-filter {
    background-color: #2E2E34;
    color: #FFF8F2;
  }

  .m-btn {
    display: block;
    color: #FFF8F2;
    font-size: 2rem;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin: 0;
    border-bottom: 1px solid transparent;
    transition: all 0.5s;
  }

  .m-btn:hover {
    border-bottom: 1px solid #F49737;
    color: #F49737;
  }

  .m-btn:active {
    color: #2E2E34;
    border-bottom: 1px solid #2E2E34;
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
