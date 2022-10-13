import { enableAutoUnmount, shallowMount } from '@vue/test-utils'
import { appThemes } from '@/libs/appThemes'
import ColorPicker from '@/components/ColorPicker.vue'

enableAutoUnmount(afterEach)

const themes = [...appThemes]

const createWrapper = () => {
  return shallowMount(ColorPicker, {
    props: { themes },
  })
}

describe('ColorPicker Component', () => {
  it('renders correctly when themes are passed', () => {
    const wrapper = createWrapper()

    expect(wrapper.findAll('[data-test-id="color_theme"]').length).toBe(themes.length)
  })

  it('emits event when color theme is clicked', () => {
    const wrapper = createWrapper()

    const lastThemeIndex = themes.length - 1
    const theme = wrapper.findAll('[data-test-id="color_theme"]')?.[lastThemeIndex]
    theme?.trigger('click')

    expect(wrapper.emitted('change-theme')).toBeTruthy()
    expect(wrapper.emitted('change-theme')?.[0]).toEqual([themes[lastThemeIndex]])
  })

  it('should match snapshot', () => {
    const wrapper = createWrapper()

    expect(wrapper.html()).toMatchSnapshot()
  })
})
