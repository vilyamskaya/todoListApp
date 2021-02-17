<template>
  <div id="app">
    <todo-list />
  </div>
</template>
<script>
  import TodoList from './components/TodoList.vue'
  import './assets/scss/global.scss'

  export default {
    components: {
      TodoList,
    },
  }
</script>
