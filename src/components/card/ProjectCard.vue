<script setup>
import CardTag from './CardTag.vue';
</script>

<template>
    <div class="project-card">
        <div class="project-card-image">
            <img :src="ADDIMG" alt="project-image">
        </div>
        <div class="project-card-info">
            <div class="project-card-info-tags">
                <Tag>Tag</Tag>
            </div>
            <h3>Project Name</h3>
            <!-- <p>{{ project.description }}</p> -->
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam ducimus maiores !</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProjectCard",
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    components: {
        CardTag,
    },
}

</script>
