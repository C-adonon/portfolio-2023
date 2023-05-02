<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav id="navbar">
        <div id="navbar-logo">
            <RouterLink to="/"><img src="/logo6.svg" alt="logo" title="logo"></RouterLink>
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
                <a href="https://www.linkedin.com/in/chloe-adonon/" target="_blank">
                    Contactez-moi
                </a>
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
        margin-left: 2%;

        a {
            display: flex;
            justify-content: center;
            align-items: flex-end;
            height: 100%;
            cursor: pointer;

            img {
                height: 60px;
                width: 60px;
            }
        }
    }

    div.links-container {
        width: 50%;
        height: 100%;
        display: flex;

        ul.navbar-list {
            display: flex;
            // height: 100%;
            width: 100%;
            justify-content: space-evenly;
            align-items: center;
            list-style: none;
            padding: 0;

            li.navbar-links {
                font-size: v.$font-header2;
                font-weight: v.$font-bold;
                cursor: pointer;

                &:hover {
                    background: linear-gradient(90deg, v.$primary-700 0%, v.$primary-050 100%);
                    backdrop-filter: blur(10px);
                    border-radius: 50%;

                }

                a {
                    display: block;
                    text-decoration: none;
                    padding: 16px 0%;
                    color: v.$neutral-900;
                    height: 100%;
                    width: 100%;
                    text-align: center;
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
            background-color: v.$neutral-900;
            text-align: center;
            cursor: pointer;
            padding: 16px 24px;
            a {
                text-decoration: none;
                color: v.$secondary-050;

                &:hover {
                    background: linear-gradient(90deg, v.$primary-700 0%, v.$primary-050 100%);
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }
            }

        }

    }

}
</style>