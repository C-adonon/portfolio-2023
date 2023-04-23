<script setup>
import PrimaryBtn from '../components/ui/PrimaryBtn.vue';
</script>

<template>
    <main>
        <div class="not-found">
            <h1>Oops...</h1>
            <h2>Page introuvable</h2>
            <PrimaryBtn route="/">Retour à l'accueil</PrimaryBtn>
        </div>
    </main>
</template>

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
        font-family: v.$font-family-elastic;
        font-size: 200px;
        color: v.$primary-400;
    }

    h2 {
        font-family: v.$font-family-elastic;
        font-size: 75px;
        color: v.$primary-400;
    }
}
</style>
