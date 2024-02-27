<script setup>
import { ref } from "vue";
import ListOfHabits from "./components/ListOfHabits.vue";
import Login from "./components/Login.vue";
</script>

<template>
  <div id="app">
    <Login />
    <h1 class="header">My Habits</h1>
    <ListOfHabits />
  </div>
</template>
<style scoped></style>
