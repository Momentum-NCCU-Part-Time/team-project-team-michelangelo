<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="counter">
    <button type="button" @click="count++">Streak: {{ count }}</button>
  </div>
</template>

<style scoped></style>
