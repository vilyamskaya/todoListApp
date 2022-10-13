import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import { createStore } from 'vuex'
import { key } from '@/store'
import TodoList from '@/components/TodoList.vue'
import { mockedTodos } from '../mocks/todo'

const defaultGetters = {
  todoList: () => [...mockedTodos],
  filteredTodos: () => [...mockedTodos],
  id: () => mockedTodos[0].id || 0,
}

const emptyGetters = {
  todoList: () => [],
  filteredTodos: () => [],
  id: () => 0,
}

const createWrapper = (getters = defaultGetters) => {
  const store = createStore({
    getters: { ...getters },
  })

  return shallowMount(TodoList, {
    global: {
      plugins: [[store, key]],
    },
  })
}

enableAutoUnmount(afterEach)

describe('TodoList Component', () => {
  it.each`
    id                | item
    ${'create_todo'}  | ${'create todo component'}
    ${'filter_todos'} | ${'filter todo component'}
    ${'todo_list'}    | ${'todo list'}
  `('renders $item correctly when todos exist', ({ id }) => {
    const wrapper = createWrapper()

    expect(wrapper.find(`[data-test-id="${id}"]`).exists()).toBeTruthy()
  })

  it('renders header title text correctly', () => {
    const wrapper = createWrapper()
    const expectedText = 'Твой список задач'

    expect(wrapper.find('[data-test-id="todo_title"]').text()).toBe(expectedText)
  })

  it('shows empty result text when todo list empty', () => {
    const wrapper = createWrapper({ ...emptyGetters })

    expect(wrapper.find('[data-test-id="todo_empty"]').exists()).toBeTruthy()
  })

  it.each`
    id                | item
    ${'filter_todos'} | ${'filter todo component'}
    ${'todo_list'}    | ${'todo list'}
  `('do not shows $item when todo list empty', ({ id }) => {
    const wrapper = createWrapper({ ...emptyGetters })

    expect(wrapper.find(`[data-test-id="${id}"]`).exists()).toBeFalsy()
  })

  it('shows filter when filtered todo list empty, but todo list exists', () => {
    const wrapper = createWrapper({ ...defaultGetters, filteredTodos: () => [] })

    expect(wrapper.find('[data-test-id="filter_todos"]').exists()).toBeTruthy()
  })
})
