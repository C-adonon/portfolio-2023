<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <button class="primary-btn">
        <a v-if="email" href='mailto:chloe.adonon@gmail.com'>
            <slot></slot>
        </a>
        <RouterLink v-else-if="url" :to="url">
            <slot></slot>
        </RouterLink>
        <a v-else-if="cv" href="/cv.pdf" download>
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
        cv: {
            type: Boolean,
            required: false
        },
        email: {
            type: Boolean,
            required: false
        }

    }
}
</script>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

button.primary-btn {
    display: inline-block;
    padding: 16px 80px;
    border-radius: 4px;
    background-color: v.$primary-050;
    font-size: v.$font-body;
    font-weight: v.$font-medium;
    color: v.$neutral-900;
    text-align: center;
    border: 2px solid v.$neutral-900;
    box-shadow: 4px 4px 0px #16151A;
    cursor: pointer;

    a {
        color: v.$neutral-900;
        text-decoration: none;
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
</style>
