<template>
    <v-card>
        <v-img :src="details.imgUrl" height="200px">
            <v-card-title>{{ details.title }}</v-card-title>
        </v-img>
        <v-card-text>
            <p>{{ details.author }}</p>
            <p>{{ details.genre.join(', ') }}</p>
        </v-card-text>
    </v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'ToonCard',
    props: {
        details: {
            type: Object,
            default: () => null
        }
    },
    setup() {
        return {}
    }
})
</script>