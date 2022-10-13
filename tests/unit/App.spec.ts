import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import { ActionTree, createStore } from 'vuex'
import { key } from '@/store'
import { appThemes } from '@/libs/appThemes'
import App from '@/App.vue'
import ColorPicker from '@/components/ColorPicker.vue'

let mockedActions: ActionTree<unknown, unknown> = {}

const createWrapper = () => {
  const store = createStore({
    actions: { ...mockedActions },
    getters: {
      theme: () => appThemes[0],
    },
  })

  return shallowMount(App, {
    global: {
      plugins: [[store, key]],
    },
  })
}

beforeEach(() => {
  const actionNames = ['getTheme', 'setAllTodos', 'setId', 'setTheme']
  actionNames.forEach((name) => (mockedActions[name] = jest.fn()))
})

enableAutoUnmount(afterEach)

describe('App Component', () => {
  it.each`
    id                | item
    ${'color_picker'} | ${'color picker'}
    ${'todo_list'}    | ${'todo list'}
  `('renders $item correctly', ({ id }) => {
    const wrapper = createWrapper()

    expect(wrapper.find(`[data-test-id="${id}"]`).exists()).toBeTruthy()
  })

  it('dispatches actions on render', () => {
    createWrapper()

    expect(mockedActions.getTheme).toHaveBeenCalled()
    expect(mockedActions.setAllTodos).toHaveBeenCalled()
    expect(mockedActions.setId).toHaveBeenCalled()
  })

  it('dispatch set color when color picked', () => {
    const wrapper = createWrapper()

    wrapper.findComponent(ColorPicker).vm.$emit('change-theme', appThemes[appThemes.length - 1])

    expect(mockedActions.setTheme).toHaveBeenCalledWith(
      expect.any(Object), // The Vuex context
      appThemes[appThemes.length - 1]
    )
  })

  it('should match snapshot', () => {
    const wrapper = createWrapper()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
