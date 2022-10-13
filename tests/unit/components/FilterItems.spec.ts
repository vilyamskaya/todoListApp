import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import { ActionTree, createStore } from 'vuex'
import { key } from '@/store'
import { ListNames } from '@/enums/listNames'
import FilterItems from '@/components/FilterItems.vue'

let mockedActions: ActionTree<unknown, unknown> = {}

const createWrapper = () => {
  const store = createStore({
    actions: { ...mockedActions },
    getters: {
      listName: () => ListNames.Active,
    },
  })

  return shallowMount(FilterItems, {
    global: {
      plugins: [[store, key]],
    },
  })
}

beforeEach(() => {
  mockedActions = {
    deleteAll: jest.fn(),
    showFiltered: jest.fn(),
  }
})

enableAutoUnmount(afterEach)

describe('FilterItems Component', () => {
  it('renders header text correctly', () => {
    const wrapper = createWrapper()
    const headerText = `${ListNames.Active} задачи`

    expect(wrapper.find('[data-test-id="filter_items_header"]').text()).toBe(headerText)
  })

  it('renders correctly when list types are passed', () => {
    const wrapper = createWrapper()
    expect(wrapper.findAll('[data-test-id="filter_items_list"]').length).toBe(Object.keys(ListNames).length)
  })

  it('dispatches change filter list action when filter clicked', async () => {
    const wrapper = createWrapper()

    const filterBtn = wrapper.findAll('[data-test-id="filter_items_list"]').at(Object.keys(ListNames).length - 1)
    await filterBtn?.trigger('click')

    expect(mockedActions.showFiltered).toHaveBeenCalledWith(
      expect.any(Object), // The Vuex context
      filterBtn?.attributes('name')
    )
  })

  it('dispatches delete todos action when delete button clicked', async () => {
    const wrapper = createWrapper()
    await wrapper.find('[data-test-id="filter_items_delete"]').trigger('click')

    expect(mockedActions.deleteAll).toHaveBeenCalled()
  })

  it('should match snapshot', () => {
    const wrapper = createWrapper()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
