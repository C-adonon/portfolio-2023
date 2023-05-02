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
    padding: 4px 16px;
    background-color: v.$primary-700;
    font-size: v.$font-small;
    border-radius: 30px;
    font-weight: v.$font-medium;
    color: v.$secondary-050;
    text-align: center;
    margin-right: 10px;

    // last-child changes background color of last tag
    &:last-child {
        background-color: v.$secondary-050;
        color: v.$primary-700;
        border: 2px solid v.$primary-700;
    }
}

@media (max-width: 900px) {
    
    .tag {
        margin-bottom: 1%;
    }
}

</style>