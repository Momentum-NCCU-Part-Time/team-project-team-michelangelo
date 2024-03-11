<script setup>
import { ref } from "vue";
const nameOfUser = ref("");
const userEmail = ref("");
const password = ref("");
const confirmPassword = ref("");
</script>

<template>
  <div>
    <br />
    <img src="./logo.png" padding="-20px" width="220px" />
    <br />
    <br />

    <h5>
      "Truth is, habits take longer than 21 days to create. Embrace the journey
      with Beyond 21 Habit Tracker and transform your habits into lasting
      lifestyle changes. Redefine habits. Achieve success."
    </h5>

    <form id="signupContainer" @submit.prevent="initiateSignup">
      <label Username for="UserName"> Username </label>
      <input
        v-model="userName"
        type="text"
        placeholder="e.g., Luuuke"
        class="form-control"
      />
      <br />

      <label Email for="userEmail"> Email</label>
      <input
        v-model="userEmail"
        type="text"
        placeholder="e.g., michelangelo@example.com"
        class="form-control"
      />
      <br />

      <label Password for="password"> Password</label>
      <input
        v-model="password"
        type="text"
        placeholder="e.g., *******************"
        class="form-control"
      />
      <br />
      <label Confirm Password for="confirmPassword"> Confirm Password</label>
      <input
        v-model="confirmPassword"
        type="text"
        placeholder="Ensure that it's the identical password!"
        class="form-control"
      />
      <br />
      <p><sup> By signing up you are accepting Beyond21's<br/> Terms and Conditions and Privacy Policy</sup> </p>
      <button class="signinBtn" type="submit">Sign up</button>

      <div class="strike"></div>

      <h2>OR</h2>
      <sup>Already have a Beyond21 account?</sup>
      <br />
      <button class="loginBtn" type="submit">Login</button>
      <br />
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
