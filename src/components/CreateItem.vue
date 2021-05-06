<template>
  <div class="app-header">
    <p class="text-md">Напиши список дел, чтобы не забыть их выполнить</p>
    <div class="create-form">
      <base-btn class="btn" :name="'add'" @click="addNewItem">
        <img src="../assets/img/check-white.svg" alt="add item" />
      </base-btn>
      <div class="wide">
        <input
          aria-label="Write a to-do"
          class="create-form-input"
          type="text"
          v-model="todoText"
          @keyup.enter.prevent="addNewItem"
          v-focus
        />
      </div>
    </div>
  </div>
</template>

<script>
  import BaseBtn from './BaseBtn'

  export default {
    components: { BaseBtn },
    data() {
      return {
        todoText: '',
      }
    },
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        },
      },
    },
    methods: {
      addNewItem() {
        if (this.todoText.length > 0) {
          this.$store.dispatch('addItem', this.todoText)
        }
        this.todoText = ''
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/vars';
  @import '../assets/scss/mixins';

  .app-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-black);

    p {
      text-align: center;
      margin: $p-20 0;
    }

    .create-form {
      width: 100%;
      margin-bottom: $p-20 * 2;
      @include from-br(m) {
        width: 70%;
        margin-bottom: $p-40 * 2;
      }

      .wide {
        overflow: hidden;
        margin-left: $p-5;
      }

      &-input {
        width: 98%;
        display: block;
        height: 45px;
        border: 3px solid var(--color-box);
        border-radius: 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        padding: 0 $p-10;
        transition: all 0.5s;
        margin: $p-5;
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        @include from-br(m) {
          height: 60px;
          border-width: 5px;
          margin: $p-10;
        }

        &:focus {
          border-color: var(--color-accent);
          outline: none;
        }
      }

      .btn {
        float: right;
        display: block;
        width: 45px;
        position: relative;
        @include from-br(m) {
          width: 60px;
        }

        img {
          width: 12px;
          height: 12px;
          position: absolute;
          top: calc(50% - 6px);
          left: calc(50% - 6px);
          @include from-br(m) {
            width: 16px;
            height: 16px;
            top: calc(50% - 8px);
            left: calc(50% - 8px);
          }
        }
      }
    }
  }
</style>
