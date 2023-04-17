<template>
    <div class="tag">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "Tag",
}
</script>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

.tag {
    display: inline-block;
    padding: 2px 16px;
    background-color: v.$primary-700;
    font-size: v.$font-verysmall;
    border-radius: 30%;
    font-weight: v.$font-regular;
    color: v.$secondary-050;
    text-align: center;
    // last-child changes background color of last tag
    &:last-child {
        background-color: v.$secondary-050;
        color: v.$primary-700;
    }
}

</style>