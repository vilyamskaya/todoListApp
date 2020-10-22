import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todoList: [],
    id: 0,
    listName: 'Все'
  },
  mutations: {
    addItem (state, text) {
      state.todoList.push({
        completed: false,
        shown: true,
        text: text,
        id: state.id++
      })
    },
    showActive (state) {
      state.listName = 'Активные'
      state.todoList.forEach(function (item) {
        item.shown = !item.completed
      })
    },
    showDone (state) {
      state.listName = 'Выполненные'
      state.todoList.forEach(function (item) {
        item.shown = item.completed
      })
    },
    showAll (state) {
      state.listName = 'Все'
      state.todoList.forEach(function (item) {
        item.shown = true
      })
    },
    deleteAll (state) {
      state.todoList = []
      state.id = 0
      localStorage.clear()
    },
    deleteItem (state, { index, item }) {
      state.todoList.splice(index, 1)
      localStorage.removeItem(item.id)
    },
    editItem (state, { item, newText }) {
      item.text = newText
      localStorage.setItem(item.id, item)
    }
  },
  actions: {
    completeItem ({ commit, state }, item) {
      item.completed = !item.completed
      localStorage.setItem(item.id, item)
      switch (state.listName) {
        case 'Активные':
          commit('showActive')
          break
        case 'Выполненные':
          commit('showDone')
          break
        default:
          commit('showAll')
      }
    },
    saveItem (item) {
      localStorage.setItem(item.id, item)
      // сделать мутацию addTodo
    },
    getAllTodos ({ state }) {
      for (const key of Object.keys(localStorage)) {
        state.todoList.push(localStorage.getItem(key))
      }
      // сделать связку localStorage и todoList
      // поменять ошибки в стилях
    }
  }
})
