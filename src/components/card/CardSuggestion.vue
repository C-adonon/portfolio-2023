<script setup>
import { getAllProjects } from '../../services/services.js';
import ProjectCard from './ProjectCard.vue';
import PrimaryBtn from '../ui/PrimaryBtn.vue';
import Marquee from '../ui/Marquee.vue';
</script>

<template>
    <div class="projects-suggestions">
        <Marquee>Projets</Marquee>
        <ul v-if="projects" class="projects-list">
            <li v-for="project in projects">
                <ProjectCard :key="project.id" :project="project" />
            </li>
        </ul>
        <PrimaryBtn id="projects-btn" route="/projects">Voir tous les projets</PrimaryBtn>
    </div>
</template>

<script>
export default {
    name: "CardSuggestion",
    components: {
        ProjectCard,
        PrimaryBtn,
        Marquee,
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

.projects-suggestions {
    ul {
        width: 80%;
        list-style: none;
        padding: 0;
        margin: 0 auto;

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
}

// Desktop
@media (min-width: 901px) and (max-width: 1023px) {

    .projects-suggestions {
        ul {
            width: 90%;
            margin: 8% auto;
        }
    }

}

// Tablet & mobile
@media (max-width: 900px) {
    .projects-suggestions {
        ul {
            width: 95%;
            margin: 8% auto;
        }
    }
}
</style>