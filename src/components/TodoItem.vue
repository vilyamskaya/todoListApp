<template>
  <li class="listItem">
    <SwipeActions isClosedOnClick>
      <div class="listItem__container">
        <base-btn
          v-if="!isEditing"
          :icon="todo.completed ? 'check' : ''"
          name="check-complete"
          class="listItem__btnComplete"
          data-test-id="todo_item_check"
          @click="completeItem"
        />
        <div class="listItem__labelContainer">
          <div
            v-if="!isEditing"
            class="listItem__label"
            :class="{ completed: todo.completed }"
            data-test-id="todo_item_text"
            @dblclick="startEditing"
          >
            {{ todo.text }}
          </div>
          <base-input
            v-else
            v-model="model"
            aria-label="Edit to-do"
            class="listItem__input"
            data-test-id="todo_item_input"
          />
        </div>
        <div class="listItem__btns">
          <template v-if="!isEditing">
            <base-btn
              icon="pencil"
              name="edit"
              class="listItem__btn listItem__btn--desk"
              data-test-id="todo_item_edit"
              @click="startEditing"
            />
            <base-btn
              icon="garbage"
              name="delete"
              class="listItem__btn listItem__btn--desk"
              data-test-id="todo_item_delete"
              @click="deleteItem"
            />
          </template>
          <template v-else>
            <base-btn icon="check" name="finish-editing" data-test-id="todo_item_save" @click="finishEditing" />
            <base-btn icon="close" name="cancel-editing" data-test-id="todo_item_cancel" @click="endEditing" />
          </template>
        </div>
      </div>
      <template #right>
        <div class="listItem__btns listItem__btns--actions">
          <base-btn icon="pencil" name="edit" class="listItem__btn" @click="startEditing" />
          <base-btn icon="garbage" name="delete" class="listItem__btn" @click="deleteItem" />
        </div>
      </template>
    </SwipeActions>
  </li>
</template>

<script lang="ts">
  import BaseBtn from '@/components/BaseBtn.vue'
  import BaseInput from '@/components/BaseInput.vue'
  import SwipeActions from '@/components/SwipeActions.vue'

  import { useStore } from '@/store'
  import { computed, defineComponent, ref } from 'vue'

  export default defineComponent({
    components: { BaseInput, BaseBtn, SwipeActions },
    props: {
      todo: Object as () => TTodoItem,
      index: Number,
    },
    setup(props) {
      const store = useStore()
      const isEditing = ref(false)
      const startEditing = () => (isEditing.value = true)

      const newText = ref(props.todo?.text ?? '')
      const model = computed({
        get(): string {
          return props.todo?.text ?? ''
        },
        set(value: string) {
          newText.value = value
        },
      })

      const endEditing = () => (isEditing.value = false)
      const finishEditing = () => {
        if (newText.value.length) {
          const newItem = { ...props.todo, text: newText.value }
          endEditing()
          store.dispatch('editItem', newItem)
        }
      }
      const deleteItem = () => store.dispatch('deleteItem', props.index)
      const completeItem = () => {
        const newItem = { ...props.todo, completed: !props.todo?.completed }
        store.dispatch('editItem', newItem)
      }

      return {
        isEditing,
        model,
        newText,
        startEditing,
        finishEditing,
        endEditing,
        deleteItem,
        completeItem,
      }
    },
  })
</script>

<style lang="scss" scoped>
  .listItem {
    border-radius: 20px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    box-shadow: var(--shadow);
    background-color: transparent;

    & + & {
      margin-top: $p-10;
      @include from-br(m) {
        margin-top: $p-20;
      }
    }

    &__container {
      display: flex;
      padding: $p-10;
      @include from-br(m) {
        padding: $p-20;
      }
    }

    &__btns {
      display: flex;

      &--actions {
        margin: 0 $p-10;
      }
    }

    &__btn {
      &--desk {
        display: none;
        @include from-br(sm) {
          display: block;
        }
      }
    }

    &__btnComplete {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      min-width: 40px;
      height: 40px;
      min-height: 40px;
      border-radius: 20px;
      box-shadow: var(--shadow);
      background-color: transparent;
      transition: all 0.5s;

      &:hover {
        @include from-br(sm) {
          background-color: var(--color-hover);
        }
      }

      &:focus {
        outline: none;
      }
    }

    &__icon {
      width: 16px;
      height: 16px;
      color: var(--color-accent);
    }

    &__labelContainer {
      flex-grow: 1;
      margin-right: $p-5;
      @include from-br(m) {
        margin-right: $p-10;
      }
    }

    &__label {
      color: var(--color-text);
      padding-left: $p-5;
      line-height: 20px;
      @include from-br(m) {
        padding-left: $p-20 + 5px;
        line-height: 40px;
      }

      &:focus {
        outline: none;
      }

      &.completed {
        text-decoration: line-through;
        opacity: 0.5;
      }
    }

    &__input {
      width: 100%;
    }
  }
</style>
