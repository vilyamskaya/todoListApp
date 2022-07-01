<template>
  <button type="button" class="btn">
    <inline-svg v-if="icon" :src="require(`@/assets/img/${icon}.svg`)" class="btn__icon" />
    <slot />
  </button>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  export default defineComponent({
    name: 'BaseBtn',
    props: {
      icon: {
        type: String,
      },
    },
  })
</script>

<style lang="scss" scoped>
  .btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    min-width: 40px;
    min-height: 40px;
    height: 40px;
    border-radius: 20px;
    transition: all 0.5s;
    background: transparent;
    color: var(--color-accent);
    box-shadow: var(--shadow);

    & + & {
      margin-left: $p-5;
      @include from-br(m) {
        margin-left: $p-10;
      }
    }

    &:hover {
      @include from-br(m) {
        border-color: var(--color-hover);
        background-color: var(--color-hover);
      }
    }

    &:active {
      color: transparent;
      border-color: var(--color-accent);
      background-color: var(--color-accent);
    }

    &:focus {
      outline: none;
    }

    &__icon {
      width: 16px;
      height: 16px;
      color: var(--color-accent);
      @include from-br(m) {
        width: 16px;
        height: 16px;
      }
    }
  }
</style>
