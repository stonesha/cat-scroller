<script setup lang="ts">
import { useVirtualList, useScroll } from '@vueuse/core'
import { use_should_fetch_store } from '@/stores/should_fetch'
import { use_cat_pictures_store } from '@/stores/cat_pictures';

const should_fetch = use_should_fetch_store();
const cat_pictures = use_cat_pictures_store();

// snakecase ftw
const { list, containerProps: container_props, wrapperProps: wrapper_props } = useVirtualList(
    cat_pictures.value,
    {
        itemHeight: (index) => cat_pictures.get_height(index),
        overscan: 5
    },
)

const { arrivedState: arrived_state } = useScroll(document, {
    throttle: 100,
    behavior: 'smooth'
})


watchEffect(() => {
    if (arrived_state.bottom) {
        should_fetch.page++;
    }
})
</script>

<template>
    <div v-bind="container_props" class="h-full p-2">
        <div v-bind="wrapper_props" class="flex flex-col items-center">
            <CatImg :reddit_id="data.reddit_id" :media="data.media" :source="data.source" :title="data.title"
                v-for="{ data } in list" />
        </div>
    </div>
</template>