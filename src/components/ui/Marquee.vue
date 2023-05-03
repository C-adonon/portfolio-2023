<template>
    <div class="container">
        <span>
            <slot></slot>
        </span>
        <span>
            <slot></slot>
        </span>
        <span>
            <slot></slot>
        </span>
        <span>
            <slot></slot>
        </span>
        <span>
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    name: "Marquee",
}
</script>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

.container {
    white-space: nowrap;
    overflow: hidden;
    background-color: v.$neutral-900;

    span {
        display: inline-block;
        padding-right: 50px;
        animation: marquee 10s linear infinite;
        font-size: 100px;
        font-weight: v.$font-semi-bold;
        color: v.$secondary-050;
        padding: 10px 15px;
    }
}

@keyframes marquee {
    0% {
        transform: translateX(0);
    }

    100% {
        transform: translateX(-100%);
    }
}

@media (min-width: 901px) and (max-width: 1023px) {

    .container {
        span {
            font-size: 80px;
        }
    }
}

// Tablet & mobile
@media (max-width: 900px) {

    .container {
        span {
            font-size: 12vh;
        }
    }
}
</style>