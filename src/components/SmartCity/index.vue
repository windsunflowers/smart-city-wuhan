<template></template>

<script setup>
import { inject, onMounted } from 'vue'

import useBuildings from './hooks/useBuildings'

const { scene } = inject('$scene_map')

onMounted(async () => {
  // console.log(scene)

  const building_layer = await useBuildings()
  scene.addLayer(building_layer)
})
</script>

<style scoped></style>
