import Vue from 'vue'
import Vuex from 'vuex'
import { localStorageService } from './localStorageService'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todoList: [],
    id: null,
    listName: 'Все'
  },
  mutations: {
    addItem (state, text) {
      const todo = {
        completed: false,
        shown: true,
        text: text,
        id: state.id++
      }
      state.todoList.push(todo)
      localStorageService.updateLocalStorage(state.todoList)
    },
    editItem (state, { item, newText }) {
      item.text = newText
      localStorageService.updateLocalStorage(state.todoList)
    },
    deleteItem (state, { index }) {
      state.todoList.splice(index, 1)
      localStorageService.updateLocalStorage(state.todoList)
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
      localStorageService.clearAll()
    },
    setAllTodos (state) {
      state.todoList = localStorageService.getTodoList()
    },
    setId (state) {
      const item = state.todoList[state.todoList.length - 1]
      state.id = (item) ? item.id + 1 : 0
    }
  },
  actions: {
    completeItem ({ commit, state }, item) {
      item.completed = !item.completed
      localStorageService.updateLocalStorage(state.todoList)
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
    }
  }
})
