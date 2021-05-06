<template>
  <li class="list-item">
    <div class="btns" v-if="!isEditing">
      <base-btn :name="'delete'" @click="deleteItem(index, $event)">
        <img src="../assets/img/garbage.svg" alt="delete item" />
      </base-btn>
      <base-btn :name="'edit'" @click="startEditing">
        <img src="../assets/img/pencil.svg" alt="edit item" />
      </base-btn>
    </div>
    <div class="btns" v-else>
      <base-btn :name="'finish-editing'" @click="finishEditing">
        <img src="../assets/img/check-white.svg" alt="save item" />
      </base-btn>
      <base-btn :name="'cancel-editing'" @click="cancelEditing">
        <img src="../assets/img/remove.svg" alt="close item" />
      </base-btn>
    </div>
    <button
      class="btn-complete"
      type="button"
      name="check-complete"
      @click="$emit('on-complete', $event)"
    >
      <img
        src="../assets/img/check-dark.svg"
        :class="{ visible: completed }"
        alt="check item"
      />
    </button>
    <button
      v-if="!isEditing"
      class="item-btn"
      :class="{ completed }"
      type="button"
      name="item"
      @dblclick="startEditing"
    >
      {{ text }}
    </button>
    <input
      v-else
      aria-label="Edit to-do"
      type="text"
      v-model="newText"
      @keyup.enter.prevent="finishEditing"
      v-focus
    />
  </li>
</template>

<script>
  import BaseBtn from './BaseBtn'

  export default {
    components: { BaseBtn },
    data() {
      return {
        isEditing: false,
        newText: '',
      }
    },
    props: {
      completed: {
        type: Boolean,
        default: false,
      },
      text: {
        type: String,
        default: '',
      },
      index: {
        type: Number,
        default: 0,
      },
    },
    directives: {
      focus: {
        inserted: function (el) {
          el.focus()
        },
      },
    },
    methods: {
      startEditing() {
        this.isEditing = true
        this.newText = this.text
      },
      finishEditing() {
        this.isEditing = false
        this.$emit('on-edit', this.newText)
      },
      cancelEditing() {
        this.isEditing = false
      },
      deleteItem(index) {
        this.$store.dispatch('deleteItem', index)
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/vars';
  @import '../assets/scss/mixins';

  .list-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    margin-bottom: $p-20;
    border: 1px solid var(--color-box);
    background: var(--color-box);
    @include from-br(m) {
      border: 5px solid var(--color-box);
    }

    .btns {
      display: flex;
    }

    .btn-complete {
      border: 3px solid var(--color-accent);
      background: var(--color-white);
      height: 45px;
      min-width: 45px;
      width: 45px;
      transition: all 0.5s;
      margin: $p-5;
      position: relative;
      @include from-br(m) {
        border-width: 5px;
        height: 60px;
        min-width: 60px;
        width: 60px;
        margin: $p-10;
      }

      &:hover {
        @include from-br(sm) {
          border-color: var(--color-black);
        }
      }

      &:focus {
        outline: none;
      }

      img {
        visibility: hidden;
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

      .visible {
        visibility: visible;
      }
    }

    .btn {
      margin-right: 0;
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

    .item-btn {
      width: 80%;
      text-align: left;
      border: none;
      background: none;
      padding-left: $p-5;
      @include from-br(m) {
        padding-left: $p-20 + 5px;
      }

      &:focus {
        outline: none;
      }

      &.completed {
        text-decoration: line-through;
        opacity: 0.5;
      }
    }

    input {
      width: 80%;
      display: block;
      height: 45px;
      border: 3px solid var(--color-black);
      border-radius: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      padding: 0 $p-10;
      transition: all 0.5s;
      margin: $p-5 $p-5 $p-5 0;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      @include from-br(m) {
        border-width: 5px;
        height: 60px;
        padding: 0 $p-20;
        margin: $p-10 $p-10 $p-10 0;
      }

      :focus {
        border-color: var(--color-accent);
        outline: none;
      }
    }
  }
</style>
