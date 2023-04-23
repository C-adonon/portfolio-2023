<template>
    <div class="grad"></div>
</template>

<script>
export default {
    name: "RadialGrandient",
    props: {
        height: {
            type: String,
            default: '400px'
        },
        width: {
            type: String,
            default: '400px'
        },
        top: {
            type: String,
            default: '30%'
        },
        left: {
            type: String,
            default: '70%'
        },
    },
    created() {
        // this.setPositon();
        // this.setSize();
    },
    methods: {
        setPositon() {
            console.log(this.top)
            const gradient = document.getElementsByClassName('grad');
            gradient.style.top = "30%";
            gradient.style.left = "70%";
        },
        setSize() {
            const gradient = document.querySelector('.grad');
            gradient.style.width = this.width;
            gradient.style.height = this.height;
        }
    }
}
</script>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

div.grad {
    position: absolute;
    top: 30%;
    left: 70%;
    width: 500px;
    height: 500px;
    z-index: -1;
    border-radius: 50%;
    filter: blur(75px);
    background: linear-gradient(50deg, #d3c0f7, #2c36ef);
    background-size: 400% 400%;
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
</style>