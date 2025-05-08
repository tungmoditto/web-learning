<script setup>
import WelcomeItem from './WelcomeItem.vue'
defineProps({
  name: {
    type: String,
    default: 'Tùng',
  },
})
</script>

<template>
  <div>
    <WelcomeItem :name="name"> </WelcomeItem>
  </div>
</template>
