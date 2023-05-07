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
        <h1>Chloé Adonon</h1>
        <h2> <span>Creative</span> web developer</h2>
        <p>Développeuse web créative passionnée de design et de pop culture, je crée des expériences digitales uniques et
          innovantes.</p>
        <PrimaryBtn :cv="true">Télécharger mon CV</PrimaryBtn>
      </div>
      <div class="intro-picture">
        <RadialGrandient id="1" top="30%" left="70%" />
        <img src="/moi2.jpg" alt="chloe-adonon">
      </div>
    </section>

    <!-- About -->
    <Marquee>A propos</Marquee>
    <section class="about">
      <div class="about-picture">
        <RadialGrandient id="2" top="130%" left="5%" />
        <img src="/moi1.jpg" alt="chloe-adonon">
      </div>
      <div class="about-info">
        <h3>Créativité et technologie</h3>
        <p>Hello ! Je suis Chloé Adonon, j’étudie le développement web à l’ESD Paris.
          Le web est mon terrain de jeu préféré, une page blanche où je peux donner vie à mes idées.
        </p>
        <p>
          Ma passion pour la pop culture nourrit ma créativité et me permet de concevoir des expériences engageantes,
          ludiques et innovantes.
        </p>
        <p>
          Pour moi, créativité et technologie sont indissociables : ce sont les piliers de mon travail. J'apprends en
          créant, mais aussi en collaborant avec les autres !
        </p>
        <PrimaryBtn route="/about">A propos de moi</PrimaryBtn>
      </div>
    </section>

    <!-- Projects -->
    <section class="projects">
      <CardSuggestion />
    </section>

    <!-- Contact -->
    <Marquee>Contact</Marquee>
    <section class="contact">
      <RadialGrandient id="3" top="300%" left="-15%" />
      <ContactSection />
    </section>
    <RadialGrandient id="4" top="360%" left="95%" />

  </main>
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

$overlap: -8%;

section {
  width: 80%;
  margin: 4% auto 4% auto;
}

main {
  width: 100%;
  margin: 0 auto;
  margin-top: calc(80px + 5%);

  section.intro {
    height: 100% !important;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0%;

    div.intro-info {
      margin-right: $overlap;
      width: 65%;

      h1 {
        font-size: v.$font-header1;
        font-weight: v.$font-bold;
        font-weight: v.$font-semi-bold;
        color: v.$neutral-900;
      }

      h2 {
        font-size: 8vw;
        font-weight: v.$font-medium;
        color: v.$neutral-900;
        line-height: 110px;

        span {
          font-family: v.$elastic;
          color: v.$primary-700;
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
    padding: 5%;
    gap: 5%;


    div.about-picture {
      max-width: 40%;

      img {
        width: 100%;
        height: auto;
        object-fit: cover;
      }
    }

    div.about-info {
      h3 {
        font-family: v.$elastic;
        font-size: v.$font-header1;
        color: v.$primary-700;
        margin-bottom: 4%;
      }

      p {
        font-size: v.$font-body;
        font-weight: v.$font-regular;
        margin-bottom: 4%;
      }
    }
  }

  section.projects {
    width: 100%;
  }

  section.contact {
    width: 100%;
    margin: 0;
  }
}



// Desktop
@media (min-width: 901px) and (max-width: 1023px) {

  section {
    width: 100%;
    margin: 4% auto 8% auto;
  }

  div.intro-info {
    h2 {
      font-size: 80px !important;
      line-height: 60px !important;
    }
  }


}

// Tablet & mobile
@media (max-width: 900px) {

  section {
    width: 100%;
    margin: 4% auto 8% auto;
  }

  #blob-2,
  #blob-4 {
    display: none;
  }

  #blob-1 {
    top: 0% !important;
  }

  section.intro {
    height: 100% !important;
    flex-direction: column-reverse;

    div.intro-info,
    div.intro-picture {
      width: 95% !important;
      margin: 0% !important;
      text-align: center;

    }

    div.intro-info {
      margin-top: -10% !important;

      h1 {
        display: none !important;
      }

      h2 {
        font-size: 60px !important;
        line-height: 60px !important;
      }

      p {
        max-width: 100% !important;
      }
    }
  }

  section.about {
    flex-direction: column;

    div.about-picture,
    div.about-info {
      text-align: center;
      max-width: 100% !important;
    }

    div.about-info {
      p {
        text-align: justify;
      }
    }
  }

}
</style>
