<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <h1>Welcome to Beyond 21, please sign up or login</h1>
  <button @click="router.push('/login')" class="signUpBtn" type="submit">
    User Login
  </button>
  <button @click="router.push('/signup')" class="signUpBtn" type="submit">
    New User Signup
  </button>
</template>
<style></style>
