import { appThemes } from '@/libs/appThemes'
import { localStorageService } from './localStorageService'
import { ListNames } from '@/enums/listNames'

import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

export interface State {
  todoList: TTodoList
  id: number
  listName: ListNames
  theme: TAppTheme
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    todoList: [] as TTodoList,
    id: 0,
    listName: ListNames.All,
    theme: appThemes[0],
  },
  mutations: {
    ADD_ITEM(state, payload: string) {
      const todo: TTodoItem = {
        completed: false,
        text: payload,
        id: state.id++,
      }
      state.todoList.unshift(todo)
      localStorageService.updateLocalStorage(state.todoList)
    },
    EDIT_ITEM(state, payload: TTodoItem) {
      const index: number = state.todoList.findIndex((el) => el.id === payload.id)
      state.todoList.splice(index, 1, payload)
      localStorageService.updateLocalStorage(state.todoList)
    },
    DELETE_ITEM(state, index: number) {
      state.todoList.splice(index, 1)
      localStorageService.updateLocalStorage(state.todoList)
    },
    SHOW_ACTIVE(state) {
      state.listName = ListNames.Active
    },
    SHOW_COMPLETED(state) {
      state.listName = ListNames.Completed
    },
    SHOW_ALL(state) {
      state.listName = ListNames.All
    },
    DELETE_ALL(state) {
      state.todoList = []
      state.id = -1
      localStorageService.clearAll()
    },
    SET_ALL_TODOS(state) {
      state.todoList = localStorageService.getTodoList()
    },
    SET_ID(state) {
      const item: TTodoItem = state.todoList[0]
      state.id = item ? item.id + 1 : 0
    },
    SET_THEME(state, payload: TAppTheme) {
      state.theme = payload
      localStorageService.setTheme(payload)
    },
    GET_THEME(state) {
      state.theme = localStorageService.getTheme() ?? appThemes[0]
    },
  },
  actions: {
    addItem({ commit }, payload: string) {
      commit('ADD_ITEM', payload)
    },
    editItem({ commit }, payload: TTodoItem) {
      commit('EDIT_ITEM', payload)
    },
    deleteItem({ commit }, payload: number) {
      commit('DELETE_ITEM', payload)
    },
    showFiltered({ commit }, payload: string) {
      commit(`SHOW_${payload.toUpperCase()}`)
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
    setTheme({ commit }, payload: TAppTheme) {
      commit('SET_THEME', payload)
    },
    getTheme({ commit }) {
      commit('GET_THEME')
    },
  },
  getters: {
    filteredTodos(state): TTodoList {
      switch (state.listName) {
        case ListNames.Active:
          return state.todoList.filter((item: TTodoItem) => !item.completed)
        case ListNames.Completed:
          return state.todoList.filter((item: TTodoItem) => item.completed)
        default:
          return state.todoList
      }
    },
    todoList(state): TTodoList {
      return state.todoList
    },
    listName(state): ListNames {
      return state.listName
    },
    id(state): number {
      return state.id
    },
    theme(state): TAppTheme {
      return state.theme
    },
  },
  strict: true,
  plugins: [createPersistedState()],
})

export function useStore() {
  return baseUseStore(key)
}
