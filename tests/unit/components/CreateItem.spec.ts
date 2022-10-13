import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import { ActionTree, createStore } from 'vuex'
import { key } from '@/store'
import CreateItem from '@/components/CreateItem.vue'
import BaseInput from '@/components/BaseInput.vue'

const text: string = 'test text'
let mockedActions: ActionTree<unknown, unknown>

const createWrapper = () => {
  const store = createStore({
    actions: { ...mockedActions },
  })

  return shallowMount(CreateItem, {
    global: {
      plugins: [[store, key]],
    },
  })
}

beforeEach(() => {
  mockedActions = {
    addItem: jest.fn(),
  }
})

enableAutoUnmount(afterEach)

describe('CreateItem Component', () => {
  it('renders header text correctly', () => {
    const wrapper = createWrapper()
    const headerText = 'Напиши список дел, чтобы не забыть их выполнить'
    expect(wrapper.find('[data-test-id="add_item_header"]').text()).toBe(headerText)
  })

  it('renders input correctly', () => {
    const wrapper = createWrapper()
    expect(wrapper.findComponent(BaseInput).exists()).toBeTruthy()
  })

  it('renders button correctly', () => {
    const wrapper = createWrapper()
    expect(wrapper.find('[data-test-id="add_item_btn"]').exists()).toBeTruthy()
  })

  it('adds item to store on press enter input', async () => {
    const wrapper = createWrapper()
    const input = wrapper.findComponent(BaseInput)

    input.vm.$emit('update:modelValue', text)
    await input.trigger('keyup.enter')

    expect(mockedActions.addItem).toHaveBeenCalledWith(
      expect.any(Object), // The Vuex context
      text
    )
  })

  it('adds item to store on click button', async () => {
    const wrapper = createWrapper()
    wrapper.findComponent(BaseInput).vm.$emit('update:modelValue', text)
    await wrapper.find('[data-test-id="add_item_btn"]').trigger('click')

    expect(mockedActions.addItem).toHaveBeenCalledWith(
      expect.any(Object), // The Vuex context
      text
    )
  })

  it('should match snapshot', () => {
    const wrapper = createWrapper()
    expect(wrapper.html()).toMatchSnapshot()
  })
})
