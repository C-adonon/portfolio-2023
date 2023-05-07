<script setup>
import TopTitle from '../components/ui/TopTitle.vue';
import CardSuggestion from '../components/card/CardSuggestion.vue';
import PrimaryBtn from '../components/ui/PrimaryBtn.vue';
</script>

<template>
  <main class="about">
    <TopTitle>A propos de moi</TopTitle>
    <section class="about-content">
      <div class="container">
        <div class="about-content-text">
          <p>Mon parcours en développement web a été influencé par ma passion pour le design. J'apporte une approche
            créative à tous mes projets, en m'efforçant de trouver des solutions innovantes pour améliorer l'expérience
            utilisateur.
          </p>
          <p>
            En tant qu’étudiante en développement web à l’ESD Paris, j’aime explorer différentes
            technologies, langages de programmation et frameworks pour trouver les meilleurs outils afin de répondre aux
            besoins de mes projets. Ma curiosité me pousse à constamment améliorer mes compétences et me permet d’évoluer.
          </p>
          <p>
            En dehors de mes projets de développement web, je m’intéresse à d'autres domaines tels que la sculpture, l'art
            plastique et la pop culture ce qui me permet d'aborder mes projets sous des angles différents.
          </p>
          <p>
            « Créativité et Technologie » décrivent mon approche de travail : le souci du détail et l'innovation.
          </p>
        <PrimaryBtn :cv="true">Télécharger mon CV</PrimaryBtn>

        </div>
        <div class="about-image">
          <img src="/moi2.jpg" alt="moi">
        </div>
      </div>
    </section>
    <!-- <section class="skills">
      <h2>Mes compétences</h2>
      <ul class="skill-list">
        <li class="skill">
          <img src="/black-monitor.svg" alt="">
          <img src="/white-monitor.svg" alt="">
          <p> Code - <span>HTML, Javascript, CSS, SASS, PHP, Vue.js, Node.js ... </span></p>
        </li>
        <li class="skill">
          <img src="/black-design-services.svg" alt="">
          <img src="/white-design-services.svg" alt="">
          <p>UI & UX Design - <span>Miro, Figma</span></p>
        </li>
        <li class="skill">
          <img src="/black-brush.svg" alt="">
          <img src="/white-brush.svg" alt="">
          <p>Branding - <span>Illustrator, Photoshop</span></p>
        </li>
      </ul>
    </section> -->
    <CardSuggestion />
  </main>
</template>


<style scoped lang="scss">
@use '../assets/variables.scss' as v;

section {
  width: 80%;
  margin: 0 auto 4% auto;
}

img{
  display: inline;
  height: 50px;
}
section.about-content {
  padding: 0 4% 0 4%;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8%;

    .about-image {

      img {
        width: 100%;
        height: 100%;
      }
    }

    .about-content-text {
 
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
  }
}

.skills {
  h2 {
    font-family: v.$elastic;
    font-size: 50px;
    font-weight: v.$font-light;
    color: v.$primary-700;
    border-bottom: 2px solid v.$primary-700;
    padding-bottom: 4px;
  }
}

.skill-list {
  display: flex;
  flex-direction: column;
  list-style: none;
  gap: 2%;
  margin: 0;

  .skill {
    border-bottom: 2px solid v.$primary-700;

    p {
      font-size: 85px;
      font-size: v.$font-header1;
      font-weight: v.$font-medium;
      color: v.$primary-700;
      padding: 1% 0 1% 0;

      span {
        font-family: v.$clash-display;
        font-size: v.$font-header1;
        font-weight: v.$font-regular;
        // font-weight: v.$font-light;
        color: v.$primary-700;
      }
    }
  }
}


// Desktop
@media (min-width: 901px) and (max-width: 1023px) {
  section.about-content {
    width: 100%;

    .container {
      flex-direction: column-reverse !important;

      .about-content-text,
      .about-image {
        width: 100% !important;
      }

      .about-image {
        text-align: center;
      }
    }
  }


}

// Tablet & mobile
@media (max-width: 900px) {
  section.about-content {
    width: 100%;

    .container {
      flex-direction: column-reverse !important;
      text-align: center !important;


      .about-content-text,
      .about-image {
        width: 100% !important;
      }

      .about-image {
        text-align: center;
        margin-bottom: 4% !important;
      }
    }
  }

}
</style>
