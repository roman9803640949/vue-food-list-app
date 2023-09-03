<script setup>
import { defineProps } from 'vue'
import MealItem from '../components/MealItem.vue'

defineProps({
  meals: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="searchedMeals grid grid-cols-1 md:grid-cols-3 gap-5 p-8" v-if="meals.length">
    <MealItem v-for="meal of meals" :key="meal.idMeal" :mealItem="meal" />
  </div>
  <div class="p-10" v-else>
    <h3>No Meals Found</h3>
  </div>
</template>

<style lang="scss" scoped></style>
