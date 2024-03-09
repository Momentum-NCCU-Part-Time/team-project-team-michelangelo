<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const userEmail = ref("");
const password = ref("");
const loggedIn = ref(false);
const initiateLogin = () => {
  fetch("http://localhost:3000/login/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: userEmail.value,
      password: password.value,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Login failed");
      }
      res.json();
    })
    .then((r) => {
      loggedIn.value = true;
      router.push("/habits");
      console.log(loggedIn.value);
    })
    .catch((error) => {
      console.log("Login failed:", error);
    });
};
</script>

<template>
  <div>
    <h3>Beyond21 Login</h3>
    <form id="loginContainer" @submit.prevent="initiateLogin">
      <input v-model="userEmail" type="text" placeholder="Email" />
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
