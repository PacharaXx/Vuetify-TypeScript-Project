<template>
    <div class="ListContainer">
        <div class="title">
            <div style="display: flex; align-items: center;">
                <p>{{ title }}</p>
                <img style="margin-left: 1rem;" width="32" height="32"
                    src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/external-fire-blogger-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
                    alt="external-fire-blogger-vitaliy-gorbachev-flat-vitaly-gorbachev" />
                <!-- <img style="margin-left: 1rem;" width="32" height="32" src="https://img.icons8.com/stickers/100/fire-element.png" alt="fire-element"/> -->
            </div>
            <v-icon @click="navigateTo('/')">mdi-chevron-right</v-icon>
        </div>
        <v-sheet elevation="8">
            <v-slide-group v-model="selectedItems" show-arrows>
                <v-slide-group-item v-for="(item, index) in items" :key="index">
                    <v-card class="ma-4" style="position: relative;">
                        <img style="top: 2px; right: 2px; margin-left: 1rem; position: absolute; z-index: 5;" 
                            width="32" height="32"
                            v-if="item.isHot"
                            src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/58/external-fire-blogger-vitaliy-gorbachev-flat-vitaly-gorbachev.png"
                            alt="external-fire-blogger-vitaliy-gorbachev-flat-vitaly-gorbachev" />
                        <!-- <v-icon color="red" style="position: absolute; top: 0; right: 0;">mdi-fire</v-icon> -->
                        <img :src="item.imgUrl" height="100%" width="auto" :alt="item.title" class="img-Child"
                            @click="navigateTo(item.redirectUrl)">
                        <v-toolbar-title>{{ item.title }}</v-toolbar-title>
                    </v-card>

                    <!-- <v-skeleton-loader type="image" :loading="true" :height="150" :width="150">
                        <v-card class="ma-4">
                            <img :src="item.imgUrl" height="100%" width="auto" :alt="item.title" class='img-Child'
                                @click="navigateTo(item.redirectUrl)">
                            <v-toolbar-title>{{ item.title }}</v-toolbar-title>
                        </v-card>
                    </v-skeleton-loader> -->
                </v-slide-group-item>
            </v-slide-group>
        </v-sheet>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String,
            default: ''
        },
        items: {
            type: Array,
            default: () => []
        }
    },
    name: 'ListContainer',
    setup(props) {
        const selectedItems = props.items.map(() => false)

        const navigateTo = (url: string) => {
            window.location.href = url
        }

        return {
            selectedItems,
            navigateTo
        }
    }
})
</script>

<style scoped>
/* mobile */

@media screen and (max-width: 600px) {
    .v-slide-group-item {
        min-width: 100px;
        max-width: 100px;
        min-height: 150px;
        max-height: 150px;
    }

    .v-card {
        min-width: 100px;
        max-width: 100px;
        min-height: 150px;
        max-height: 150px;
    }

    .v-card .v-toolbar-title {
        font-size: smaller;
    }

    .title p {
        font-size: 1.5em;
    }

    .title v-icon {
        font-size: 1.5em;
    }
}

/* desktop */

@media screen and (min-width: 600px) {
    .v-slide-group-item {
        min-width: 140px;
        max-width: 140px;
        min-height: 210px;
        max-height: 210px;
    }

    .v-card {
        min-width: 140px;
        max-width: 140px;
        min-height: 210px;
        max-height: 210px;
    }

    .v-card .v-toolbar-title {
        font-size: smaller;
    }

    .title p {
        font-size: 2em;
    }

    .title v-icon {
        font-size: 2em;
    }
}

.v-sheet {
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
}

.v-card:hover {
    transform: scale(1.1);
    transition: transform 0.2s;
    /* color */
    filter: brightness(1.1);
}

.v-card {
    filter: brightness(0.9);
    /* set center */
    display: flex;
    justify-content: center;
    align-items: center;
}

.v-card .v-toolbar-title {
    font-family: 'Sobiscuit';
    font-size: smaller;
    color: white;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    /* shadow */
    text-shadow: 1px 1px 2px #000000;
    /* background */
    background-color: rgba(0, 0, 0, 0.5);
}

img.img-Child {
    object-position: center;
    cursor: pointer;
    transition: transform 0.2s;
}

h1 {
    font-family: 'Sobiscuit';
    color: white;
    text-align: center;
}

.ListContainer {
    padding: 20px;
    background-color: black;
    display: flex;
    flex-direction: column;
}

.title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
}

.title p {
    font-family: 'Sobiscuit';
    color: white;
}
</style>
