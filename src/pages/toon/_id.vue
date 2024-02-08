<template>
    <NavBar />
    <v-container>
        <v-row class="d-flex justify-center mt-10">
            <v-col cols="12">
                <v-card class="mx-auto pa-4 flex" max-width="1280">
                    <v-card-title class="title mb-6">
                        <h1>{{ details?.title }}</h1>
                    </v-card-title>
                    <div class="mx-auto d-flex flex-wrap justify-center">
                        <div class="flex-md-grow-1">
                            <v-img :src="details?.imgUrl" aspect-ratio="1.5" width="420"></v-img>
                        </div>
                        <div class="ml-4 flex-md-grow-1">
                            <v-card-text class="d-flex flex-wrap ga-4">
                                <b>WebToon's Name:</b>
                                <p>{{ details?.title }}</p>
                            </v-card-text>
                            <v-card-text class="d-flex flex-wrap ga-4">
                                <b>Author:</b>
                                <p>{{ details?.author }}</p>
                            </v-card-text>
                            <v-card-text class="d-flex flex-wrap ga-4">
                                <b>Genre:</b>
                                <p v-for="item in details?.genre" :key="item">{{ item }}</p>
                            </v-card-text>
                            <v-card-text class="d-flex flex-wrap ga-4 align-center">
                                <b>Rating:</b>
                                <v-rating v-model="details.rating" color="amber" dense size="25"></v-rating>
                            </v-card-text>
                            <v-layout class="d-flex ga-4 flex-warp pl-4 mt-5">
                                <v-btn color="primary" dark>Read</v-btn>
                                <v-btn color="primary" dark>Favorite</v-btn>
                            </v-layout>
                        </div>
                    </div>
                </v-card>
            </v-col>
            <!-- Section for List of EPs -->
            <v-col cols="12">
                <v-card class="mx-auto pa-4 flex" max-width="1280">
                    <v-card-title class="mb-6">
                        <h1 style="font-size: larger;">Episodes</h1>
                    </v-card-title>
                    <v-row class="d-flex justify-center">
                        <v-virtual-scroll :height="500"
                            :items="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].reverse()" :item-height="150"
                            class="px-2">
                            <template v-slot="{ item }">
                                <v-card class="mx-auto flex eps mt-4" max-width="1280" color="black" @click="navigatorToDetails(details?.id, item)">
                                    <img class="imgEps" :src=details?.epImg alt="True Beauty" width="100%" height="auto" />
                                    <v-card-title class="title mb-6">
                                        <h1 style="font-size: large;">{{ details?.title }} Ep {{ item }} The Beginner</h1>
                                    </v-card-title>
                                </v-card>
                            </template>
                        </v-virtual-scroll>
                    </v-row>
                </v-card>
            </v-col>
        </v-row>
    </v-container>

    <ToonCard />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavBar from '@/components/NavBar.vue'
import data from '@/assets/data.json'
import { useRoute } from 'vue-router'
import ToonCard from '@/components/ToonCard.vue'

interface WebtoonDetails {
    id: number;
    title: string;
    author: string;
    genre: string[];
    imgUrl: string;
    redirectUrl: string;
    isHot?: boolean;
    rating: Float64Array;
    epImg: string;
}

export default defineComponent({
    name: 'Toon',
    components: {
        NavBar,
        ToonCard
    },
    setup() {
        const route = useRoute(); // Get current route
        const details = ref<WebtoonDetails | null>(null); // Define a ref for details

        // Get the details of the webtoon
        const getDetails = () => {
            const id = parseInt(route.params.id as string);
            const webtoon = data.find((item) => item.id === id);
            if (webtoon) {
                details.value = webtoon;
            }
        }

        const navigatorToDetails = (id : number, ep : number) => {
            window.location.href = '/toon/' + id + '/' + ep;
        }

        getDetails(); // Call the function to fetch details

        return {
            details,
            navigatorToDetails
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

.imgEps {
    position: absolute;
    object-position: 0 -150px;
    z-index: -1;
    mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.7) 14%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.7) 86%, rgba(255, 255, 255, 0.3) 100%);
    -webkit-mask-image: linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.7) 14%, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0.7) 86%, rgba(255, 255, 255, 0.3) 100%);
}

.eps {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
}

.eps:hover {
    transform: scale(1.01);
    transition: transform 0.2s;
    filter: brightness(1.1);
}
</style>