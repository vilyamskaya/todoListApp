<template>
  <div class="header">
    <p class="header__text text-md">Напиши список дел, чтобы не забыть их выполнить</p>
    <div class="header__form">
      <base-input
        v-model="todoText"
        aria-label="Write a to-do"
        class="header__input"
        placeholder="Важное дело"
        @keyup.enter.prevent="addNewItem"
      />
      <base-btn icon="check" class="header__addBtn" name="add" @click="addNewItem" />
    </div>
  </div>
</template>

<script lang="ts">
  import BaseBtn from '@/components/BaseBtn.vue'
  import BaseInput from '@/components/BaseInput.vue'

  import { focus } from '@/libs/focusDirective'
  import store from '@/store'

  import { defineComponent, ref } from 'vue'

  export default defineComponent({
    components: { BaseInput, BaseBtn },
    directives: { focus },
    setup() {
      const todoText = ref('')
      const addNewItem = () => {
        if (todoText.value?.length > 0) {
          store.dispatch('addItem', todoText.value)
        }
        todoText.value = ''
      }

      return { todoText, addNewItem }
    },
  })
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: var(--color-text);

    &__text {
      text-align: center;
      margin: 0 $p-20 $p-20;
      @include from-br(sm) {
        margin: $p-20 0;
      }
    }

    &__form {
      display: flex;
      justify-content: space-between;
      width: 100%;
      max-width: 700px;
      margin-bottom: $p-20;
      @include from-br(m) {
        margin-bottom: $p-40 * 2;
      }
    }

    &__input {
      margin-right: $p-10;
      @include from-br(m) {
        margin-right: $p-20;
      }
    }
  }
</style>
