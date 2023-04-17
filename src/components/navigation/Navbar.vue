<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav id="navbar">
        <div id="navbar-logo">
            <RouterLink to="/">Logo</RouterLink>
        </div>
        <div class="links-container">
            <ul class="navbar-list">
                <li class="navbar-links">
                    <RouterLink to="/about">A propos</RouterLink>
                </li>
                <li class="navbar-links">
                    <RouterLink to="/projects">Projets</RouterLink>
                </li>
            </ul>
            <div class="contact">
                Contactez-moi
            </div>
        </div>
    </nav>
</template>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

nav#navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999999;
    background-color: v.$secondary-050;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    border-bottom: 2px solid v.$neutral-900;
    margin-bottom: calc(80px + 4px);

    #navbar-logo {
        margin-left: 4%;

        a {
            font-size: v.$font-title;
            font-weight: v.$font-bold;
            cursor: pointer;
            text-decoration: none;
            color: v.$neutral-900;
        }
    }

    div.links-container {
        width: 50%;
        height: 100%;
        display: flex;

        ul.navbar-list {
            display: flex;
            height: 100%;
            width: 100%;
            justify-content: space-evenly;
            align-items: center;
            list-style: none;
            padding: 0;

            li.navbar-links {
                font-size: v.$font-header2;
                font-weight: v.$font-bold;
                cursor: pointer;

                a {
                    text-decoration: none;
                    color: v.$neutral-900;

                    &:hover {
                        color: v.$primary-700;
                    }
                }

            }
        }

        div.contact {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 50%;
            font-size: v.$font-header2;
            font-weight: v.$font-bold;
            color: v.$secondary-050;
            background-color: v.$neutral-900;
            cursor: pointer;

            &:hover {
                color: v.$primary-700;
            }
        }

    }

}
</style>