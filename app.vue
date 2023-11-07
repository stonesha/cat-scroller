<script setup lang="ts">
const { data } = await useFetch('/api/get-cat-pictures')
</script>

<template>
  <div class="grid grid-cols-3 gap-5">
    <img v-for="cat_picture in data" :key="cat_picture.id" :src="cat_picture.media" :alt="cat_picture.title"
      class="w-auto h-auto" />
  </div>
</template>
