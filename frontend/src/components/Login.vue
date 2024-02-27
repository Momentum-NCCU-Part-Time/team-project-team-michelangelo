<script setup>
import { ref } from "vue";
const userName = ref("");
const password = ref("");
</script>

<template>
  <div>
    <form id="loginContainer" @submit.prevent="initiateLogin">
      <input v-model="userName" type="text" placeholder="User Name" />
      <input v-model="password" type="text" placeholder="Password" />
      <button class="loginBtn" type="submit">Login</button>
    </form>
  </div>
</template>

<style></style>
