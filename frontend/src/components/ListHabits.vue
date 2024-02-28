<script setup>
import { ref } from "vue";

const props = defineProps({ habits: Object });
</script>

<template>
  <div>
    <ul>
      <li v-for="habits in props.habits" :key="props.habits.id">
        {{ habits.habit }}
      </li>
    </ul>
  </div>
</template>

<style></style>
