<script setup>
import apiClient from '../axiosClient'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import MediaButton from '../components/MediaButton.vue'
const meal = ref({})
const route = useRoute()

onMounted(async () => {
  const { data } = await apiClient.get(`lookup.php?i=${route.params.id}`)
  meal.value = data.meals[0] || {}
})

const keyIngredients = computed(() => {
  const ingredientArray = []
  for (let i = 1; i <= 20; i++) {
    const ingredientKey = `strIngredient${i}`
    const measureKey = `strMeasure${i}`
    const ingredient = meal.value[ingredientKey]?.trim()
    const measure = meal.value[measureKey]?.trim()
    if (ingredient) {
      ingredientArray.push({ ingredient, measure })
    }
  }
  return ingredientArray
})
</script>

<template>
  <div class="p-8 max-w-[800px] mx-auto">
    <h1 class="text-5xl font-bold mb-5">
      {{ meal.strMeal }}
    </h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-[100%]" />
    <div class="flex gap-5 p-5">
      <div><strong class="font-bold">Category:</strong> {{ meal.strCategory }}</div>
      <div><strong class="font-bold">Area:</strong> {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags:</strong> {{ meal.strTags }}</div>
    </div>
    <div class="m-3">
      <h2 class="text-2xl mb-2 font-semibold">Instructions</h2>
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grids-cols-3 gap-5 p-5">
      <div>
        <h2 class="text-2xl mb-2 font-semibold">Ingredients</h2>
        <ul>
          <li v-for="(item, index) in keyIngredients" :key="index" class="grid grid-cols-2">
            <div>{{ index + 1 }} . {{ item.ingredient }}</div>
            <div><span class="font-semibold">Measures:</span> {{ item.measure }}</div>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-4">
      <MediaButton
        styleClass="px-3 py-2 mx-2 rounded border-2 border-red-600 bg-red-500 hover:bg-red-700 text-white transition-colors"
      >
        <template #btnText>Go to Youtube</template>
      </MediaButton>
      <MediaButton
        :href="meal.strSource"
        styleClass="px-3 py-2 rounded border-2 border-indigo-600 bg-indigo-500 hover:bg-indigo-700 text-white transition-colors"
      >
        <template #btnText> View Original Source </template>
      </MediaButton>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
