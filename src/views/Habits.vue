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
  <br />
  <img src="/src/views/logo.png" padding="-20px" width="220px" />
  <br />
  <br />
  <div class="Hello user container">
    <div class="hello-user-container">
      <h3>Hello {{ userInfo.username }}!</h3>
      <!-- habits container -->
      <h4>Let's get after it! Ready. Set. Go!</h4>
    </div>
  </div>
  <div>
    <ListHabits />
  </div>
</template>
