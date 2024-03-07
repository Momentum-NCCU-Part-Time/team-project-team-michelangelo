<script setup>
import { ref } from "vue";
import ListHabits from "./ListHabits.vue/";
import NewHabit from "./NewHabit.vue/";
const everything = ref([]);
const newHabit = ref("");

fetch("http://localhost:3000/everything", {
  method: "GET",
  headers: { "Content-Type": "application/json" },
})
  .then((res) => res.json())
  .then((data) => (everything.value = data));
</script>

<template>
  <div id="allHabits">
    <NewHabit class="newHabit" />
    <div class="habitContainer">
      <div class="frequency" v-for="user in everything" :key="everything.id">
        <h3>{{ user.userName }}</h3>
        <ListHabits :user="user" />
        <!-- <Delete :list="list" @listDeleted="getLists" />
        <NewItem :list="list" @itemAdded="getLists" /> -->
      </div>
    </div>
  </div>
</template>
<style></style>
