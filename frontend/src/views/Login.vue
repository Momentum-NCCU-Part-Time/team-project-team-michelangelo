<script setup>
import { ref } from "vue";
const userEmail = ref("");
const password = ref("");
</script>

<template>
  <div>
    <br />
    <img src="./logo.png" padding="-20px" width="220px" />
    <br />
    <br />

    <form id="loginContainer" @submit.prevent="initiateLogin">
      <label Email for="userName"> Email (case-sensitive) </label>
      <input
        v-model="userName"
        type="text"
        placeholder="Email (case-sensitive)"
        class="form-control"
      />
      <br />
      <label Email for="password"> Password </label>
      <a class="float-right forgot-password"> Forgot Password? </a>
      <input
        v-model="passwordInput"
        type="text"
        placeholder="Password"
        class="form-control"
      />
      <br />

      <br />
      <button class="loginBtn" type="submit">Login</button>
      <br />

      <div class="strike"></div>
      <h2>OR</h2>
      <sup>Don't have a Beyond 21 account?</sup>
      <br />
      <button class="signUpBtn" type="submit">New User Sign up</button>
    </form>
  </div>

  <div class="made">
    <p>
      Built during Momentum Team NCCU 1 Cohort in &#128002 Durham, N.C. <br />by 
      <a href="https://LinkedIn.com/in/joannaem">Joanna Matanga </a>,
      <a href="https://linkedin.com/in/austin-cathey"> Austin Cathey </a>, 
      <a href="https://linkedin.com/in/megancgeo"> Megan Cain </a> & 
      <a href="https://www.linkedin.com/in/sanadevkota"> Upasana Devkota</a>
    </p>
  </div>
</template>

<style></style>
