<template>
    <div class="socials">
        <a v-if="link" :href="link" target="_blank" rel="noopener noreferrer">
            <img :src="icon" alt="social icon" />
        </a>
        <a v-else-if="mail" :href="'mailto:' + mail" target="_blank">
            <img :src="icon" alt="social icon" />
        </a>
    </div>
</template>

<script>
export default {
    name: "SocialBtn",
    props: {
        link: {
            type: String,
            required: false
        },
        mail: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: true
        }
    }
}
</script>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

div.socials {
    padding: 8px;
    border-radius: 4px;
    background-color: v.$secondary-050;
    height: 40px;
    width: 40px;
    cursor: pointer;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;

        img {
            height: 32px;
            width: 32px;
        }
    }

    &:hover {
        background-color: v.$primary-700;

        img {
            filter: invert(1);
        }
    }
}
</style>