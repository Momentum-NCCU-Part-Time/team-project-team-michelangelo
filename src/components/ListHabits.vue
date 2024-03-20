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
      console.log("fetched habits:", data);
      habits.value = data;
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
};
getHabits();
</script>

<template>
  <div>
    <div>
      <NewHabit @habitAdded="getHabits" />
    </div>
    <br />
    <h4 class="habitsHeader">My Daily Habits</h4>

    <div class="habit-container">
      <ul class="habits">
        <li v-for="habit in habits" :key="habit._id">
          {{ habit.habitName }}
          {{ habit.numVal }}
          {{ habit.unit }}
          {{ habit.comment }}
          <br />
          <HabitRecord :habitId="habit._id" />
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
ul {
  list-style-type: none;
}
</style>
