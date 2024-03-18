<script setup>
import { ref } from "vue";
import NewHabit from "./NewHabit.vue";
import HabitRecord from "./HabitRecord.vue";
const habits = ref([]);
//get token
let token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
console.log(token);
//automatically get habits
fetch("http://localhost:3000/habits", {
  method: "GET",
  headers: {
    Authorization: `Bearer ${token}`,
  },
})
  .then((res) => {
    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }
    return res.json();
  })
  .then((data) => {
    habits.value = data;
  })
  .catch((error) => {
    console.error("Error fetching user data:", error);
  });
//get habit emit
const getHabits = () => {
  fetch("http://localhost:3000/habits", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch user data");
      }
      return res.json();
    })
    .then((data) => {
      habits.value = data;
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
};
</script>

<template>
  <div>
    <div>
      <NewHabit @habitAdded="getHabits" />
    </div>
    <br />
    <h4 class="habitsHeader">My Daily Habits</h4>

    <ul>
      <div class="habit-container">
        <li v-for="habit in habits" :key="habit._id">
          {{ habit.habitName }}
          <br />
          {{ habit.numVal }} {{ habit.unit }}
          <h7>Comments</h7>
          {{ habit.comment }}
          <HabitRecord :habitId="habit._id" />
        </li>
      </div>
    </ul>
  </div>
</template>

<style>
ul {
  list-style-type: none;
}
</style>
