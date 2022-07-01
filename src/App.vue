<template>
  <div id="app" class="app" :class="theme.title">
    <color-picker :themes="themes" @change-theme="setTheme" class="app__colorPicker" />
    <todo-list />
  </div>
</template>

<script lang="ts">
  import TodoList from '@/components/TodoList.vue'
  import ColorPicker from '@/components/ColorPicker.vue'

  import { appThemes } from '@/libs/appThemes'

  import store from '@/store'

  import { computed, defineComponent } from 'vue'

  export default defineComponent({
    name: 'App',
    components: { TodoList, ColorPicker },
    setup() {
      const themes: TAppThemes = [...appThemes]
      const theme = computed(() => store.getters.theme)

      const setTheme = (theme: TAppTheme) => store.dispatch('setTheme', theme)

      store.dispatch('getTheme')
      store.dispatch('setAllTodos')
      store.dispatch('setId')

      return { themes, theme, setTheme }
    },
  })
</script>

<style scoped lang="scss">
  .app {
    position: relative;
    min-height: 100vh;
    background: var(--bg);
    color: var(--color-text);
    transition: all 1s;
    &__colorPicker {
      position: absolute;
      top: $p-10;
      right: $p-10;
    }
  }

  .light {
    --color-accent: #fc6d00;
    --color-bg: #e1e1e1;
    --color-white: #ffffff;
    --color-text: #2e2e34;
    --bg: linear-gradient(-45deg, var(--color-bg) 80%, var(--color-white));
    --color-hover: rgba(195, 195, 195, 0.2);
    --shadow: 5px 5px 8px rgba(195, 195, 195, 0.5), -5px -5px 8px rgba(255, 255, 255, 0.8);
  }

  .dark {
    --color-accent: #ff00a6;
    --color-bg: #26262d;
    --color-white: #ffffff;
    --color-text: #eeebe6;
    --bg: linear-gradient(-45deg, var(--color-bg) 80%, #35353a);
    --shadow: 5px 5px 8px rgba(20, 20, 20, 0.7), -5px -5px 8px rgba(80, 80, 80, 0.5);
  }
</style>
