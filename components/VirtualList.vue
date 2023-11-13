<script setup lang="ts">
import { useVirtualList, useScroll } from '@vueuse/core'
import { use_should_fetch_store } from '@/stores/should_fetch'

const should_fetch = use_should_fetch_store();

const props = defineProps<{
    cat_pictures: {
        reddit_id: string;
        media: string;
        source: string;
        title: string;
    }[]
}>()

// snakecase ftw
const { list, containerProps: container_props, wrapperProps: wrapper_props } = useVirtualList(
    props.cat_pictures,
    {
        itemHeight: 500,
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
        <div v-bind="wrapper_props">
            <CatImg :reddit_id="data.reddit_id" :media="data.media" :source="data.source" :title="data.title"
                v-for="{ data } in list" />
        </div>
    </div>
</template>