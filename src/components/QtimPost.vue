<!-- eslint-disable semi -->
<script setup lang="ts">
import { computed } from 'vue';
import { IPost } from '../api/apiModels.ts';

interface IProps {
    post: IPost
    isViewMode?: boolean
}

const getFormattedPostDate = (ISODateString: string) => ISODateString.substring(0, 10);

const props = defineProps<IProps>()
const getPostRoute = (id: string) => '/' + id
const postButtonText = computed(() => props.isViewMode ? 'Вернуться' : 'Просмотреть');
const getPostButtonTo = (id: string) => props.isViewMode ? '/' : getPostRoute(id);

</script>

<template>
    <div class="qtim-post">
        <div class="qtim-post__image">
            <img :src="props.post.image">
        </div>
        <h4 class="qtim-post__title">{{ props.post.title }}</h4>
        <i class="qtim-post__preview">{{props.post.preview}}</i>
        <p class="qtim-post__created-at">
            <q-icon size="1rem" name="event"/>
            {{getFormattedPostDate(props.post.createdAt)}}
        </p>
        <p class="qtim-post__description">{{ props.post.description }}</p>
            <q-btn
            class="qtim-post__btn"
            no-caps
            color="primary"
            :to="getPostButtonTo(props.post.id)">
            {{ postButtonText }}
        </q-btn>
    </div>
</template>

<style lang="scss">
.qtim-post {
    font-family:Verdana, Geneva, Tahoma, sans-serif;
    box-shadow: 2px 4px 8px 0px rgba(34, 60, 80, 0.3);
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem;
    &__image {
        display: block;
        & > img {
            width: 100%;
            height: 300px;
            object-fit: cover;
        }
    }
    &__title {
        margin: 4px 0;
        font-size: 1.4rem;
    }
    &__preview {
        display: inline-block;
        margin: 0 0 8px 0;
        font-size: 1rem;
    }
    &__created-at {
        display: flex;
        align-items: center;
        & > .q-icon {
            margin-right: .5rem;
        }
    }
    &__btn {
        font-family:Verdana, Geneva, Tahoma, sans-serif;
        margin-top: auto;
        width: 150px;
    }
}
</style>
