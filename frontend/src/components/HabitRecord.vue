<script setup>
import { ref } from "vue";
let token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
console.log(token);
const props = defineProps(["habitId"]);

const addRecord = () => {
  fetch(`http://localhost:3000/habits/${props.habitId}/done`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      note: "",
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to add record");
      }
      return res.json();
    })
    .then((data) => {
      console.log("Record added successfully:", data);
      // Perform any additional actions afterding the record
    })
    .catch((error) => {
      console.error("Error adding record:", error);
    });
};
</script>

<template>
  <div class="=addRecord">
    <button type="button" @click="addRecord">Done</button>
  </div>
</template>

<style scoped></style>
