<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SocialBtn from '../ui/SocialBtn.vue';
</script>

<template>
    <footer id="footer">
        <div class="footer-info">
            <div class="footer-logo">
                <RouterLink to="/">Logo</RouterLink>
            </div>
            <div class="footer-links">
                <ul class="footer-list">
                    <li class="footer-link">
                        <RouterLink to="/about">A propos</RouterLink>
                    </li>
                    <li class="footer-link">
                        <RouterLink to="/projects">Projets</RouterLink>
                    </li>
                </ul>
                <div class="footer-socials">
                    <ul>
                        <li>
                            <SocialBtn icon="../linkedin-icon.svg" link="https://www.linkedin.com/in/chloe-adonon/" />
                        </li>
                        <li>
                            <SocialBtn icon="../github-icon.svg" link="https://github.com/C-adonon/" />
                        </li>
                        <li>
                            <SocialBtn icon="../mail-icon.svg" mail="chloe.adonon@gmail.com" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <p class="footer-copyrights">&copy; 2023 - Tous droits réservés</p>
    </footer>
</template>

<style scoped lang="scss">
@use '../../assets/variables.scss' as v;

footer#footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;
    background-color: v.$neutral-900;
    padding: 3% 3% 1% 3%;
    margin-top: 10%;


    .footer-info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;

        .footer-logo {
            a {
                color: v.$neutral-050;
                font-size: v.$font-title;
                font-weight: v.$font-bold;
                cursor: pointer;
                text-decoration: none;
            }
        }

        .footer-links {
            display: flex;
            flex-direction: column;
            gap: 32px;
            width: 30%;

            ul.footer-list {
                display: flex;
                justify-content: flex-end;
                gap: 50px;
                align-items: center;
                list-style: none;

                li.footer-link {
                    a {
                        color: v.$neutral-050;
                        font-size: v.$font-header3;
                        font-weight: v.$font-bold;
                        cursor: pointer;
                        text-decoration: none;

                    }
                }
            }

            .footer-socials {
                display: flex;
                justify-content: flex-end;
                gap: 10px;

                ul {
                    list-style: none;
                    display: flex;
                    justify-content: space-around;
                    gap: 32px;
                }

                li {
                    a {
                        text-decoration: none;
                        color: v.$neutral-050;
                        font-size: v.$font-small;
                        font-weight: v.$font-bold;
                        cursor: pointer;
                    }
                }
            }
        }
    }

    .footer-copyrights {
        font-size: v.$font-verysmall;
        font-weight: v.$font-regular;
        color: v.$neutral-050;
    }
}
</style>