<template>
  <input v-model="model" type="text" v-focus class="input" />
</template>

<script lang="ts">
  import { focus } from '@/libs/focusDirective'

  import { computed, defineComponent } from 'vue'

  export default defineComponent({
    name: 'BaseInput',
    inheritAttrs: true,
    directives: { focus },
    props: {
      modelValue: {
        type: String,
        default: '',
      },
    },
    emits: ['update:modelValue'],
    setup(props, context) {
      const model = computed({
        get(): string {
          return props.modelValue
        },
        set(value: string) {
          context.emit('update:modelValue', value)
        },
      })

      return { model }
    },
  })
</script>

<style lang="scss" scoped>
  .input {
    flex-grow: 1;
    height: 40px;
    padding: 0 $p-20;
    border-radius: 20px;
    transition: all 0.5s;
    background-color: transparent;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    color: var(--color-text);
    box-shadow: var(--shadow);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:focus {
      background-color: var(--color-hover);
      outline: none;
    }
  }
</style>
