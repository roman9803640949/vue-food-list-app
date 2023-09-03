import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchByIngredients from '../views/SearchByIngredients.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import SearchByLetter from '../views/SearchByLetter.vue'
import SearchByName from '../views/SearchByName.vue'
import MealDetails from '../views/MealDetails.vue'
import IngredientsList from '../views/IngredientsList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          path: '/by-letter/:letter?',
          name: 'byLetter',
          component: SearchByLetter
        },
        {
          path: '/ingredients',
          name: 'ingredients',
          component: IngredientsList
        },
        {
          path: '/by-ingredients/:ingredient?',
          name: 'byIngredient',
          component: SearchByIngredients
        },
        {
          path: '/by-name/:name?',
          name: 'byName',
          component: SearchByName
        },
        {
          path: '/meal/:id',
          name: 'mealDetails',
          component: MealDetails
        }
      ]
    }
  ]
})

export default router
