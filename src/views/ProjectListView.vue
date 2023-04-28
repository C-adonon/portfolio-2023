<script setup>
import { getAllProjects, getAllCategories, getProjectsByCategories } from '../services/services.js';
import ProjectCard from '../components/card/ProjectCard.vue';
import FilterTag from '../components/ui/FilterTag.vue';
import TopTitle from '../components/ui/TopTitle.vue';
import RadialGrandient from '../components/gradient/RadialGrandient.vue';
</script>

<template>
    <main>
        <TopTitle>Mes Projets</TopTitle>
        <div class="filter-container">
            <ul>
                <li v-for="category in categories">
                    <FilterTag :key="category.id" :class="{ active: category.id === activeItem }" :filter="category"
                        @currentFilter="filterProjects" @catId="setActiveItem">
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
        <RadialGrandient id="2" top="100%" left="-16%" />
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
            current: 'all',
            activeItem: null
        }
    },
    async created() {
        let projectsResponse = await getAllProjects();
        this.projects = projectsResponse;

        let categoriesResponse = await getAllCategories();
        this.categories = categoriesResponse;

        // finds 'all' in the array and moves it to the first position
        let all = this.categories.find(category => category.fields.url === 'all');
        this.activeItem = all.id;
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
        setActiveItem(catId) {
            this.activeItem = catId;
        },

    }
}
</script>

<style scoped lang="scss">
@use '../assets/variables.scss' as v;

ul {
    width: 80%;
    list-style: none;
    padding: 0;
    margin: 0 auto;

    li {
        &:last-child div {
            border: none;
        }

        &:nth-child(2n) div {
            flex-direction: row-reverse;
        }
    }
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