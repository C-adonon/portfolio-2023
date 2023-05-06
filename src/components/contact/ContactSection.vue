<script setup>
import PrimaryBtn from '../ui/PrimaryBtn.vue';
</script>
<template>
    <div class="contact-container">
        <div class="contact-content">
            <h3>Restons en contact !</h3>
            <p>Intéressé par mon travail ? N'hésitez pas à me contacter ! Je suis actuellement à la recherche d'un
                stage en développement web d'une durée de 4 mois et d'une alternance de 12 mois.</p>
            <PrimaryBtn url="https://www.linkedin.com/in/chloe-adonon/">Contactez-moi</PrimaryBtn>
        </div>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

div.contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url("../contact-bg.svg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow-x: hidden;
    padding: 8%;
    
    div.contact-content {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 56px 48px;
        margin: auto;

        h3 {
            font-size: 50px;
            font-weight: v.$font-bold;
            margin-bottom: 2%;
            color: v.$neutral-900;
            text-align: center;
        }

        p {
            font-size: v.$font-body;
            font-weight: v.$font-regular;
            text-align: center;
            margin-bottom: 6%;
        }
    }
}

// Desktop
@media (min-width: 901px) and (max-width: 1023px) {

    div.contact-container {
        div.contact-content {
            width: 100%;
        }
    }
}

// Tablet & mobile
@media (max-width: 900px) {
    div.contact-container {
        padding: 4%;

        div.contact-content {
            width: 100%;
            padding: 0%;

            p {
                text-align: justify;
            }
        }
    }
}
</style>