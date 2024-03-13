<script setup>
import { ref } from "vue";

const count = ref(0);
</script>

<template>
  <div class="counter">
    <button type="button" @click="editHabit">Edit</button>
  </div>
</template>

<style scoped></style>
