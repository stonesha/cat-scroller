
<script setup lang="ts">
import { useWindowScroll } from '@vueuse/core';

const scroll_button = use_scroll_button_store()

const { y } = useWindowScroll({
    behavior: "smooth",
});

watchEffect(() => {
    if (y.value > 0) {
        scroll_button.show = true
    } else if (y.value === 0) {
        scroll_button.show = false
        scroll_button.scroll_to_top = false
    }
})
</script>

<template>
    <button @click="y = 0; scroll_button.scroll_to_top = true" v-if="scroll_button.show" type="button"
        class="fixed bottom-5 right-5 rounded-full bg-teal-600 p-2 text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
    </button>
</template>