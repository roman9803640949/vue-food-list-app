import apiClient from '../axiosClient'
export async function searchMeals({ commit }, keyword) {
  const { data } = await apiClient.get(`search.php?s=${keyword}`)
  commit('setSearchedMeals', data.meals)
}
export async function searchMealsByLetter({ commit }, letter) {
  const { data } = await apiClient.get(`search.php?f=${letter}`)
  commit('setMealsByLetter', data.meals)
}
export async function searchMealsByIngredients({ commit }, ingredient) {
  const { data } = await apiClient.get(`filter.php?i=${ingredient}`)
  commit('setMealsByIngredients', data.meals)
}
export async function storeCurrentIngredient({ commit }, ingredient) {
  commit('setCurrentIngredients', ingredient)
}
