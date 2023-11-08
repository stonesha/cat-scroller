<script setup lang="ts">
defineProps<{
    reddit_id: string;
    media: string;
    source: string;
    title: string;
}>()
</script>

<template>
    <img :src="media" :alt="title" class="w-3/4 h-auto rounded-md" />
</template>