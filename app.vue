<script setup lang="ts">
import type { CatPictures } from '@/db/schema';

const should_fetch = use_should_fetch_store();
const cat_pictures = use_cat_pictures_store();

const fetch_cat_pictures = async () => await useFetch("/api/get-cat-pictures", {
  query: {
    page: should_fetch.page
  },
  transform(data: CatPictures[]) {
    return data
  },
  onResponse({ response }) {
    cat_pictures.push(response._data);
  }
});

await fetch_cat_pictures()

watchEffect(async () => {
  if (should_fetch.page && should_fetch.page !== 1) {
    await fetch_cat_pictures()
  }
})
</script>

<template>
  <div v-if="cat_pictures === null">
    <p>Loading cat pictures ...</p>
  </div>
  <div v-else class="flex flex-col space-y-5 max-w-xl mx-auto my-5 items-center">
    <client-only placeholder="loading...">
      <VirtualList />
    </client-only>
  </div>
  <ScrollToTop />
</template>
