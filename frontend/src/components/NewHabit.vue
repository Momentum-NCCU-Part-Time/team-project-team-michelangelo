<script setup>
import { ref } from "vue";
const newHabitName = ref("");
const newHabitFreq = ref("");
const newHabitComment = ref("");
</script>

<template>
  <div>
    <form id="newHabitContainer">
      <input
        v-model="newHabitName"
        class="newForm"
        type="text"
        placeholder="New Habit"
      />
      <input
        v-model="newHabitFreq"
        class="newForm"
        type="text"
        placeholder="Frequency"
      />
      <input
        v-model="newHabitComment"
        class="newForm"
        type="textbox"
        placeholder="Additional Comments"
      />
      <button class="newHabitBtn" type="submit">New Habit</button>
    </form>
  </div>
</template>

<style></style>
