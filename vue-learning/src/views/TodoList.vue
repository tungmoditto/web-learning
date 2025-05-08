<template>
  <div class="todo-page">
    <TodoItems @delete="onDelete(todo)" v-for="todo in todoListData" :key="todo.id" :item="todo">
    </TodoItems>
  </div>
</template>
<script setup>
import TodoItems from '@/components/TodoItems.vue'
import { ref } from 'vue'
const todoListData = ref([
  {
    name: 'todo1',
    id: 1,
    isComplete: true,
    description: 'To do homework 1',
  },

  {
    name: 'todo2',
    id: 2,
    isComplete: false,
    description: 'To do homework 2',
  },

  {
    name: 'todo3',
    id: 3,
    isComplete: true,
    description: 'To do homework 3',
  },
])
const onDelete = (todo) => {
  console.log(todo)
  todoListData.value = todoListData.value.filter((item) => item.id !== todo.id)
}
</script>
<style lang="scss">
.todo-page {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
