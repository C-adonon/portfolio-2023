<script setup>
import Marquee from '../components/ui/Marquee.vue';
import ProjectCard from '../components/card/ProjectCard.vue';
import ContactSection from '../components/contact/ContactSection.vue';
import PrimaryBtn from '../components/ui/PrimaryBtn.vue';
import CardSuggestion from '../components/card/CardSuggestion.vue';
import RadialGrandient from '../components/gradient/RadialGrandient.vue';
const assetUrl = import.meta.env.VITE_ASSET_URL;
</script>


<template>
  <main>
    <!-- Hero/Intro -->
    <section class="intro">
      <div class="intro-info">
        <h1>Chloe Adonon</h1>
        <h2> <span>Creative</span> web developer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, animi molestias quos, tempore adipisci aliquid
          hic !</p>
        <PrimaryBtn :cv="true">Télécharger mon CV</PrimaryBtn>
      </div>
      <div class="intro-picture">
        <RadialGrandient id="1" top="30%" left="70%" />
        <img :src='assetUrl + "inoya-ads-3.jpg"' alt="chloe-adonon">
      </div>
    </section>

    <!-- About -->
    <Marquee>A propos</Marquee>
    <section class="about">
      <div class="about-picture">
        <RadialGrandient id="2" top="130%" left="5%" />
        <img :src='assetUrl + "inoya-ads-3.jpg"' alt="chloe-adonon">
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
        <PrimaryBtn route="/about">A propos de moi</PrimaryBtn>
      </div>
    </section>

    <!-- Projects -->
    <Marquee>Projets</Marquee>
    <section class="projects">
      <CardSuggestion />
    </section>
  </main>


  <!-- Contact -->
  <Marquee>Contact</Marquee>
  <section class="contact">
    <RadialGrandient id="3" top="300%" left="-15%" />
    <ContactSection />
  </section>
  <RadialGrandient id="4" top="360%" left="95%" />
</template>

<script>

export default {
  name: "HomeView",
  components: {
    Marquee,
    PrimaryBtn,
    ProjectCard,
    ContactSection,
    CardSuggestion,
    RadialGrandient
  }
}

</script>

<style scoped lang="scss">
@use '../assets/variables.scss' as v;

$overlap: -5%;

section {
  width: 80%;
  margin: 8% auto 8% auto;
}

main {
  width: 100%;
  margin: 0 auto;
  margin-top: calc(80px + 5%);

  section.intro {
    display: flex;
    justify-content: center;
    align-items: center;

    div.intro-info {
      margin-right: $overlap;
      width: 65%;

      h1 {
        font-size: v.$font-header1;
        font-weight: v.$font-bold;
        color: v.$neutral-900;
      }

      h2 {
        font-size: v.$font-title-XXL;
        font-weight: v.$font-medium;
        color: v.$primary-700;
        color: v.$neutral-900;
        line-height: 110px;

        span {
          font-family: v.$font-family-elastic;
          color: v.$primary-900;
        }
      }

      p {
        font-size: v.$font-header2;
        font-weight: v.$font-regular;
        margin-bottom: 4%;
        max-width: 70%;
        margin-top: 16px;
      }
    }

    div.intro-picture {
      margin-left: $overlap;
      z-index: -1;
      width: 40%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

    }
  }

  section.about {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 32px;

    div.about-picture,
    div.about-info {
      width: 40%;
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
}

section.contact {
  width: 100vw;
  height: 90vh;
  background-image: url("../contact-bg.svg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
}
</style>
