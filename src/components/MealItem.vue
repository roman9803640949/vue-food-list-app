<script setup>
import { defineProps } from 'vue'
import MediaButton from './MediaButton.vue'
defineProps({
  mealItem: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="basis-1/3 p-1 pb-5 mb-2 bg-white shadow rounded-xl">
    <img
      :src="mealItem.strMealThumb"
      :alt="mealItem.strMeal"
      class="rounded-t-xl w-full object-cover h-64"
    />
    <h3 class="font-bold mb-3 p-3">
      {{ mealItem.strMeal }}
    </h3>
    <div>
      <MediaButton
        :href="mealItem.strYoutube"
        styleClass="px-3 py-2 mx-2 rounded border-2 border-red-600 bg-red-500 hover:bg-red-700 text-white transition-colors"
      >
        <template #btnText>Go to Youtube</template>
      </MediaButton>
      <router-link
        :to="{ name: 'mealDetails', params: { id: mealItem.idMeal } }"
        class="px-3 py-2 rounded border-2 border-green-600 hover:bg-green-500 hover:text-white transition-colors"
      >
        View
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
