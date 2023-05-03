<template>
    <div class="gradient-blob" :id='"blob-" + id'></div>
</template>

<script>
export default {
    name: "RadialGrandient",
    props: {
        id: {
            type: String,
            required: true
        },
        top: {
            type: String,
            required: true
        },
        left: {
            type: String,
            required: true
        },
    },
    mounted() {
        this.setPositon();
    },
    methods: {
        setPositon() {
            let blob = document.querySelector(`#blob-${this.id}`);
            blob.style.top = this.top;
            if (window.innerWidth <= 900 && this.left >= "70%") {
                blob.style.left = "30%";
            } else {
                blob.style.left = this.left;
            }
        }
    }
}
</script>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

div.gradient-blob {
    position: absolute;
    width: 400px;
    height: 400px;
    z-index: -1;
    border-radius: 50%;
    filter: blur(75px);
    background: linear-gradient(50deg, #d3c0f7, #2c36ef);
    background-size: 400% 400%;
    opacity: 0.65;
    animation: AnimationName 4s ease infinite;
}

@keyframes AnimationName {
    0% {
        background-position: 87% 0%
    }

    50% {
        background-position: 14% 100%
    }

    100% {
        background-position: 87% 0%
    }
}

@media (min-width: 901px) and (max-width: 1023px) {}

@media (max-width: 900px) {

    div.gradient-blob {
        width: 60vw;
        height: 50vh;
    }
}
</style>