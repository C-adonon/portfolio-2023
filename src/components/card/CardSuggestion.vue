<script setup>
import { getAllProjects } from '../../services/services.js';
import ProjectCard from './ProjectCard.vue';
import PrimaryBtn from '../ui/PrimaryBtn.vue';
</script>

<template>
    <ul v-if="projects" class="projects-list">
        <li v-for="project in projects">
            <ProjectCard :key="project.id" :project="project" />
        </li>
    </ul>
    <PrimaryBtn id="projects-btn" route="/projects">Voir tous les projets</PrimaryBtn>
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
            projects: [],
            suggestionsMax: 2,
        }
    },
    async created() {
        let projectsResponse = await getAllProjects();
        this.getRandomProjects(projectsResponse);
    },
    methods: {
        getRandomProjects(resp) {
            let allProjects = resp;
            for (let i = 0; i < this.suggestionsMax; i++) {
                let index = Math.floor(Math.random() * allProjects.length);
                this.projects.push(allProjects[index]);
                allProjects.splice(index, 1);
            }
        }
    },

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

        &:last-child div {
            border: none;
            flex-direction: row-reverse;
        }
    }
}

#projects-btn {
    margin: 0 auto;
    display: block;
}
</style>