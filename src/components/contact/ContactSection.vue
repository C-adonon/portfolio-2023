<script setup>
import PrimaryBtn from '../ui/PrimaryBtn.vue';
</script>
<template>
    <div class="contact-wrapper">
        <h3>Restons en contact</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates quaerat quae eum aperiam. Dicta velit
            excepturi pariatur ducimus ex rerum soluta culpa itaque architecto! Ea veritatis a quod repellendus blanditiis?
        </p>
        <PrimaryBtn url="https://www.linkedin.com/in/chloe-adonon/">Contactez-moi</PrimaryBtn>
    </div>
</template>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

div.contact-wrapper {
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
</style>