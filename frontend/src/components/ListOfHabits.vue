<script setup>
import { ref } from "vue";
import ListHabits from "./ListHabits.vue/";
import NewHabit from "./NewHabit.vue/";
const habits = ref([
  {
    id: 1,
    frequency: "Daily",
    habits: [
      {
        id: 1,
        habit: "workout",
        finished: false,
      },
    ],
  },
  {
    id: 2,
    frequency: "Weekly",
    habits: [
      {
        id: 1,
        habit: "workout",
        finished: false,
      },
    ],
  },
]);
const newHabit = ref("");

/* fetch("http://localhost:3000/habits", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((res) => res.json())
  .then((data) => (habits.value = data)); */
</script>

<template>
  <div id="allHabits">
    <NewHabit class="newHabit" />
    <div class="habitContainer">
      <div class="frequency" v-for="habit in habits" :key="habit.id">
        <h3>{{ habit.frequency }}</h3>
        <ListHabits :habits="habit" />
        <!-- <Delete :list="list" @listDeleted="getLists" />
        <NewItem :list="list" @itemAdded="getLists" /> -->
      </div>
    </div>
  </div>
</template>
<style></style>
