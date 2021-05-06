<template>
  <div id="app" class="app" :class="color.title">
    <color-picker
      :colors="colors"
      @click-color="$store.dispatch('setColor', $event)"
      class="picker"
    />
    <todo-list />
  </div>
</template>
<script>
  import TodoList from './components/TodoList.vue'
  import ColorPicker from './components/ColorPicker'
  import './assets/scss/global.scss'
  import { mapGetters } from 'vuex'

  export default {
    components: {
      TodoList,
      ColorPicker,
    },
    data() {
      return {
        colors: [
          {
            title: 'orange',
            color: '#f49737',
          },
          {
            title: 'blue',
            color: '#afdce2',
          },
        ],
      }
    },
    computed: {
      ...mapGetters(['color']),
    },
    created() {
      this.$store.dispatch('getColor')
    },
  }
</script>

<style scoped lang="scss">
  @import './assets/scss/vars';
  @import './assets/scss/mixins';

  .app {
    position: relative;
    min-height: 100vh;
    background: var(--color-bg);
    .picker {
      position: relative;
      top: $p-10;
      left: $p-10;
      @include from-br(m) {
        position: absolute;
      }
    }
  }
  .orange {
    --color-accent: #f49737;
    --color-bg: #fff8f2;
    --color-black: #2e2e34;
    --color-box: #f8dfc7;
    --color-white: #ffffff;
  }
  .blue {
    --color-accent: #afdce2;
    --color-bg: #fff8f2;
    --color-black: #333333;
    --color-box: #eeebe6;
    --color-white: #ffffff;
  }
</style>
