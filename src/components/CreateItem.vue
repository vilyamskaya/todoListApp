<template>
  <div class="app-header">
    <p>Напиши список дел, чтобы не забыть их выполнить</p>
    <div class="create-form">
      <button
        class="btn"
        type="button"
        @click="addNewItem"
      ><span class="fa fa-check"></span>
      </button>
      <div class="wide">
        <input
          type="text"
          v-model="todoText"
          @keyup.enter.prevent="addNewItem"
          v-focus
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todoText: ''
    }
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    addNewItem: function () {
      if (this.todoText.length > 0) {
        this.$emit('on-add-todo', this.todoText)
      }
      this.todoText = ''
    }
  }
}
</script>

<style>
  .app-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    color: #2E2E34;
  }

  .app-header p {
    text-align: center;
  }

  .wide {
    overflow: hidden;
    margin-left: 0.5rem;
  }

  .create-form {
    min-width: 70%;
    margin-bottom: 8rem;
  }

  .create-form input {
    width: 100%;
    display: block;
    height: 6rem;
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    border: 0.5rem solid #F8DFC7;
    box-sizing: border-box;
    padding: 0 2rem;
    transition: all 0.5s;
    margin: 0.5rem;
  }

  .create-form input:focus {
    border-color: #F49737;
    outline: none;
  }

  .create-form .btn {
    float: right;
    display: block;
  }
</style>
