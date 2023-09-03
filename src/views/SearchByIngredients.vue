<script setup>
import MealList from '../components/MealList.vue'
import store from '../store'
import { onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const ingredient = computed(() => store.state.currentIngredient)
const meals = computed(() => store.state.mealsByIngredients)

onMounted(async () => {
  await store.dispatch('searchMealsByIngredients', route.params.ingredient)
})
</script>

<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">
      Meals for {{ ingredient?.strIngredient }}
    </h1>
  </div>

  <MealList :meals="meals" />
</template>

<style lang="scss" scoped></style>
