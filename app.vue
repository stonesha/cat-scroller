<script setup lang="ts">
const { data } = await useFetch('/api/get-cat-pictures')
</script>

<template>
  <div class="flex flex-col space-y-5 max-w-xl mx-auto my-5 items-center">
    <img v-for="cat_picture in data" :key="cat_picture.id" :src="cat_picture.media" :alt="cat_picture.title"
      class="w-3/4 h-auto rounded-md" />
  </div>
</template>
