import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import BaseBtn from '@/components/BaseBtn.vue'

enableAutoUnmount(afterEach)

const btnText = 'Open'

const createWrapper = () => {
  return shallowMount(BaseBtn, {
    slots: { default: btnText },
    global: {
      stubs: {
        InlineSvg: true,
      },
    },
  })
}

describe('BaseBtn Component', () => {
  it('renders button text', () => {
    const wrapper = createWrapper()

    expect(wrapper.find('[data-test-id="base_btn"]').text()).toBe(btnText)
  })

  it('should match snapshot', () => {
    const wrapper = createWrapper()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
