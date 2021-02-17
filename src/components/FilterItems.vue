<template>
  <div class="filter">
    <h2 class="filter-title">{{ listName + ' задачи' }}</h2>
    <div class="filter-btns">
      <div
        :class="{
          'm-filter': isMobile,
          'desk-filter': !isMobile,
        }"
        @mouseleave="hideList"
      >
        <base-btn
          v-if="isMobile"
          :name="'filters'"
          class="btn-filter"
          @click="hidden = !hidden"
        >
          Фильтры
        </base-btn>
        <div class="content" :class="{ hidden: hidden && isMobile }">
          <component
            :is="isMobile ? 'a' : 'base-btn'"
            href="#"
            :name="'active'"
            :selected="listName === 'Активные'"
            :class="{
              'm-btn': isMobile,
            }"
            class="first-btn"
            @click.prevent="showActive"
            >Активные
          </component>
          <component
            :is="isMobile ? 'a' : 'base-btn'"
            href="#"
            :name="'done'"
            :selected="listName === 'Выполненные'"
            :class="{
              'm-btn': isMobile,
            }"
            @click.prevent="showDone"
            >Выполненные
          </component>
          <component
            :is="isMobile ? 'a' : 'base-btn'"
            href="#"
            :name="'all'"
            :selected="listName === 'Все'"
            :class="{
              'm-btn': isMobile,
            }"
            @click.prevent="showAll"
            >Все
          </component>
        </div>
      </div>
      <base-btn :name="'delete-all'" class="delete-all" @click="deleteAll">
        Очистить список
      </base-btn>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import BaseBtn from './BaseBtn'

  export default {
    components: {
      BaseBtn,
    },
    data() {
      return {
        hidden: true,
      }
    },
    computed: {
      ...mapGetters(['todoList', 'listName']),
      isMobile() {
        return this.isPhone || this.isTablet
      },
    },
    methods: {
      ...mapActions(['showActive', 'showDone', 'showAll', 'deleteAll']),
      hideList() {
        if (this.isMobile) this.hidden = true
      },
    },
  }
</script>

<style lang="scss" scoped>
  @import '../assets/scss/vars';
  @import '../assets/scss/mixins';

  .filter {
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: $color-bg;
    z-index: $z-plus;

    &-title {
      margin: $p-20;
      text-align: center;
    }

    &-btns {
      display: flex;
      justify-content: space-between;

      .m-filter {
        position: relative;
        margin: $p-5;
        margin-left: 0;

        .content {
          display: block;
          background-color: $color-black;
          margin: 0;
          padding: $p-10 0;
          position: absolute;
          z-index: $z-plus;
          top: 100%;
          left: 0;
          width: 150px;
          text-align: center;
          box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);

          &.hidden {
            display: none;
          }

          .m-btn {
            display: block;
            color: $color-bg;
            padding: $p-10;
            margin: 0;
            border-bottom: 1px solid transparent;
            transition: all 0.5s;
            @include from-br(m) {
              font-size: $fs-20;
            }

            :active {
              color: $color-accent;
              border-bottom: 1px solid $color-accent;
            }
          }
        }
      }

      .btn-filter {
        border: none;
        margin: 0;
      }

      .first-btn {
        margin-left: 0;
      }

      .delete-all {
        margin-right: 0;
      }
    }

    button {
      width: auto;
      padding: 0 $p-10;
    }
  }
</style>
