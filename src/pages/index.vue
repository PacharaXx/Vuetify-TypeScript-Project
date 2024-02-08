<template>
  <NavBar />
  <div class="content">
    <Banner src="https://shop.webtoon.com/cdn/shop/files/231026_BigBanner_unOrdinary-_1_1600x.png?v=1700132887"
      title="" />
    <ListContainer title="Popular" :items="popularItems" />

  </div>
</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import Banner from '@/components/Banner.vue' // Check the import path here
import ListContainer from '@/components/ListContainer.vue'
import data from '@/assets/data.json'
import { defineComponent } from 'vue'

const popularItems = JSON.parse(JSON.stringify(data));

export default defineComponent({
  name: 'Index',
  components: {
    NavBar,
    Banner,
    ListContainer
  },
  setup() {
    return {
      popularItems
    }
  }
})
</script>

<style scoped>
/* .content {
  padding: 0 20px !important;
  width: 70% !important;
  margin: 0 auto !important;
} */

@media screen and (max-width: 800px) {
  .content {
    padding: 0 10px !important;
    width: 100% !important;
    margin: 0 auto !important;
  }
}

@media screen and (min-width: 800px) {
  .content {
    padding: 0 20px !important;
    width: 70% !important;
    margin: 0 auto !important;
  }

}
</style>
