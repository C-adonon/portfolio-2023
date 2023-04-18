<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import NewsTicker from '../components/ui/NewsTicker.vue';
import ProjectCard from '../components/card/ProjectCard.vue';
import ContactSection from '../components/contact/ContactSection.vue';
import PrimaryBtn from '../components/ui/PrimaryBtn.vue';
import CardSuggestion from '../components/card/CardSuggestion.vue';
import { getAllProjects, getAllCategories, getProjectByName, getProjectsByCategories } from '../services/services.js';
</script>


<template>
  <main>
    <!-- Hero/Intro -->
    <section class="intro">
      <div class="intro-info">
        <h1>Chloe Adonon</h1>
        <h2>Creative web Developper</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, animi molestias quos, tempore adipisci aliquid
          hic quidem magni laboriosam quasi a, quae facere accusamus reprehenderit. Maxime nostrum voluptas provident
          soluta!</p>
        <!-- TO DO ADD BTN -->
        <PrimaryBtn :cv="true">Télécharger mon CV</PrimaryBtn>
      </div>
      <div class="intro-picture">
        <img src="" alt="chloe-adonon">
      </div>
    </section>

    <!-- About -->
    <section class="about">
      <div class="about-picture">
        <img src="" alt="chloe-adonon">
      </div>
      <div class="about-info">
        <h2>Ceci est un titre</h2>
        <h3>Ceci est un sous-titre</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, animi molestias quos, tempore adipisci aliquid
          hic quidem magni laboriosam quasi a, quae facere accusamus reprehenderit. Maxime nostrum voluptas provident
          soluta!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, animi molestias quos, tempore adipisci
          aliquid hic quidem magni laboriosam quasi a, quae facere accusamus reprehenderit. Maxime nostrum voluptas
          provident
          soluta!</p>
        <PrimaryBtn url="/about">A propos de moi</PrimaryBtn>
      </div>
    </section>


    <!-- Projects -->
    <section class="projects">
      <CardSuggestion />
    </section>


    <!-- Contact -->
    <section class="contact">
      <ContactSection />
    </section>
  </main>
  <RouterView />
</template>

<script>

export default {
  name: "HomeView",
  components: {
    // NewsTicker,
    PrimaryBtn,
    ProjectCard,
    ContactSection
  }
}

</script>

<style scoped lang="scss">
@use '../assets/variables.scss' as v;

section {
  margin: 5% 0;
}

section.intro {
  display: flex;
  gap: -50%;
  align-items: center;

  div.intro-info,
  div.intro-picture {
    width: 50%;
  }

  div.intro-info {
    h1 {
      font-size: v.$font-title;
      font-weight: v.$font-bold;
      color: v.$neutral-900;
    }

    h2 {
      font-size: 70px;
      font-weight: v.$font-bold;
      color: v.$primary-700;
    }

    p {
      font-size: v.$font-body;
      font-weight: v.$font-regular;
      margin-bottom: 4%;
    }
  }

  div.intro-picture {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

section.about {
  display: flex;
  align-items: center;

  div.about-picture,
  div.about-info {
    width: 50%;
  }

  div.about-picture {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  div.about-info {
    h2 {
      font-size: v.$font-header2;
      font-weight: v.$font-bold;
      color: v.$neutral-900;
    }

    h3 {
      font-size: v.$font-header3;
      font-weight: v.$font-light;
      color: v.$neutral-700;
    }

    p {
      font-size: v.$font-body;
      font-weight: v.$font-regular;
      margin-bottom: 4%;
    }
  }
}
</style>
