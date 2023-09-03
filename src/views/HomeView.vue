<script setup>
import { onMounted, ref } from 'vue'
import apiClient from '../axiosClient'
import MealList from '../components/MealList.vue'

const meals = ref([])
onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    const { data } = await apiClient.get('random.php')
    meals.value.push(...data.meals)
  }
})
</script>

<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1 class="text-4xl font-bold mb-4">Hot Picks Today</h1>
  </div>
  <MealList :meals="meals" />
</template>

<style lang="scss" scoped></style>
