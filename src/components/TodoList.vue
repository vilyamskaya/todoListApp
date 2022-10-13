<template>
  <div class="todos">
    <h1 class="todos__title" data-test-id="todo_title">Твой список задач</h1>
    <create-item data-test-id="create_todo" />
    <transition name="slide-fade">
      <filter-items v-if="todoList.length" data-test-id="filter_todos" />
    </transition>
    <transition name="slide-fade" appear>
      <div v-if="filteredTodos.length" class="todos__wrapper" data-test-id="todo_list">
        <transition-group name="list" tag="ul" class="todos__list" appear>
          <todo-item v-for="(item, i) in filteredTodos" :index="i" :key="item.id" :todo="item" />
        </transition-group>
      </div>
      <p class="todos__empty text-md" data-test-id="todo_empty" v-else>Список задач пуст</p>
    </transition>
  </div>
</template>

<script lang="ts">
  import CreateItem from '@/components/CreateItem.vue'
  import TodoItem from '@/components/TodoItem.vue'
  import FilterItems from '@/components/FilterItems.vue'

  import { useStore } from '@/store'
  import { computed, defineComponent } from 'vue'

  export default defineComponent({
    components: {
      CreateItem,
      TodoItem,
      FilterItems,
    },
    setup() {
      const store = useStore()
      const id = computed(() => store.getters.id)
      const todoList = computed(() => store.getters.todoList)
      const filteredTodos = computed(() => store.getters.filteredTodos)

      return { id, todoList, filteredTodos }
    },
  })
</script>

<style lang="scss" scoped>
  .todos {
    display: flex;
    flex-direction: column;
    padding: 0 $p-20;
    @include from-br(m) {
      width: 80%;
      max-width: 1220px;
      margin: 0 auto;
      padding: 0;
    }

    &__title {
      margin: $p-20 0;
      text-align: center;
    }

    &__list {
      padding: 0;
      margin: $p-20 0 $p-40;
      position: relative;
      @include from-br(m) {
        margin: $p-20 0 $p-60;
      }
    }

    &__empty {
      position: absolute;
      width: 50%;
      bottom: 15%;
      left: 25%;
      border-top: 1px solid var(--color-text);
      padding-top: $p-40;
      margin-top: $p-60;
      text-align: center;
    }
  }
</style>
