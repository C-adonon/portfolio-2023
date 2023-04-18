<script setup>
import TopTitle from '../components/ui/TopTitle.vue';
import CardSuggestion from '../components/card/CardSuggestion.vue';
</script>

<template>
  <main class="about">
    <TopTitle>A propos de moi</TopTitle>
    <section class="about-content">
      <div class="about-content-text">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum provident soluta, ea nisi officia, laborum animi
          minima praesentium quo exercitationem consectetur odit. Autem aut fugiat dolore cumque doloribus eius explicabo?
        </p>
      </div>
      <div class="about-image">
        <img src="" alt="moi">
      </div>
    </section>
    <CardSuggestion/>
  </main>
</template>

<style scoped lang="scss">
@use '../assets/variables.scss' as v;

section.about-content {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .about-image {
    width: 40%;
    // height: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .about-content-text {
    width: 40%;

    h2 {
      font-size: 50px;
      font-weight: v.$font-bold;
      margin-bottom: 2%;
      color: v.$neutral-900;
    }

    p {
      font-size: v.$font-body;
      font-weight: v.$font-regular;
      text-align: justify;
      margin-bottom: 6%;
    }
  }
}</style>
