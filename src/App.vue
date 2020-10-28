<template>
  <div id="app">
    <h1>Твой список задач</h1>
    <todo-list/>
  </div>
</template>
<script>
import TodoList from './components/TodoList.vue'

export default {
  components: {
    'todo-list': TodoList
  }
}
</script>

<style>
  @font-face {
    font-family: "Amatic SC";
    src: url("assets/AmaticSC-Bold.ttf");
    font-display: swap;
  }

  #app {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    font-family: 'Amatic SC', cursive;
    line-height: 1;
    font-size: 10rem;
    font-weight: normal;
    margin: 2rem;
    text-align: center;
  }

  html {
    font-size: 10px;
  }

  body {
    margin: 0;
    padding: 0;
    background: #FFF8F2;
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
