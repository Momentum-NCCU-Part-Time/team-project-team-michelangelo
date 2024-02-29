<script setup>
import { ref } from "vue";
import ListOfHabits from "./components/ListOfHabits.vue";
import Home from "./views/Home.vue";
import Login from "./views/Login.vue";
import Signup from "./views/Signup.vue";
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-link to="/signup">Signup</router-link>
  </div>
  <p>
    <!-- <button @click="$router.go(-1)">Go back 1 step</button>
    <button @click="$router.go(1)">Go forward 1 step</button> -->

    <!--     <button @click="$router.push('/user/1')">Redirect to "/user/1"</button>
 -->
  </p>
  <router-view />
  <div id="app">
    <!-- <Login />
    <Signup /> -->
    <!-- <h1 class="header">My Habits</h1>
    <ListOfHabits /> -->
  </div>
</template>
<style scoped></style>
