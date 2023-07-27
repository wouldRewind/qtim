<!-- eslint-disable semi -->
<script setup lang="ts">
import { IPost } from 'src/api/apiModels'
import QtimPagination from 'src/components/QtimPagination.vue'
import { computed, onMounted, ref } from 'vue'
import Api from '../api/Api'
import QtimPost from '../components/QtimPost.vue'
import QtimSpinner from '../components/QtimSpinner.vue'

const itemsPerPage = 9 as const;

const posts = ref<Array<IPost>>([])
const page = ref(1);

const currentSlice = computed(() => {
  const startIndex = (page.value * itemsPerPage) - 1;
  const endIndex = startIndex + itemsPerPage;
  const slice = posts.value.slice(startIndex, endIndex)
  return slice;
});

const loadPostsAsync = async () => {
  const result = await Api.getPostsAsync()
  posts.value = result;
}

onMounted(() => { loadPostsAsync() })
</script>

<template>
    <div class="qtim-feed">
        <div
            v-if="posts.length === 0"
            class="qtim-feed__spinner">
                <QtimSpinner/>
        </div>
        <div
            v-else
            class="qtim-feed__container">
            <QtimPost
                v-for="post in currentSlice"
                :key="post.id"
                :post="post"/>
        </div>
        <QtimPagination
            @update:model-value="val => page = val"
            class="qtim-feed__pagination"
            :current="page"
            :max="Math.floor(posts.length / itemsPerPage)"/>
    </div>
</template>

<style lang="scss">
.qtim-feed__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    padding: 4rem;
}
.qtim-feed__spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}
.qtim-feed__pagination {
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;
}
</style>
