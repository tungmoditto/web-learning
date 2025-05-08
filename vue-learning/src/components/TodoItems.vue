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
  </div>
</template>

<script setup>
const emit = defineEmits(['delete'])
const props = defineProps({
  item: Object,
})
const handleDelete = () => {
  emit('delete')
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
  }
  .hidden {
    opacity: 0;
  }
  .item-content {
    display: flex;
    flex-direction: column;
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
    color: white;
    border: none;
    padding: 8px 12px;
    cursor: pointer;
  }
}
</style>
