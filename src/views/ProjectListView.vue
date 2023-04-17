<script setup>
import { getAllProjects, getAllCategories, getProjectsByCategories, getProjectByName } from '../services/services.js';
import ProjectCard from '../components/card/ProjectCard.vue';
import FilterTag from '../components/ui/FilterTag.vue';
</script>

<template>
    <main>
        <div class="filter-container">
            <ul>
                <li v-for="category in categories">
                    <FilterTag :key="category.id" :filter="category" @currentFilter="filterProjects">
                        {{ category.fields.name }}</FilterTag>
                </li>
            </ul>
        </div>
        <div class="project-container">
            <ul>
                <li v-for="project in projects">
                    <ProjectCard :key="project.id" :project="project" />
                </li>
            </ul>
        </div>
    </main>
</template>

<script>
export default {
    name: "ProjectListView",
    components: {
        ProjectCard,
        FilterTag
    },
    data() {
        return {
            projects: [],
            categories: []
        }
    },
    async created() {
        let projectsResponse = await getAllProjects();
        this.projects = projectsResponse.data.records;

        let categoriesResponse = await getAllCategories();
        this.categories = categoriesResponse.data.records;

        console.table(this.projects);
        console.log(this.categories);

    },
    methods: {
        filterProjects(filter) {
            console.log(filter);
            // getProjectsByCategories(this.filter.slug)
        }
    }
}
</script>

<style scoped lang="scss">
@use '../assets/variables.scss' as v;
</style>