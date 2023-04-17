<template>
    <div class="top-title">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "TopTitle",
}
</script>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

div.top-title {
    padding:  4% 8%;
    text-align: center;
    font-size: 100px;
    font-weight: v.$font-bold;
    color: v.$neutral-800;
}
</style>