<!-- eslint-disable semi -->
<script setup lang="ts">
import Api from 'src/api/Api';
import QtimPost from 'src/components/QtimPost.vue';
import QtimSpinner from 'src/components/QtimSpinner.vue';
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { IPost } from '../api/apiModels';

const post = ref<IPost | null>(null)
const route = useRoute()

const loadSinglePostAsync = async () => {
  const id = String(route.params.id)
  const result = await Api.getSinglePostAsync(id)
  post.value = result
}

onMounted(() => { loadSinglePostAsync() })

</script>

<template>
    <div class="qtim-post-details">
        <div v-if="post !== null" class="qtim-post-details__container">
            <QtimPost
                is-view-mode
                :post="post"/>
        </div>
        <div
            v-else
            class="qtim-post-details__spinner">
                <QtimSpinner/>
        </div>
    </div>
</template>

<style lang="scss">
.qtim-post-details {
    &__spinner {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }
    &__container {
        max-width: 50%;
        padding-top: 4rem;
        margin: 0 auto;
    }
}
</style>
