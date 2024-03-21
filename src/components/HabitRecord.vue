<script setup>
import { ref } from "vue";
import ExpandRecordBtns from "./ExpandRecordBtns.vue";
import Delete from "./Delete.vue";

const emit = defineEmits(["delete"]);
const note = ref("");
const expandingRecord = ref(false);
//login token
let token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
console.log(token);
const props = defineProps(["habitId"]);
//complete record
const addRecord = () => {
  fetch(`http://localhost:3000/habits/${props.habitId}/done`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      note: note.value,
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
      resetNote();
    })
    .catch((error) => {
      console.error("Error adding record:", error);
    });
};

const resetNote = () => {
  note.value = "";
};

const expandRecord = (e) => {
  expandingRecord.value = e;
};

const handleDelete = () => {
  console.log("Delete event received in HabitRecord component");
  emit("delete");
};
</script>

<template>
  <div class="addRecord">
    <button class="recordButton" @click="addRecord">Done</button>
    <div class="buttonContainer">
      <form
        v-if="expandingRecord"
        class="recordForm"
        @submit.prevent="addFailedRecord"
      >
        <input
          v-model="note"
          class="noteForm"
          type="text"
          placeholder="Add note about progress"
        />
        <ExpandRecordBtns
          :habitId="habitId"
          :note="note"
          @missedHabit="resetNote"
        />
        <Delete :habitId="habitId" @delete="handleDelete" />
      </form>
      <button
        v-if="expandingRecord"
        @click="expandRecord(false)"
        class="recordButton"
      >
        Nevermind
      </button>
      <button v-else @click="expandRecord(true)" class="recordButton">
        More
      </button>
    </div>
  </div>
</template>

<style scoped></style>
