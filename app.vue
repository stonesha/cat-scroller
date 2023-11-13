<script setup lang="ts">
const { data: cat_pictures } = await useFetch('/api/get-cat-pictures')

</script>

<template>
  <div v-if="cat_pictures === null">
    <p>Loading cat pictures ...</p>
  </div>
  <div v-else class="flex flex-col space-y-5 max-w-xl mx-auto my-5 items-center">
    <VirtualList :cat_pictures="cat_pictures" />
  </div>
</template>
