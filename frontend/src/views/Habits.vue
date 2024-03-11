4459-
<script setup>
import { ref } from "vue";
//import ListOfHabits from "../components/ListOfHabits.vue/";
const userInfo = ref([]);
/* const token = ref(null); */
let token = localStorage.getItem("token");
console.log(token);

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
    // Handle error fetching user data
  });
</script>
<template>
  <div>
    <h1>Hello {{ userInfo.username }}</h1>
    <h1 class="header">My Habits</h1>
  </div>
</template>
