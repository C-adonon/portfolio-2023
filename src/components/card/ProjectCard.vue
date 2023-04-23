<script setup>
import CardTag from './CardTag.vue';
</script>

<template>
    <div class="project-card" @click="goToProject">
        <div class="project-card-image">
            <img :src='assetUrl + project.fields.name_slug + "-thumbnail.jpg"'
                :alt='project.fields.name_slug + "-thumbnail"'>
        </div>
        <div class="project-card-info">
            <div class="project-card-info-tags">
                <CardTag v-for="tag in projectTags" :key="tag" :tag="tag">{{
                    tag }}
                </CardTag>
            </div>
            <h4>{{ project.fields.name }}</h4>
            <p>{{ project.fields.card_description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectCard",
    components: {
        CardTag,
    },
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            projectTags: this.project.fields.categories_name.filter(tag => tag !== 'Tout voir'),
            assetUrl: import.meta.env.VITE_ASSET_URL
        }
    },
    methods: {
        goToProject() {
            this.$router.replace({ name: "project", params: { name: this.project.fields.name_slug } });
        }
    }
}
</script>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

div.project-card {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 56px 48px;
    border-bottom: 2px solid v.$primary-700;
    cursor: pointer;
    margin: 2% 0;

    div.project-card-image {
        width: 40%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    div.project-card-info {
        width: 40%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        h4 {
            font-size: v.$font-header2;
            font-weight: v.$font-bold;
            color: v.$primary-700;
            margin: 4px 0 16px 0;
        }

        p {
            font-size: v.$font-body;
            font-weight: v.$font-medium;
            margin: 0;
        }
    }
}
</style>
