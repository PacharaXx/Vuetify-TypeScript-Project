<template>
    <NavBar />
    <v-container>
        <v-card class="mx-auto pt-8" max-width="1080">
            <v-card-title class="d-flex justify-center mb-6">
                <h1>{{ details?.title + ' ep ' + slug }}</h1>
            </v-card-title>
            <v-card class="d-flex justify-center" v-for="item in 15" :key="item" max-width="1280" color="black">
                <img src="https://momojijiart.files.wordpress.com/2022/08/episode-010.3-1.jpg?strip=info" alt="True Beauty" width="100%" height="auto" />
            </v-card>
        </v-card>
    </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '@/components/NavBar.vue'
import { useRoute } from 'vue-router'
import data from '@/assets/data.json'

export default defineComponent({
    name: 'ReadPage',
    components: {
        NavBar
    },
    setup() {
        // Get the current route and extract the id and slug
        const route = useRoute();
        const id = parseInt(route.params.id as string);
        const slug = route.params.slug as string;

        const details = data.find((item) => item.id === id);

        return {
            id,
            slug,
            details
        }
    }
})

</script>