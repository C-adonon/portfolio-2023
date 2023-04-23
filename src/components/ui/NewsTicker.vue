<template>
    <h3 class="news-ticker-container">
        <div class="top">
            <slot></slot>
        </div>
    </h3>
</template>

<script>
export default {
    name: "NewsTicker",
}
</script>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

$duration: 30s;

.news-ticker-container {
    width: 100%;
    overflow: hidden;
    // padding-left: 100%;
    box-sizing: content-box;

    @keyframes ticker {
        0% {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
            visibility: visible;
        }

        100% {
            -webkit-transform: translate3d(-100%, 0, 0);
            transform: translate3d(-100%, 0, 0);
        }
    }

    div.top {
        color: v.$secondary-900;
        font-size: v.$font-title-L;
        font-weight: v.$font-semi-bold;
    }
    
}
</style>