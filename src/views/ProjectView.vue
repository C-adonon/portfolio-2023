<script setup>
import { getProjectByName } from '../services/services.js';
import ProjectCard from '../components/card/ProjectCard.vue';
import TopTitle from '../components/ui/TopTitle.vue';
import CardSuggestion from '../components/card/CardSuggestion.vue';
import TertiaryBtn from '../components/ui/TertiaryBtn.vue';
</script>

<template>
    <main v-if="currentProject">
        <TopTitle>{{ currentProject.fields.name }}</TopTitle>
        <section class="project-content">
            <!-- description -->
            <div v-html="description" class="project-content-text">
            </div>
            <!-- pictures -->
            <div class="project-content-pictures">
                <img v-for="img in currentProject.fields.pictures" :src='assetUrl + img.filename'
                    alt="currentProject.fields.name">
            </div>
            <!-- link -->
            <div v-if="currentProject.fields.link" class="project-link">
                <!-- <a :href="currentProject.fields.link" target="_blank">Voir le projet</a> -->
                <TertiaryBtn v-if="currentProject.fields.link" :url="currentProject.fields.link">Voir le site </TertiaryBtn>
            </div>
            <!-- video -->
            <div v-if="currentProject.fields.video" class="project-video">
                <iframe v-for="video in currentProject.fields.video" :src='assetUrl + video.filename' frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>
            <!-- pdf -->
            <div v-if="currentProject.fields.pdf" class="project-pdf">
                <TertiaryBtn v-if="currentProject.fields.pdf" v-for="pdf in currentProject.fields.pdf" :pdf="pdf.filename">
                    Voir le pdf </TertiaryBtn>
                <!-- <a v-for="pdf in currentProject.fields.pdf" :href="assetUrl + pdf.filename" target="_blank">Voir le pdf</a> -->
            </div>
        </section>
        <CardSuggestion />
    </main>
    <main v-else>
        <TopTitle>Chargement en cours</TopTitle>
    </main>
</template>

<script>
export default {
    name: "ProjectListView",
    components: {
        ProjectCard,
        TopTitle,
        CardSuggestion,
        TertiaryBtn
    },
    data() {
        return {
            currentProject: null,
            description: '',
            assetUrl: import.meta.env.VITE_ASSET_URL
        }
    },
    created() {
        this.getProjectData();
    },
    updated() {
        this.getProjectData();
    }, methods: {
        async getProjectData() {
            if (this.$route.params.name) {
                let projectResponse = await getProjectByName(this.$route.params.name);
                if (projectResponse != false) {
                    this.currentProject = projectResponse;
                    this.description = this.currentProject.fields.description;
                } else {
                    console.log('no project');
                    this.$router.push({ name: "home" });
                }
            } else {
                console.log('no project name');
                this.$router.push({ name: "home" });
            }
        }
    }
}
</script>

<style scoped lang="scss">
@use '../assets/variables.scss' as v;

section.project-content {

    div.project-content-text {
        margin-bottom: 4%;
        padding: 0 10%;

        &:deep(p) {
            margin: 24px 0;
        }

    }

    div.project-content-pictures {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 1rem;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

    }

}
</style>