<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <p class="link-text">Lien utile :</p>
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
            // assetUrl: "https://cadonon.esd-monsite.fr/api/portfolio-adonon/data/assets/"
            assetUrl: process.env.VITE_ASSET_URL
        }
    },

}
</script>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

.tertiary-btn {
    font-size: v.$font-body;
    font-weight: v.$font-medium;
    color: v.$neutral-900;
    // text-align: center;
    cursor: pointer;
    margin: 0 2%;

    a {
        display: block;
        padding: 8px 24px;
    }
}
</style>