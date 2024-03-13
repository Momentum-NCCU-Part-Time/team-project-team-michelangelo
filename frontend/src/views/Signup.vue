<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
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
    .then((res) => {
      if (!res.ok) {
        throw new Error("Login failed");
      }
      return res.json();
    })
    .then((data) => {
      router.push("/login");
    })
    .catch((error) => {
      console.log("Login failed:", error);
    });
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
      <input v-model="password" type="password" placeholder="Create Password" />
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
