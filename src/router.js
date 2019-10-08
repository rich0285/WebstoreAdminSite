import Vue from 'vue'
import Router from 'vue-router'
import ClothingCreate from "./views/Clothings/ClothingCreate";
import ClothingUpdate from "./views/Clothings/ClothingUpdate";
import ClothingOverView from "./views/Clothings/ClothingOverView";

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
      {
      path: '/clothing/Create',
      name: 'Clothing-create',
      component: ClothingCreate
    },

    {
      path: '/Clothing-update/:id',
      name: 'Clothing-update',
      component: ClothingUpdate
    },
    {
      path: '/clothings',
      name: 'AllClothings',
      component: ClothingOverView
    },

  ]
})
