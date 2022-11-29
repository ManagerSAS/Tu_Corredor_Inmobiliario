<template>
    <div class="header-section header-transparent" >
        <div class="header-inner">
            <div class="container position-relative">
                <div class="row justify-content-between align-items-center" >
                    <!-- Header Logo Start -->
                    <div class="col-auto d-flex">
                        <div class="header-logo ml-lg-10 mt-lg-5 ml-md-10 mt-md-5">
                            <n-link to="/">
                                <img height="50" class="dark-logo" src="../static/logo.png" alt="Agency Logo"/>
                            </n-link>
                        </div>
                    </div>
                    <!-- Header Logo End -->
                    <v-spacer ></v-spacer>
                    <!-- Header Main Menu Start -->
                    <div class="col-auto d-flex" >
                        <div class="menu-column-area d-none d-xl-block d-lg-block position-static">
                            <nav class="site-main-menu">
                                <ul>
                                    <li>
                                        <n-link style="text-decoration: none;" to="/" ><v-icon color="#9c0c04">mdi-home mdi-36px</v-icon> </n-link>
                                    </li>
                                    <li>
                                        <n-link style="text-decoration: none" to="#about">¿Quienés Somos? </n-link>
                                    </li>
                                    <li>
                                        <n-link style="text-decoration: none" to="#featured">Inmuebles</n-link>
                                    </li>
                                    <li>
                                        <n-link style="text-decoration: none" to="#property">Consigna tu Inmueble</n-link>
                                    </li>
                                    <li>
                                        <n-link style="text-decoration: none" to="#contact">Contáctanos</n-link>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                
                        <div class="header-mobile-menu-toggle d-xl-none d-md-none ml-sm-2 mt-5">
                            <button aria-label="Menu hamburguesa" class="toggle" @click="mobiletoggleClass('addClass', 'show-mobile-menu')">
                                <i class="icon-top"></i>
                                <i class="icon-middle"></i>
                                <i class="icon-bottom"></i>
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div >
</template>

<script>
    export default {
        

        data() {
            return {
                isSticky: false,
            }
        },

        mounted(){
            window.addEventListener('scroll', () => {
                let scrollPos = window.scrollY
                if(scrollPos >= 200){
                    this.isSticky = true
                } else {
                    this.isSticky = false
                }
            })
        },

        methods: {
            // offcanvas mobile menu
            mobiletoggleClass(addRemoveClass, className) {
                const el = document.querySelector('#offcanvas-menu');
                if (addRemoveClass === 'addClass') {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
        },
    };
</script>