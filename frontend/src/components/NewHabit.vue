<script setup>
import { ref } from "vue";
const newHabitName = ref("");
const newHabitFreq = ref("");
const newHabitComment = ref("");

const addNewHabit = () => {
  fetch("http://localhost:3000/user/65e793666ede3e1d142f29bc/habits", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      habitTitle: newHabitName.value,
      frequency: newHabitFreq.value,
      completed: false,
      updatedAt: new Date(),
    }),
  })
    .then((res) => res.json())
    .then((r) => {});
};
</script>

<template>
  <div>
    <form @submit.prevent="addNewHabit" id="newHabitContainer">
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
