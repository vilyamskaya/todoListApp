import { enableAutoUnmount, mount } from '@vue/test-utils'
import { ActionTree, createStore } from 'vuex'
import { key } from '@/store'
import { mockedTodo } from '../mocks/todo'
import { nextTick } from 'vue'
import BaseInput from '@/components/BaseInput.vue'
import TodoItem from '@/components/TodoItem.vue'

let mockedActions: ActionTree<unknown, unknown> = {}

const createWrapper = () => {
  const store = createStore({
    actions: { ...mockedActions },
  })

  return mount(TodoItem, {
    props: {
      todo: { ...mockedTodo },
      index: mockedTodo.id,
    },
    global: {
      plugins: [[store, key]],
      stubs: {
        BaseBtn: true,
      },
    },
  })
}

beforeEach(() => {
  mockedActions = {
    deleteItem: jest.fn(),
    editItem: jest.fn(),
  }
})

enableAutoUnmount(afterEach)

describe('TodoItem Component', () => {
  it.each`
    id                    | item
    ${'todo_item_check'}  | ${'check button'}
    ${'todo_item_text'}   | ${'text'}
    ${'todo_item_edit'}   | ${'edit button'}
    ${'todo_item_delete'} | ${'delete button'}
  `('renders $item correctly', ({ id }) => {
    const wrapper = createWrapper()

    expect(wrapper.find(`[data-test-id="${id}"]`).exists()).toBeTruthy()
  })

  it.each`
    id                    | item
    ${'todo_item_input'}  | ${'input'}
    ${'todo_item_save'}   | ${'save button'}
    ${'todo_item_cancel'} | ${'cancel button'}
  `('does not show $item on render', ({ id }) => {
    const wrapper = createWrapper()

    expect(wrapper.find(`[data-test-id="${id}"]`).exists()).toBeFalsy()
  })

  it.each`
    id                    | item
    ${'todo_item_input'}  | ${'input'}
    ${'todo_item_save'}   | ${'save button'}
    ${'todo_item_cancel'} | ${'cancel button'}
  `('shows $item on edit', async ({ id }) => {
    const wrapper = createWrapper()

    await wrapper.find('[data-test-id="todo_item_edit"]').trigger('click')

    expect(wrapper.find(`[data-test-id="${id}"]`).exists()).toBeTruthy()
  })

  it.each`
    id                    | item
    ${'todo_item_check'}  | ${'check button'}
    ${'todo_item_text'}   | ${'text'}
    ${'todo_item_edit'}   | ${'edit button'}
    ${'todo_item_delete'} | ${'delete button'}
  `('does not show $item on edit', async ({ id }) => {
    const wrapper = createWrapper()

    await wrapper.find('[data-test-id="todo_item_edit"]').trigger('click')

    expect(wrapper.find(`[data-test-id="${id}"]`).exists()).toBeFalsy()
  })

  it('dispatches edit action when todo is checked', async () => {
    const wrapper = createWrapper()
    const expectedTodo = { ...mockedTodo, completed: !mockedTodo.completed }

    await wrapper.find('[data-test-id="todo_item_check"]').trigger('click')

    expect(mockedActions.editItem).toHaveBeenCalledWith(
      expect.any(Object), // The Vuex context
      expectedTodo
    )
  })

  it('dispatches edit action when todo text is edited', async () => {
    const wrapper = createWrapper()
    const text = 'test text'
    const expectedTodo = { ...mockedTodo, text }

    await wrapper.find('[data-test-id="todo_item_edit"]').trigger('click')
    wrapper.findComponent(BaseInput).vm.$emit('update:modelValue', text)
    await nextTick()
    await wrapper.find('[data-test-id="todo_item_save"]').trigger('click')

    expect(mockedActions.editItem).toHaveBeenCalledWith(
      expect.any(Object), // The Vuex context
      expectedTodo
    )
  })

  it('dispatches delete action when delete button clicked', async () => {
    const wrapper = createWrapper()

    await wrapper.find('[data-test-id="todo_item_delete"]').trigger('click')

    expect(mockedActions.deleteItem).toHaveBeenCalledWith(
      expect.any(Object), // The Vuex context
      wrapper.props().index
    )
  })
})
