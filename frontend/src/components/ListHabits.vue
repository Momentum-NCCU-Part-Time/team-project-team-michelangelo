<script setup>
import { ref } from "vue";
import NewHabit from "./NewHabit.vue";
const habits = ref([]);

let token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
console.log(token);

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
    <h1 class="header">My Habits</h1>
    <ul>
      <li v-for="habit in habits" :key="habit._id">
        {{ habit.habitName }}
        {{ habit.frequency }}
        {{ habit.comment }}
      </li>
    </ul>
  </div>
</template>

<style></style>
