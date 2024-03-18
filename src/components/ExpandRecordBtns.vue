<script setup>
import { ref } from "vue";
const note = ref("");
const expandingRecord = ref(false);
let token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
console.log(token);
const props = defineProps(["habitId"]);

const addCompleteRecord = () => {
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
      // Perform any additional actions afterding the record
    })
    .catch((error) => {
      console.error("Error adding record:", error);
    });
};

const expandRecord = (e) => {
  expandingRecord.value = e;
};

const resetNote = () => {
  note.value = "";
};
</script>

<template>
  <div>
    <form
      v-if="expandingRecord"
      class="recordForm"
      @submit.prevent="addFailedRecord"
    >
      <input
        v-model="note"
        class="noteForm"
        type="text"
        placeholder="Add Note"
      />
      <br />
      <button class="recordBtn" type="submit">Missed</button>
    </form>
    <button
      v-if="expandingRecord"
      @click="expandRecord(false)"
      class="recordBtn"
    >
      Nevermind
    </button>
    <button v-else @click="expandRecord(true)" class="recordBtn">More</button>
  </div>
</template>
