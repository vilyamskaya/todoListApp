<template>
  <button type="button" :name="name" class="btn" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        default: '',
      },
      selected: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/vars';
  @import '../assets/scss/mixins';

  .btn {
    border: 5px solid var(--color-accent);
    background: var(--color-accent);
    height: 45px;
    color: var(--color-white);
    transition: all 0.5s;
    margin: $p-5;
    @include from-br(m) {
      height: 60px;
      margin: $p-10;
    }

    &:hover {
      @include from-br(m) {
        border-color: var(--color-black);
        background-color: var(--color-black);
      }
    }

    .selected {
      border-color: var(--color-black);
      background-color: var(--color-black);
    }

    :active {
      color: transparent;
      background-color: var(--color-black);
      border-color: var(--color-black);
    }

    :focus {
      outline: none;
    }
  }
</style>
