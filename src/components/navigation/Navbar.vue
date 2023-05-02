<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <nav id="navbar">
        <div id="navbar-logo">
            <RouterLink to="/"><img src="/logo6.svg" alt="logo" title="logo"></RouterLink>
        </div>
        <div class="navbar-mobile-open" @click="openMobileMenu">
            <img class="menu-icon" src="/menu-icon.svg" alt="menu-icon" title="menu-icon">
        </div>
        <div id="all-links" class="links-container">
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

<script>
export default {
    name: 'Navbar',
    methods: {
        openMobileMenu() {
            if (window.innerWidth < 900) {
                const linksContainer = document.querySelector('#all-links');
                linksContainer.classList.toggle('mobile-links-container');
                linksContainer.classList.toggle('links-container');
                let menuIcon = document.querySelector('.menu-icon');

                if (menuIcon.src.includes('menu-icon.svg')) {
                    menuIcon.src = '/close-icon.svg';
                } else {
                    menuIcon.src = '/menu-icon.svg';
                }

            }

        }
    }
}
</script>

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

    div.navbar-mobile-open {
        display: none;
        margin-right: 2%;
        cursor: pointer;

        img {
            height: 40px;
            width: 40px;
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

// Desktop
@media (min-width: 901px) and (max-width: 1023px) {

    nav#navbar {

        div.links-container {
            width: 70%;
        }
    }

}

// Tablet & mobile
@media (max-width: 900px) {
    nav#navbar {
        height: 56px;
        margin-bottom: calc(56px + 4px);

        #navbar-logo {

            a {

                img {
                    height: 46px;
                    width: 46px;
                }
            }
        }


        div.navbar-mobile-open {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-right: 2%;
            cursor: pointer;

            img {
                height: 36px;
                width: 36px;
            }
        }

        div.links-container {
            display: none;
        }

        .mobile-links-container {
            position: absolute;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            background: v.$neutral-900;
            top: 56px;
            left: 0;
            width: 100%;
            height: 80vh;

            ul.navbar-list {
                list-style: none;
                padding: 0;
                width: 100%;

                li.navbar-links {
                    a {
                        font-size: v.$font-header2;
                        font-weight: v.$font-semi-bold;
                        color: v.$secondary-050;
                        text-decoration: none;
                        text-align: center;
                        display: block;
                        padding: 36px 0px;
                        width: 100%;
                        height: 100%;

                    }
                }

            }
        }

        div.contact {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
            font-size: v.$font-header2;
            font-weight: v.$font-bold;
            background-color: v.$neutral-900;
            text-align: center;
            padding: 24px 0px;
            border-width: 2px;
            border-style: solid;
            border-image: linear-gradient(to right, v.$primary-050 , v.$primary-700) 1;


            a {
                text-decoration: none;
                color: v.$secondary-050;
            }

        }

    }
}
</style>