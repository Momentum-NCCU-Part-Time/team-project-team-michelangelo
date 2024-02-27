<script setup>
import { ref } from "vue";
import ListOfHabits from "./components/ListOfHabits.vue";
import Login from "./components/Login.vue";
import Signup from "./components/Signup.vue";
</script>

<template>
  <div id="app">
    <Login />
    <Signup />
    <h1 class="header">My Habits</h1>
    <ListOfHabits />
  </div>
</template>
<style scoped></style>
