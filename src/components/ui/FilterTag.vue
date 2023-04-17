<script setup>
</script>

<template>
    <button class="filter-btn" :id="filter.url" @click="filterProjects">
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
            this.$emit('currentFilter', this.filter.fields.url);
        }
    }
}
</script>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

button.filter-btn {
    display: inline-block;
    padding: 4px 24px;
    border-radius: 30px;
    background-color: v.$secondary-050;
    font-size: v.$font-body;
    font-weight: v.$font-medium;
    color: v.$primary-700;
    text-align: center;
    border: 2px solid v.$primary-700;
    cursor: pointer;

    &:hover {
        background-color: v.$primary-700;
        color: v.$secondary-050;
        border: 2px solid v.$primary-700;
    }
}
</style>