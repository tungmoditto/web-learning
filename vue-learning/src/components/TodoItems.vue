<template>
  <div class="todo-item">
    <div class="todo-content-left">
      <div :class="item.isComplete ? '' : 'hidden'">✅</div>
      <div class="item-content">
        <span class="title-content" :class="item.isComplete ? 'complete' : ''">
          {{ item.name }}
        </span>
        <span class="description"> {{ item.description }} </span>
      </div>
    </div>
    <button class="delete-button" @click="handleDelete">delete</button>
    <button class="edit-button" @click="handleEdit">edit</button>
    <button class="done-button" @click="handleToggleDone">
      {{ item.isComplete ? 'undo' : 'done' }}
    </button>
  </div>
</template>

<script setup>
const emit = defineEmits(['delete', 'edit', 'toggleDone'])

const props = defineProps({
  item: Object,
})

const handleDelete = () => {
  emit('delete', props.item)
}

const handleEdit = () => {
  emit('edit', props.item)
}

const handleToggleDone = () => {
  emit('toggleDone', props.item)
}
</script>
<style lang="scss">
.todo-item {
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: space-between;
  .todo-content-left {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
  }
  .hidden {
    opacity: 0;
  }
  .item-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    .complete {
      color: green;
      text-decoration: line-through;
    }
    .title-content {
      font-size: 14px;
      font-weight: 600;
    }
    .description {
      font-size: 12px;
    }
  }
  .delete-button {
    background-color: red;
    border-radius: 3px;
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
  }
  .edit-button {
    background-color: blue;
    border-radius: 3px;
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
  }
  .done-button {
    background-color: green;
    border-radius: 3px;
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
  }
}
</style>
