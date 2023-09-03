export function setSearchedMeals(state, meals = []) {
  state.searchedMeals = meals
}
export function setMealsByLetter(state, meals = []) {
  state.mealsByLetter = meals
}
export function setMealsByIngredients(state, meals = []) {
  state.mealsByIngredients = meals
}
export function setCurrentIngredients(state, ingredient = {}) {
  state.currentIngredient = ingredient
}
