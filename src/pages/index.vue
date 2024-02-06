<template>
  <v-alert v-if="alert" color="success" dark>
    This is a success alert.
  </v-alert>
  <v-container>
    <NavBar />
  </v-container>

</template>

<script lang="ts">
import NavBar from '@/components/NavBar.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Index',
  components: {
    NavBar
  },
  setup() {
    const alert = ref(true)
    return { alert }
  }
})

</script>