<script setup>
</script>

<template>
    <button class="filter" :id="filter.url" @click="filterProjects">
        <slot></slot>
    </button>
</template>

<script>

export default {
    name: "FilterTag",
    emits: ['currentFilter'],
    props: {
        filter: {
            type: Object,
            required: true
        }
    },
    methods: {
        filterProjects() {
            this.$emit('currentFilter', this.filter.url);
        }
    }
}

</script>