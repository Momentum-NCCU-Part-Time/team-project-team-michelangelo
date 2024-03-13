<script setup>
import { ref } from "vue";
const newHabitName = ref("");
const newHabitNum = ref("");
const newHabitUnit = ref("");
const newHabitComment = ref("");
const addingHabit = ref(false);
//get token
let token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
console.log(token);
const emit = defineEmits(["habitAdded"]);
//add habit function
const addNewHabit = () => {
  fetch("http://localhost:3000/habits", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      habitName: newHabitName.value,
      numVal: newHabitNum.value,
      unit: newHabitUnit.value,
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
  newHabitNum.value = "";
  newHabitUnit.value = "";
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
        v-model="newHabitNum"
        class="newForm"
        type="number"
        placeholder="Amount of"
      />
      <select v-model="newHabitUnit">
        <option disabled value="">Select a unit</option>
        <option>Times</option>
        <option>Min</option>
      </select>
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
