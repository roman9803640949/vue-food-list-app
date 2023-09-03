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
</script>

<template>
  <div class="flex p-8 justify-center">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      v-model="keyword"
      @change="searchMeals"
      placeholder="Search for meals"
    />
  </div>
  <MealList :meals="meals" />
</template>

<style lang="scss" scoped></style>
