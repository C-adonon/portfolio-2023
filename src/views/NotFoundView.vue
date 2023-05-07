<script setup>
import PrimaryBtn from '../components/ui/PrimaryBtn.vue';
import RadialGrandient from '../components/gradient/RadialGrandient.vue';
</script>

<template>
    <main>
        <div class="not-found">
            <RadialGrandient id="1" top="40%" left="1%" />
            <h1>Oops...</h1>
            <h2>Page introuvable</h2>
            <PrimaryBtn route="/">Retour à l'accueil</PrimaryBtn>
        </div>
    </main>
</template>

<script>
export default {
    name: "NotFoundView",
    components: {
        PrimaryBtn,
        RadialGrandient
    }
}
</script>

<style scoped lang="scss">
@use '../assets/variables.scss' as v;

div.not-found {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 60vh;
    text-align: center;
    background-image: url("./not-found-bg.gif");
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;

    h1 {
        font-family: v.$elastic;
        font-size: 200px;
        color: v.$primary-400;
    }

    h2 {
        font-family: v.$elastic;
        font-size: 75px;
        color: v.$primary-400;
    }
}
</style>
