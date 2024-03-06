<script setup>
import { ref } from "vue";
const userName = ref("");
const userEmail = ref("");
const password = ref("");
/* const confirmPassword = ref(""); */

const addNewUser = () => {
  fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: userName.value,
      email: userEmail.value,
      password: password.value,
      scheduledHabitList: [],
      updatedAt: new Date(),
    }),
  })
    .then((res) => res.json())
    .then((r) => {});
};
</script>

<template>
  <div>
    <h3>New User Signup</h3>
    <h5>
      "Truth is, habits take longer than 21 days to create. Embrace the journey
      with Beyond 21 Habit Tracker and transform your habits into lasting
      lifestyle changes. Redefine habits. Achieve success."
    </h5>
    <form id="signupContainer" @submit.prevent="addNewUser">
      <input v-model="userName" type="text" placeholder="Create Username" />
      <br />
      <input v-model="userEmail" type="text" placeholder="Enter Email" />
      <br />
      <input v-model="password" type="text" placeholder="Create Password" />
      <br />
      <!-- <input
        v-model="confirmPassword"
        type="text"
        placeholder="Confirm Password"
      />
      <br /> -->
      <button class="signinBtn" type="submit">Create Profile</button>
    </form>
  </div>
</template>

<style></style>
