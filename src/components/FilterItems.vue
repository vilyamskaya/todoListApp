<template>
  <div class="filter">
    <h2 class="filter__title">{{ listName + ' задачи' }}</h2>
    <div class="filter__btns">
      <div class="filter__container">
        <base-btn
          v-for="(value, type) in listNames"
          :key="type"
          name="active"
          :class="{ selected: listName === value }"
          class="filter__btn"
          @click="filterTodos(type)"
        >
          {{ value }}
        </base-btn>
      </div>
      <base-btn name="delete_all" class="filter__btn filter__btnDelete" @click="deleteAll">Очистить</base-btn>
    </div>
  </div>
</template>

<script lang="ts">
  import BaseBtn from '@/components/BaseBtn.vue'
  import { ListNames } from '@/enums/listNames'
  import store from '@/store'

  import { computed, defineComponent } from 'vue'

  export default defineComponent({
    components: { BaseBtn },
    setup() {
      const listName = computed(() => store.getters.listName)
      const listNames: Record<string, ListNames> = {}
      Object.entries(ListNames).forEach((el) => (listNames[el[0]] = el[1]))

      const filterTodos = (type: string): void => {
        let newType = type

        if (window.innerWidth < 768) {
          const listNamesKeys = Object.keys(listNames)
          const index = listNamesKeys.indexOf(newType)
          newType = listNamesKeys[index === listNamesKeys.length - 1 ? 0 : index + 1]
        }

        store.dispatch(`show${newType[0].toUpperCase()}${newType.slice(1)}`)
      }
      const deleteAll = (): void => {
        store.dispatch('deleteAll')
      }

      return {
        listName,
        listNames,
        filterTodos,
        deleteAll,
      }
    },
  })
</script>

<style lang="scss" scoped>
  .filter {
    display: flex;
    position: sticky;
    z-index: $z-plus;
    top: 0;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 -$p-10;
    padding: $p-10;
    background-color: transparent;
    backdrop-filter: blur(5px);

    &__container {
      display: flex;
      flex-direction: column;
      @include from-br(sm) {
        flex-direction: row;
      }
    }

    &__title {
      margin: $p-20 0;
    }

    &__btns {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    &__btn {
      display: none;
      width: auto;
      padding: 0 $p-20;
      border: none;
      @include from-br(sm) {
        display: block;
      }

      & + & {
        margin-left: 0;
        @include from-br(sm) {
          margin-top: 0;
          margin-left: $p-10;
        }
      }

      &.selected {
        display: block;
        color: var(--color-white);
        border-color: var(--color-accent);
        background-color: var(--color-accent);
      }
    }

    &__btnDelete {
      display: block;
      margin-right: 0;
    }
  }
</style>
