<template>
    <v-container>
        <v-app-bar class="navbar" app dark flat color='black'>
            <v-toolbar-title @click="openOnClick">WebToon</v-toolbar-title>
            <v-spacer />
            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
        </v-app-bar>
        <div class="bannerContainer">
            <img
                class = "imgBanner"
                src="https://www.shutterstock.com/image-vector/vector-manga-screentone-black-white-260nw-2391352159.jpg"
                alt="banner"
            />
        </div>  
    </v-container>
</template>

<script lang="ts">

import { defineComponent } from 'vue'

export default defineComponent({
    name: 'NavBar',
    setup() {
        const openOnClick = () => {
            // redirect to home page
            window.location.href = '/'
        }
        return { openOnClick }
    }
})
</script>

<style scoped>

@font-face {
    font-family: 'EazyChat';
    src: url('../assets/fonts/EazyChat.ttf');
}

@font-face {
    font-family: 'Sobiscuit';
    src: url('../assets/fonts/Sobiscuit.ttf');
}

.v-toolbar-title{
    font-family: 'Sobiscuit';
    cursor: pointer;
}
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    padding-inline-start: 64px !important;
    padding-inline-end: 64px !important;
}
.bannerContainer {
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    width: 100%;
    height: 720px;
    overflow: hidden;
}
.imgBanner {
    top: 0;
    position: absolute;
    z-index: 5;
    width: 100%;
    height: 720px;
    object-fit: cover;
    filter: blur(5px);
}
</style>