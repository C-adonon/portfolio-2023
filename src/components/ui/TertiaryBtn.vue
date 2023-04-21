<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="tertiary-btn">
        <RouterLink v-if="route" :to="route">
            <slot></slot>
        </RouterLink>
        <a v-else-if="pdf" :href='assetUrl + pdf' download>
            <slot></slot>
        </a>
        <a v-else :href="url" target="_blank">
            <slot></slot>
        </a>
    </div>
</template>

<script>
export default {
    name: "Loader",
    props: {
        url: {
            type: String,
            required: false
        },
        pdf: {
            type: String,
            required: false
        },
        route: {
            type: String,
            required: false
        }
    },
    data() {
        return {
            assetUrl: import.meta.env.VITE_ASSET_URL
        }
    },

}
</script>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

.tertiary-btn {
    font-size: v.$font-body;
    font-weight: v.$font-medium;
    margin: 0 2%;
    cursor: pointer;

    a {
        color: v.$primary-400;
        display: block;
        padding: 8px 24px;
    }

    &:hover {
        color: v.$primary-900;
    }

}
</style>