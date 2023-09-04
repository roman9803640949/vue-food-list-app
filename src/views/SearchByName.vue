<script setup>
import { ref } from 'vue'
import { computed, onMounted } from 'vue'
import store from '../store'
import { useRoute } from 'vue-router'
import MealList from '../components/MealList.vue'
const keyword = ref('')
const route = useRoute()

const meals = computed(() => store.state.searchedMeals)

onMounted(async () => {
  keyword.value = route.params.name
  if (keyword.value) {
    await searchMeals()
  }
})

const searchMeals = async () => {
  await store.dispatch('searchMeals', keyword.value)
}

const clearKeyword = async () => {
  keyword.value = ''
  await store.dispatch('searchMeals', keyword.value)
}
</script>

<template>
  <div class="flex p-8 justify-center">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      v-model="keyword"
      placeholder="Search for meals"
    />
    <button
      class="p-2 px-3 rounded border-2 border-red-600 bg-red-500 hover:bg-red-700 text-white transition-colors"
      @click="searchMeals"
    >
      Search
    </button>
    <button
      class="ml-1 p-2 rounded border-2 border-red-600 hover:bg-red-700 text-red-600 hover:text-white transition-colors"
      @click="clearKeyword"
      v-show="keyword.length"
    >
      x
    </button>
  </div>
  <MealList :meals="meals" />
</template>

<style lang="scss" scoped></style>
