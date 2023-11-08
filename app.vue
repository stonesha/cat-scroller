<script setup lang="ts">
const { data: cat_pictures } = await useFetch('/api/get-cat-pictures')
</script>

<template>
  <div class="flex flex-col space-y-5 max-w-xl mx-auto my-5 items-center">
    <CatImg v-for="cat_picture in cat_pictures" :key="cat_picture.reddit_id" :reddit_id="cat_picture.reddit_id"
      :title="cat_picture.title" :media="cat_picture.media" :source="cat_picture.source" />
  </div>
</template>
