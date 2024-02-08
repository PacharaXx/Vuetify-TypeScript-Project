<template>
    <v-app-bar class="px-md-16 px-xs-4" app dark flat color='black'>
        <v-toolbar-title><span @click="openOnClick">WebToon</span></v-toolbar-title>
        <div class="d-flex align-center">
            <div v-if="isSearch">
                <v-text-field label="Search" hide-details append-icon="mdi-close" @click:append="toggleSearch"
                    style="width: 300px;"></v-text-field>
                <!-- Display search results -->
                <!-- <div v-if="searchResults.length > 0">
                    <h2>Search Results</h2>
                    <ul>
                        <li v-for="result in searchResults" :key="result.id">
                            {{ result.name }}
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <p>No results found.</p>
                </div> -->
            </div>
            <v-btn icon @click="toggleSearch">
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </div>

    </v-app-bar>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'NavBar',
    setup() {
        const isSearch = ref(false)
        const openOnClick = () => {
            // redirect to home page
            window.location.href = '/'
        }

        const toggleSearch = () => {
            isSearch.value = !isSearch.value
        }

        return { openOnClick, isSearch, toggleSearch }
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

/* Banner Parallax */
.v-toolbar-title span {
    font-family: 'Sobiscuit';
    cursor: pointer;
}

/* Navbar */
.navbar {
    padding-inline-start: 64px !important;
    padding-inline-end: 64px !important;
    background-color: black;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.9);
}

</style>