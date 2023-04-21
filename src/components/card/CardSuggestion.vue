<script setup>
import { getAllProjects } from '../../services/services.js';
import ProjectCard from './ProjectCard.vue';
import PrimaryBtn from '../ui/PrimaryBtn.vue';
</script>

<template>
    <ul class="projects-list">
        <li v-for="project in projects">
            <ProjectCard :key="project.id" :project="project" />
        </li>
    </ul>
    <PrimaryBtn id="projects-btn" url="/projects">Voir tous les projets</PrimaryBtn>
</template>

<script>
export default {
    name: "CardSuggestion",
    components: {
        ProjectCard,
        PrimaryBtn
    },
    data() {
        return {
            projects: []
        }
    },
    async beforeCreate() {
        let projectsResponse = await getAllProjects();
        // random number between 0 and 2
        // let min = Math.floor(Math.random() * 3);

        // 2 variables to get 2 random projects that are not the same
        let min = Math.floor(Math.random() * 3);
        let max = Math.floor(Math.random() * 3);
        if (min === max) {
            max = Math.floor(Math.random() * 3);
        }
        this.projects = projectsResponse.slice(0, 2);
    }

}
</script>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
        margin: 0;
    }
}

#projects-btn {
    margin: 0 auto;
    display: block;
}
</style>