<template>
  <div class="container">
    <div class="todo-page">
      <TodoItems
        @delete="onDelete"
        @edit="onEdit"
        @toggleDone="onToggleDone"
        v-for="todo in todoListData"
        :key="todo.id"
        :item="todo"
      >
      </TodoItems>
    </div>
    <div class="todo-form">
      <input v-model="form.name" placeholder="Name" />
      <input v-model="form.description" placeholder="Descrption" />
      <button @click="handleSave">{{ isEditing ? 'Update' : 'Add' }}</button>
    </div>
  </div>
</template>
<script setup>
import TodoItems from '@/components/TodoItems.vue'
import { ref } from 'vue'
const form = ref({
  id: null,
  name: '',
  description: '',
  isComplete: false,
})
const isEditing = ref(false)

const handleSave = () => {
  if (isEditing.value) {
    const index = todoListData.value.findIndex((item) => item.id === form.value.id)
    if (index !== -1) {
      todoListData.value[index] = { ...form.value }
    }
    isEditing.value = false
  } else {
    todoListData.value.push({
      ...form.value,
      id: Date.now(),
      isComplete: false,
    })
  }
  form.value = { id: null, name: '', description: '', isComplete: false }
}

const onEdit = (todo) => {
  form.value = { ...todo }
  isEditing.value = true
}

const onToggleDone = (todo) => {
  const index = todoListData.value.findIndex((item) => item.id === todo.id)
  if (index !== -1) {
    todoListData.value[index].isComplete = !todoListData.value[index].isComplete
  }
}

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
.container {
  display: flex;
  align-items: flex-start;
  gap: 32px;

  .todo-page {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .todo-form {
    position: sticky;
    top: 20px;
    margin-top: 24px;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 400px;

    input {
      padding: 10px;
      border-radius: 6px;
      border: 1px solid #ccc;
      font-size: 14px;
      outline: none;
      color: #000;

      &:focus {
        border-color: #888;
      }
    }

    button {
      align-self: flex-start;
      background-color: cyan;
      color: white;
      padding: 10px 16px;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      font-weight: bold;
      transition: background-color 0.2s;

      &:hover {
        background-color: blue;
      }
    }
  }
}
.description {
  white-space: pre-wrap;
  word-break: break-word;
}
</style>
