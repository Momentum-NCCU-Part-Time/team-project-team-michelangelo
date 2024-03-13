4459-
<script setup>
import { ref } from "vue";
import ListHabits from "../components/ListHabits.vue";
import NewHabit from "../components/NewHabit.vue/";
import HabitRecord from "../components/HabitRecord.vue";
const userInfo = ref([]);
//store token
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
</script>
<template>
  <div>
    <h1>Hello {{ userInfo.username }}</h1>
    <!-- habits container -->
    <ListHabits />
  </div>
</template>
