<script setup>
import TheWelcome from '../components/TheWelcome.vue'
import { ref } from 'vue'
const name = ref('kjkjk')
</script>

<template>
  <main>
    <TheWelcome :name="name" />
  </main>
</template>
