<template>
  <li class="list-item">
    <button
      class="btn"
      type="button"
      @click="deleteItem(index, $event)"
    ><span class="fa fa-trash-o"></span>
    </button>
    <button
      class="btn"
      type="button"
      @click="startEditing"
    ><span class="fa fa-pencil"></span>
    </button>
    <button
      class="btn-complete"
      type="button"
      @click="$emit('on-complete', $event)"
    ><span
      :class="{visible: completed}"
      class="fa fa-check"
    ></span>
    </button>
    <button
      v-if="!isEditing"
      class="item-btn"
      :class="{ completed }"
      type="button"
      @dblclick="startEditing"
    >{{ text }}
    </button>
    <div v-else class="editing-form">
      <div class="finish-editing-btns">
        <button
          class="btn"
          type="button"
          @click="finishEditing"
        ><span class="fa fa-check"></span>
        </button>
        <button
          class="btn"
          type="button"
          @click="cancelEditing"
        ><span class="fa fa-times"></span>
        </button>
      </div>
      <div class="wide">
        <input
          type="text"
          v-model="newText"
          @keyup.enter.prevent="finishEditing"
          v-focus
        >
      </div>
    </div>
  </li>
</template>

<script>
export default {
  data () {
    return {
      isEditing: false,
      newText: ''
    }
  },
  props: {
    completed: Boolean,
    text: String,
    index: Number
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  methods: {
    startEditing: function () {
      this.isEditing = true
      this.newText = this.text
    },
    finishEditing: function () {
      this.isEditing = false
      this.$emit('on-edit', this.newText)
    },
    cancelEditing: function () {
      this.isEditing = false
    },
    deleteItem: function (index, item) {
      this.$store.commit('deleteItem', {
        index,
        item
      })
    }

  }
}
</script>

<style>
  .btn-complete {
    border: 0.5rem solid #F49737;
    background: #fff;
    height: 6rem;
    width: 6rem;
    text-align: center;
    font-size: 2.5rem;
    color: transparent;
    transition: all 0.5s;
    margin: 0.5rem;
  }

  .visible {
    color: #2E2E34;
  }

  .btn-complete:hover {
    border-color: #2E2E34;
  }

  .btn-complete:focus {
    border-color: #2E2E34;
    outline: none;
  }

  .list-item {
    display: flex;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
    list-style: none;
    margin-bottom: 2rem;
    border: 0.5rem solid #F8DFC7;
    background: #F8DFC7;
  }

  .item-btn {
    width: 80%;
    text-align: left;
    border: none;
    background: none;
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    color: #2E2E34;
    padding-left: 3.5rem;
  }

  .item-btn:focus {
    outline: none;
  }

  .item-btn.completed {
    text-decoration: line-through;
    opacity: 0.5;
  }

  .editing-form {
    width: 80%;
  }

  .finish-editing-btns {
    width: 14.5rem;
    margin-left: 0.5rem;
    float: right;
    display: block;
  }

  .editing-form input {
    width: 100%;
    display: block;
    height: 6rem;
    font-size: 2.5rem;
    font-family: 'Montserrat', sans-serif;
    border: 0.5rem solid #2E2E34;
    box-sizing: border-box;
    padding: 0 2rem;
    transition: all 0.5s;
    margin: 0.5rem;
  }

  .editing-form input:focus {
    border-color: #F49737;
    outline: none;
  }
</style>
