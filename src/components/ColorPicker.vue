<template>
  <div class="color-picker">
    <div
      v-for="(color, i) in colors"
      :key="`color-${i}`"
      class="color-picker__item"
      :style="`background-color: ${color.color}`"
      @click="$emit('click-color', color)"
    ></div>
  </div>
</template>

<script>
  export default {
    props: {
      colors: {
        type: Array,
        default() {
          return []
        },
      },
    },
  }
</script>

<style scoped lang="scss">
  @import '../assets/scss/vars';
  @import '../assets/scss/mixins';

  .color-picker {
    display: flex;
    max-width: 50%;
    &__item {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      border: 3px solid var(--color-box);
      cursor: pointer;
      & ~ * {
        margin-left: $p-10;
      }
    }
  }
</style>
