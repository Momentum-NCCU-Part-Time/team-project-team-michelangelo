<script setup>
import { ref } from "vue";

const props = defineProps({ user: Object });
</script>

<template>
  <div>
    <ul>
      <li v-for="habits in props.user.scheduledHabitList" :key="id">
        {{ habits.habitTitle }}
      </li>
    </ul>
  </div>
</template>

<style></style>
