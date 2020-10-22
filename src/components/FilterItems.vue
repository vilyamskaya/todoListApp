<template>
  <div class="filter">
    <h2>{{ listName + ' задачи'}}</h2>
    <div class="filter-btns">
      <div class='m-filter'>
        <button
          type="button"
          class="btn btn-filter"
          @click="isMobile = !isMobile"
          @blur="isMobile = !isMobile"
        >Фильтры
        </button>
        <div class="content">
          <a
            href="#"
            class="m-btn"
            :class="{ selected: listName === 'Активные' }"
            @click.prevent="showActive">Активные
          </a>
          <a
            href="#"
            class="m-btn"
            :class="{ selected: listName === 'Выполненные' }"
            @click.prevent="showDone">Выполненные
          </a>
          <a
            href="#"
            class="m-btn"
            :class="{ selected: listName === 'Все' }"
            @click.prevent="showAll">Все
          </a>
        </div>
      </div>
      <div class="visible-lg">
        <button
          type="button"
          class="btn"
          :class="{ selected: listName === 'Активные' }"
          @click="showActive">Активные
        </button>
        <button
          type="button"
          class="btn"
          :class="{ selected: listName === 'Выполненные' }"
          @click="showDone">Выполненные
        </button>
        <button
          type="button"
          class="btn"
          :class="{ selected: listName === 'Все' }"
          @click="showAll">Все
        </button>
      </div>
      <button
        type="button"
        class="btn delete-all"
        @click="deleteAll">Очистить список
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  data () {
    return {
      isMobile: false
    }
  },
  computed: mapState([
    'todoList',
    'listName'
  ]),
  methods: mapMutations([
    'showActive',
    'showDone',
    'showAll',
    'deleteAll'
  ])
}
</script>

<style>
  .filter {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #FFF8F2;
    z-index: 2;
  }

  .filter-btns {
    display: flex;
    justify-content: space-between;
  }

  .filter button {
    width: auto;
    padding: 0 1rem;
  }

  .btn {
    border: 0.5rem solid #F49737;
    background: #F49737;
    font-family: 'Montserrat', sans-serif;
    font-size: 2rem;
    height: 6rem;
    width: 6rem;
    color: #FFF8F2;
    transition: all 0.5s;
    margin: 0.5rem;
  }

  .btn.selected {
    border-color: #2E2E34;
    background-color: #2E2E34;
  }

  .btn:hover {
    border-color: #2E2E34;
    background-color: #2E2E34;
  }

  .btn:active {
    color: transparent;
  }

  .btn:focus {
    outline: none;
  }

  .m-filter {
    display: none;
    position: relative;
  }

  .btn-filter {
    border: none;
  }

  .m-filter .content {
    display: none;
    background-color: #2E2E34;
    list-style: none;
    margin: 0;
    padding: 1rem 0;
    position: absolute;
    z-index: 2;
    top: 100%;
    left: 0;
    width: 20rem;
    text-align: center;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  .m-filter:hover .content {
    display: block;
  }

  .m-filter:hover .btn-filter {
    background-color: #2E2E34;
    color: #FFF8F2;
  }

  .m-btn {
    display: block;
    color: #FFF8F2;
    font-size: 2rem;
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin: 0;
    border-bottom: 1px solid transparent;
    transition: all 0.5s;
  }

  .m-btn:hover {
    border-bottom: 1px solid #F49737;
    color: #F49737;
  }

  .m-btn:active {
    color: #2E2E34;
    border-bottom: 1px solid #2E2E34;
  }
</style>
