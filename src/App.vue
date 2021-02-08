<template>
  <div id="app" class="container">
    <todo-list />
  </div>
</template>
<script>
  import TodoList from './components/TodoList.vue'

  export default {
    components: {
      TodoList,
    },
  }
</script>

<style>
  h1 {
    /* вынести стили в todolist */
    margin: 2rem;
    text-align: center;
  }

  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    padding: 0;
    background: #fff8f2;
    overflow-y: scroll;
  }

  button {
    cursor: pointer;
  }

  /* Portrait tablets and medium desktops */
  @media (min-width: 992px) and (max-width: 1199px) {
    html {
      font-size: 9px;
    }

    .todos {
      width: 90%;
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    html {
      font-size: 8px;
    }

    .todos {
      width: 90%;
    }
  }

  /* Landscape phones and portrait tablets */
  @media (max-width: 767px) {
    html {
      font-size: 7px;
    }

    .todos {
      width: 90%;
    }

    .editing-form input {
      display: block;
    }
  }

  /* Landscape phones and smaller */
  @media (max-width: 520px) {
    html {
      font-size: 6px;
    }

    .visible-lg {
      display: none;
    }

    .m-filter {
      display: inline-block;
    }
  }
</style>
