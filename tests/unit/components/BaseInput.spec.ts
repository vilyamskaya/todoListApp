import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import BaseInput from '@/components/BaseInput.vue'

enableAutoUnmount(afterEach)

const createWrapper = (props = {}) => {
  return shallowMount(BaseInput, {
    props: { ...props },
  })
}

const inputText = 'test text'

describe('BaseInput Component', () => {
  it('renders correctly when props value is passed', () => {
    const wrapper = createWrapper({ modelValue: inputText })
    const input = wrapper.find('[data-test-id="base_input"]').element as HTMLInputElement

    expect(input.value).toBe(inputText)
  })

  it('emits event when input value changes', async () => {
    const wrapper = createWrapper()
    const input = wrapper.find('[data-test-id="base_input"]')

    await input.setValue(inputText)

    expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([inputText])
  })

  it('should match snapshot', () => {
    const wrapper = createWrapper({ modelValue: inputText })

    expect(wrapper.html()).toMatchSnapshot()
  })
})
