4459-
<script setup>
import { ref } from "vue";
import ListHabits from "../components/ListHabits.vue";
import NewHabit from "../components/NewHabit.vue/";
import HabitCounter from "../components/HabitCounter.vue";
const userInfo = ref([]);
/* const habits = ref([]); */
/* const token = ref(null); */
let token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
console.log(token);
//get user
fetch("http://localhost:3000/user", {
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
    userInfo.value = data;
  })
  .catch((error) => {
    console.error("Error fetching user data:", error);
  });
//get habits
/* fetch("http://localhost:3000/habits", {
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
//get habits
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
}; */
</script>
<template>
  <div>
    <h1>Hello {{ userInfo.username }}</h1>
    <ListHabits />
    <!-- <NewHabit @addedHabit="getHabits" />
    <h1 class="header">My Habits</h1>
    <div>
      <ul>
        <li v-for="habit in habits" :key="habit._id">
          {{ habit.habitName }}
          {{ habit.frequency }}
          {{ habit.comment }}
          <HabitCounter />
        </li>
      </ul>
    </div> -->
  </div>
</template>
