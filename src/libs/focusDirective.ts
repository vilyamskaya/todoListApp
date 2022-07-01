import { Directive } from 'vue'

export const focus: Directive<HTMLInputElement> = {
  mounted(el: HTMLInputElement) {
    el.focus()
  },
}
