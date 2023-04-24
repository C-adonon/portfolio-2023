<script setup>
import RadialGrandient from '../gradient/RadialGrandient.vue';
</script>

<template>
    <div class="top-title">
        <RadialGrandient top="10%" left="70%" />
        <h1>
            <slot></slot>
        </h1>
    </div>
</template>

<script>
export default {
    name: "TopTitle",
    components: {
        RadialGrandient
    }
}
</script>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

div.top-title {
    padding: 4% 8%;
    text-align: center;
    font-size: 100px;
    font-weight: v.$font-bold;
    color: v.$neutral-800;

    h1 {
        margin: 0;
        font-size: v.$font-title-XL;
    }
}
</style>