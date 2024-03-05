<script setup>
import { ref } from "vue";
const userName = ref("");
const password = ref("");

const addNewList = () => {
  fetch("http://localhost:3000/user/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      title: newList.value,
      items: [],
      updatedAt: new Date(),
    }),
  })
    .then((res) => res.json())
    .then((newList) => {
      emit("listAdded", newList);
      resetList();
    });
};
</script>

<template>
  <div>
    <h3>Beyond21 Login</h3>
    <form id="loginContainer" @submit.prevent="initiateLogin">
      <input v-model="userName" type="text" placeholder="Username" />
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
