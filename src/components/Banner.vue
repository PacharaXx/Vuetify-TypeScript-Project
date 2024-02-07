<template>
    <div class="bannerContainer">
        <v-parallax :src=src class="imgBanner">
            <div class="d-flex flex-column fill-height justify-center align-center text-white">
                <h1 class="text-h4 font-weight-thin mb-4 textFloat">
                    {{ title }}
                </h1>
            </div>
        </v-parallax>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({

    props: {
        src: {
            type: String,
            default: ''
        },
        title: {
            type: String,
            default: ''
        }
    },
    name: 'Banner',
    setup() {
        return {}
    }
})
</script>

<style scoped>
.bannerContainer {
    overflow: hidden;
    background-color: black;
}

.textFloat {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Sobiscuit';
    font-size: 7em;
    color: white;
    z-index: 1;
}

.imgBanner {
    /* width: 100%; */
    max-height: 720px;
    min-height: 15rem;
    object-fit: cover;
    object-position: center;
    /* smooth gradient mask left and right */
    mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 14%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.7) 86%, rgba(255, 255, 255, 0) 100%);
    -webkit-mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.7) 14%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.7) 86%, rgba(255, 255, 255, 0) 100%);
}
</style>