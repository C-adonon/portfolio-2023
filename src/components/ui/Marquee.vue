<template>
    <div class="marquee">
        <div class="marquee__inner" aria-hidden="true">
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
    </div>
</template>

<script>
export default {
    name: "Marquee",
}
</script>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

.marquee {
    position: relative;
    overflow: hidden;
    --offset: 20vw;
    --move-initial: calc(-25% + var(--offset));
    --move-final: calc(-50% + var(--offset));

    .marquee__inner {
        width: fit-content;
        display: flex;
        position: relative;
        transform: translate3d(var(--move-initial), 0, 0);
        animation: marquee 5s linear infinite;
        animation-play-state: paused;

        span {
            font-size: 10vw;
            padding: 0 2vw;
            white-space: nowrap;
        }
    }

    &:hover .marquee__inner {
        animation-play-state: running;
    }
}

@keyframes marquee {
    0% {
        transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
        transform: translate3d(var(--move-final), 0, 0);
    }
}
</style>