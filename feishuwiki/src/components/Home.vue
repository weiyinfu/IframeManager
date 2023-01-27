<script setup lang="ts">
import { ref, onMounted, reactive } from 'vue'
import * as api from "../api";
let data = reactive({
  books: []
})
onMounted(() => {
  api.getBookList().then(resp => {
    console.log(resp.data)
    data.books = resp.data;
  });
});
</script>
<template>
  <div>
    <div v-for="i in data.books" :key="i">
      <router-link :to="{ path: '/TreeView', query: { book: i } }">{{ i }}</router-link>
    </div>
  </div>
</template>