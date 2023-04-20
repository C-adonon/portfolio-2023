<script setup>
import { getAllProjects, getAllCategories, getProjectsByCategories } from '../services/services.js';
import ProjectCard from '../components/card/ProjectCard.vue';
import FilterTag from '../components/ui/FilterTag.vue';
import TopTitle from '../components/ui/TopTitle.vue';
</script>

<template>
    <main>
        <TopTitle>Projects</TopTitle>
        <div class="filter-container">
            <ul>
                <li v-for="category in categories">
                    <FilterTag :key="category.id" :filter="category" :isActive="current === category"
                        @currentFilter="filterProjects">
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
            categories: [],
            current: 'all'
        }
    },
    async beforeCreate() {
        let projectsResponse = await getAllProjects();
        this.projects = projectsResponse;

        let categoriesResponse = await getAllCategories();
        this.categories = categoriesResponse;

        // finds 'all' in the array and moves it to the first position
        let all = this.categories.find(category => category.fields.url === 'all');
        let index = this.categories.indexOf(all);
        this.categories.splice(index, 1);
        this.categories.unshift(all);

    },
    methods: {
        async filterProjects(filter) {
            if (filter === 'all') {
                let resp = await getAllProjects();
                this.projects = resp;
            } else {
                console.log(filter);
                this.current = filter;
                let resp = await getProjectsByCategories(filter);
                this.projects = resp;
            }
        },

    }
}
</script>

<style scoped lang="scss">
@use '../assets/variables.scss' as v;

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

div.filter-container ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 16px;
}
</style>