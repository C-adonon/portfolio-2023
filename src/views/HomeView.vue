<script setup>
// import NewsTicker from '../components/ui/NewsTicker.vue';
import ProjectCard from '../components/card/ProjectCard.vue';
import ContactSection from '../components/contact/ContactSection.vue';
import PrimaryBtn from '../components/ui/PrimaryBtn.vue';
import CardSuggestion from '../components/card/CardSuggestion.vue';
const assetUrl = import.meta.env.VITE_ASSET_URL;
</script>


<template>
  <main>
    <!-- Hero/Intro -->
    <div class="gradient-background"></div>

    <section class="intro">
      <div class="intro-info">
        <h1>Chloe Adonon</h1>
        <h2> <span>Creative</span> web Developper</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, animi molestias quos, tempore adipisci aliquid
          hic quidem magni laboriosam quasi a !</p>
        <PrimaryBtn :cv="true">Télécharger mon CV</PrimaryBtn>
      </div>
      <div class="intro-picture">
        <img :src='assetUrl + "inoya-ads-3.jpg"' alt="chloe-adonon">
      </div>
    </section>

    <!-- About -->
    <section class="about">
      <div class="about-picture">
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
        <PrimaryBtn url="/about">A propos de moi</PrimaryBtn>
      </div>
    </section>


    <!-- Projects -->
    <section class="projects">
      <CardSuggestion />
    </section>

  </main>
  <!-- Contact -->
  <section class="contact">
    <ContactSection />
  </section>
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

$overlap: -8%;

section {
  margin: 10% 0;
}

section.intro {
  display: flex;
  justify-content: center;
  align-items: center;

  // div.intro-info,
  // div.intro-picture {
  //   width: 50%;
  // }

  div.intro-info {
    margin-right: $overlap;
    width: 60%;

    h1 {
      font-size: v.$font-title-L;
      font-weight: v.$font-bold;
      color: v.$neutral-900;
    }

    h2 {
      font-size: v.$font-title-XL;
      font-weight: v.$font-bold;
      color: v.$primary-700;
      line-height: 95px;

      span {
        font-family: v.$font-family-elastic;
      }
    }

    p {
      font-size: v.$font-header2;
      font-weight: v.$font-regular;
      margin-bottom: 4%;
      max-width: 70%;
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

section.contact {
  width: 100vw;
  height: 90vh;
  margin: 10% auto;
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
