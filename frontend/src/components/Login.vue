<script setup>
import { ref } from "vue";
const userEmail = ref("");
const password = ref("");
</script>

<template>
  <div>
    <h3>Beyond21 Login</h3>
    <form id="loginContainer" @submit.prevent="initiateLogin">
      <input v-model="userName" type="text" placeholder="Email" />
      <br />
      <input v-model="password" type="text" placeholder="Password" />
      <br />
      <button class="loginBtn" type="submit">Login</button>
      <br />
      <button class="signUpBtn" type="submit">New User Signup</button>
    </form>
  </div>
</template>

<style></style>
