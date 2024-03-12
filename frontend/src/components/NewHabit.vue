<script setup>
import { ref } from "vue";
const newHabitName = ref("");
const newHabitFreq = ref("");
const newHabitComment = ref("");
const addingHabit = ref(false);
let token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
console.log(token);
const emit = defineEmits(["habitAdded"]);

const addNewHabit = () => {
  fetch("http://localhost:3000/habits", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      habitName: newHabitName.value,
      frequency: newHabitFreq.value,
      comment: newHabitComment.value,
      completed: false,
      updatedAt: new Date(),
    }),
  })
    .then((res) => res.json())
    .then((addedHabit) => {
      emit("habitAdded", addedHabit);
      resetHabit();
    });
};
//show habit form
const addHabit = (e) => {
  addingHabit.value = e;
};
//refresh textboxes
const resetHabit = () => {
  newHabitName.value = "";
  newHabitFreq.value = "";
  newHabitComment.value = "";
};
</script>

<template>
  <div>
    <form
      v-if="addingHabit"
      @submit.prevent="addNewHabit"
      id="newHabitContainer"
    >
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
      <button class="newHabitBtn" type="submit">Add New Habit</button>
    </form>
    <button v-if="addingHabit" @click="addHabit(false)" class="newHabitBtn">
      Nevermind
    </button>
    <button v-else @click="addHabit(true)" class="newHabitBtn">
      Add Habit
    </button>
  </div>
</template>

<style></style>
