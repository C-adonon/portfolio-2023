<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <button class="primary-btn">
        <a v-if="email" :href="'mailto:' + email">
            <slot></slot>
        </a>
        <RouterLink v-else-if="route" :to="route">
            <slot></slot>
        </RouterLink>
        <a v-else-if="url" :href="url" target="_blank">
            <slot></slot>
        </a>
        <a v-else-if="cv" href="./cv.pdf" download>
            <slot></slot>
        </a>
        <span v-else>
            <slot></slot>
        </span>
    </button>
</template>

<script>
export default {
    name: "PrimaryBtn",
    props: {
        url: {
            type: String,
            required: false
        },
        route: {
            type: String,
            required: false
        },
        cv: {
            type: Boolean,
            required: false
        },
        email: {
            type: String,
            required: false
        }

    }
}
</script>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

button.primary-btn {
    border-radius: 4px;
    background-color: v.$primary-050;
    font-size: v.$font-body;
    font-weight: v.$font-medium;
    color: v.$neutral-900;
    text-align: center;
    border: 2px solid v.$neutral-900;
    box-shadow: 4px 4px 0px #16151A;
    cursor: pointer;
    height: fit-content;
    width: fit-content;
    margin-bottom: 4px !important;
    transition: all 0.2s ease-in-out;

    a {
        display: block;
        padding: 16px 64px;
        color: v.$neutral-900;
        text-decoration: none;
        height: 100%;
        width: 100%;
    }

    &:hover {
        background-color: v.$primary-700;
        color: v.$secondary-050;
        border: 2px solid v.$primary-700;

        a {
            color: v.$secondary-050;
        }
    }

}

@media (max-width: 900px) {
    button.primary-btn {
        a {
            padding: 16px 56px;
        }
    }
}
</style>
