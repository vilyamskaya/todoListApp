import Vue from 'vue'
import Vuex from 'vuex'
import { localStorageService } from './localStorageService'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    todoList: [],
    id: null,
    listName: 'Все',
    color: null,
  },
  getters: {
    filteredTodos: (state) => {
      switch (state.listName) {
        case 'Активные':
          return state.todoList.filter((item) => item.completed === false)
        case 'Выполненные':
          return state.todoList.filter((item) => item.completed === true)
        default:
          return state.todoList
      }
    },
    todoList: (state) => state.todoList,
    listName: (state) => state.listName,
    id: (state) => state.id,
    color: (state) => state.color,
  },
  mutations: {
    ADD_ITEM(state, payload) {
      const todo = {
        completed: false,
        isEditing: false,
        shown: true,
        text: payload,
        id: state.id++,
      }
      state.todoList.push(todo)
      localStorageService.updateLocalStorage(state.todoList)
    },
    EDIT_ITEM(state, payload) {
      payload.item.text = payload.text
      localStorageService.updateLocalStorage(state.todoList)
    },
    DELETE_ITEM(state, index) {
      state.todoList.splice(index, 1)
      localStorageService.updateLocalStorage(state.todoList)
    },
    SHOW_ACTIVE(state) {
      state.listName = 'Активные'
    },
    SHOW_DONE(state) {
      state.listName = 'Выполненные'
    },
    SHOW_ALL(state) {
      state.listName = 'Все'
    },
    DELETE_ALL(state) {
      state.todoList = []
      state.id = 0
      localStorageService.clearAll()
    },
    SET_ALL_TODOS(state) {
      state.todoList = localStorageService.getTodoList()
    },
    SET_ID(state) {
      const item = state.todoList[state.todoList.length - 1]
      state.id = item ? item.id + 1 : 0
    },
    SET_COLOR(state, payload) {
      state.color = payload
      localStorageService.setColor(payload)
    },
    GET_COLOR(state) {
      state.color = localStorageService.getColor()
    },
  },
  actions: {
    completeItem({ commit, state }, item) {
      item.completed = !item.completed
      localStorageService.updateLocalStorage(state.todoList)
      switch (state.listName) {
        case 'Активные':
          commit('SHOW_ACTIVE')
          break
        case 'Выполненные':
          commit('SHOW_DONE')
          break
        default:
          commit('SHOW_ALL')
      }
    },
    addItem({ commit }, payload) {
      commit('ADD_ITEM', payload)
    },
    editItem({ commit }, payload) {
      commit('EDIT_ITEM', payload)
    },
    deleteItem({ commit }, payload) {
      commit('DELETE_ITEM', payload)
    },
    showActive({ commit }) {
      commit('SHOW_ACTIVE')
    },
    showDone({ commit }) {
      commit('SHOW_DONE')
    },
    showAll({ commit }) {
      commit('SHOW_ALL')
    },
    deleteAll({ commit }) {
      commit('DELETE_ALL')
    },
    setAllTodos({ commit }) {
      commit('SET_ALL_TODOS')
    },
    setId({ commit }) {
      commit('SET_ID')
    },
    setColor({ commit }, payload) {
      commit('SET_COLOR', payload)
    },
    getColor({ commit }) {
      commit('GET_COLOR')
    },
  },
})
