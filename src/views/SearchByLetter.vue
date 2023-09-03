<script setup>
import store from '../store'
import { computed, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'

import MealList from '../components/MealList.vue'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const route = useRoute()
const meals = computed(() => store.state.mealsByLetter)
const letter = computed(() => route.params.letter)
onMounted(async () => {
  await store.dispatch('searchMealsByLetter', route.params.letter)
})

watch(route, () => {
  store.dispatch('searchMealsByLetter', letter.value)
})
</script>

<template>
  <div class="flex justify-center gap-3 p-5">
    <router-link
      :to="{ name: 'byLetter', params: { letter } }"
      v-for="(letter, index) in letters"
      :key="index + letter"
      >{{ letter }}</router-link
    >
  </div>
  <MealList :meals="meals" />
</template>

<style lang="scss" scoped></style>
