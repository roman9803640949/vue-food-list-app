<script setup>
import { ref, onMounted, computed } from 'vue'
import store from '../store/index'
import { useRouter } from 'vue-router'
import apiClient from '../axiosClient'
const keyword = ref('')
const ingredients = ref([])
const router = useRouter()

const openIngredient = (ingredient) => {
  store.dispatch('storeCurrentIngredient', ingredient)
  router.push({
    name: 'byIngredient',
    params: { ingredient: ingredient.strIngredient.trim('') }
  })
}

const computedIngredients = computed(() => {
  if (!computedIngredients.value) return ingredients.value
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  )
})

onMounted(async () => {
  const { data } = await apiClient.get('list.php?i=list')
  ingredients.value = data.meals
})
</script>

<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Ingredients</h1>
  </div>
  <div class="px-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 mb-3 w-full"
      placeholder="Search for Ingredients"
    />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
      <a
        href="#"
        @click.prevent="openIngredient(ingredient)"
        v-for="ingredient of computedIngredients"
        :key="ingredient.idIngredient"
        class="block bg-white rounded p-3 mb-3 shadow"
      >
        <h3 class="text-2xl font-bold mb-2">{{ ingredient.strIngredient }}</h3>
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
