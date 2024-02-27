<script setup>
import { ref } from "vue";
const nameOfUser = ref("");
const userEmail = ref("");
const password = ref("");
const confirmPassword = ref("");
</script>

<template>
  <div>
    <h3>New User Signup</h3>
    <h5>
      "Truth is, habits take longer than 21 days to create. Embrace the journey
      with Beyond 21 Habit Tracker and transform your habits into lasting
      lifestyle changes. Redefine habits. Achieve success."
    </h5>
    <form id="signupContainer" @submit.prevent="initiateSignup">
      <input v-model="userName" type="text" placeholder="Create Username" />
      <br />
      <input v-model="userEmail" type="text" placeholder="Enter Email" />
      <br />
      <input v-model="password" type="text" placeholder="Create Password" />
      <br />
      <input
        v-model="confirmPassword"
        type="text"
        placeholder="Confirm Password"
      />
      <br />
      <button class="signinBtn" type="submit">Create Profile</button>
    </form>
  </div>
</template>

<style></style>
