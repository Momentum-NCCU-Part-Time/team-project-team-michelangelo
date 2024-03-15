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
    <h2 class="habitsHeader">My Daily Habits</h2>
    <!-- throw in some dummy text for styleing purposes
    delete before deployment-->
    <p>Code for 30 minutes a day</p>
    <ul>
      <li v-for="habit in habits" :key="habit._id">
        {{ habit.habitName }}/
        {{ habit.numVal }}
        {{ habit.unit }}/ {{ habit.comment }}
        <HabitRecord :habitId="habit._id" />
      </li>
    </ul>
  </div>
</template>

<style>
ul {
  list-style-type: none;
}
</style>
