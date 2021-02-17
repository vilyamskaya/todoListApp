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
    border: 5px solid $color-accent;
    background: $color-accent;
    height: 45px;
    color: $color-bg;
    transition: all 0.5s;
    margin: $p-5;
    @include from-br(m) {
      height: 60px;
      margin: $p-10;
    }

    &:hover {
      @include from-br(sm) {
        border-color: $color-black;
        background-color: $color-black;
      }
    }

    .selected {
      border-color: $color-black;
      background-color: $color-black;
    }

    :active {
      color: transparent;
      background-color: $color-black;
      border-color: $color-black;
    }

    :focus {
      outline: none;
    }
  }
</style>
