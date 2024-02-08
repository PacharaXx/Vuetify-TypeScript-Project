<template>
    <NavBar />
    <v-container>
        <v-row class="d-flex justify-center">
            <v-col cols="12">
                <v-card class="mx-auto pa-4 flex" max-width="1280">
                    <v-card-title class="title mb-6">
                        <h1>{{ title }}</h1>
                    </v-card-title>
                    <div class="mx-auto d-flex flex-wrap justify-center">
                        <div class="flex-md-grow-1">
                            <v-img src="https://m.media-amazon.com/images/I/81jm48GH5KL._AC_UF1000,1000_QL80_.jpg"
                                aspect-ratio="1.5" width="420"></v-img>
                        </div>
                        <div class="ml-4 flex-md-grow-1">
                            <v-card-text class="d-flex flex-wrap ga-4">
                                <b>WebToon's Name:</b>
                                <p>True Beauty is a romantic comedy about a high school </p>
                            </v-card-text>
                            <v-card-text class="d-flex flex-wrap ga-4">
                                <b>Author:</b>
                                <p>Yaongyi</p>
                            </v-card-text>
                            <v-card-text class="d-flex flex-wrap ga-4">
                                <b>Genre:</b>
                                <p>Comedy, Romance, School Life, Slice of Life</p>
                            </v-card-text>
                            <v-card-text class="d-flex flex-wrap ga-4 align-center">
                                <b>Rating:</b>
                                <v-rating v-model="rating" color="amber" dense size="25"></v-rating>
                            </v-card-text>
                            <v-layout class="d-flex ga-4 flex-warp pl-4 mt-5">
                                <v-btn color="primary" dark>Read</v-btn>
                                <v-btn color="primary" dark>Favorite</v-btn>
                            </v-layout>
                        </div>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
    name: 'Toon',
    props: {
        title: {
            type: String,
            default: 'True Beaty'
        }
    },
    components: {
        NavBar
    },
    setup() {
        return {
            rating: 4
        }
    }

})
</script>

<style scoped>
/* mobile */
@media screen and (max-width: 600px) {
    .title p {
        font-size: 1.5em;
    }

    .title {
        text-align: center;
    }
}
</style>