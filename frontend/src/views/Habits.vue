<script setup>
import { ref } from "vue";
import ListOfHabits from "../components/ListOfHabits.vue/";
const userInfo = ref([]);

fetch("http://localhost:3000/user", {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    "Authorization":
  },
})
  .then((res) => res.json())
  .then((data) => (userInfo.value = data));
</script>
<template>
  <div>
    <h1>Hello {{ username }}</h1>
    <h1 class="header">My Habits</h1>
  </div>
</template>
