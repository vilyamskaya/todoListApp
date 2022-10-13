<template>
  <div class="colorPicker">
    <div
      v-for="(theme, i) in themes"
      :key="`color-${i}`"
      class="colorPicker__item"
      :style="`background-color: ${theme.color}`"
      @click="changeTheme(theme)"
      data-test-id="color_theme"
    ></div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'ColorPicker',
    props: {
      themes: {
        type: Array as () => TAppThemes,
        default: () => [],
      },
    },
    setup(props, context) {
      const changeTheme = (theme: TAppTheme) => {
        context.emit('change-theme', theme)
      }

      return { changeTheme }
    },
    emits: ['change-theme'],
  })
</script>

<style scoped lang="scss">
  .colorPicker {
    display: flex;
    flex-direction: column;
    max-width: 50%;
    @include from-br(sm) {
      flex-direction: row;
    }

    &__item {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      cursor: pointer;
      @include from-br(sm) {
        width: 30px;
        height: 30px;
      }

      & + & {
        margin-top: $p-5;
        @include from-br(sm) {
          margin-top: 0;
          margin-left: $p-10;
        }
      }
    }
  }
</style>
