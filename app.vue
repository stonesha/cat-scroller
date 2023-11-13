<script setup lang="ts">
import { use_should_fetch_store } from '@/stores/should_fetch'

const should_fetch = use_should_fetch_store();

const { data } = await useFetch('/api/get-cat-pictures', {
  query: {
    page: should_fetch.page
  }
})

const cat_pictures = computed(() => data.value ? data.value : [])

watchEffect(async () => {
  if (should_fetch.page) {
    const data = await fetch(`/api/get-cat-pictures?page=${should_fetch.page}`).then(res => res.json());

    cat_pictures.value.push(...data);
  }
})
</script>

<template>
  <div v-if="cat_pictures === null">
    <p>Loading cat pictures ...</p>
  </div>
  <div v-else class="flex flex-col space-y-5 max-w-xl mx-auto my-5 items-center">
    <client-only placeholder="loading...">
      <VirtualList :cat_pictures="cat_pictures" />
    </client-only>
  </div>
</template>
