import Vue from 'vue'
import Router from 'vue-router'
import ClothingCreate from "./views/Clothings/ClothingCreate";
import ClothingUpdate from "./views/Clothings/ClothingUpdate";
import ClothingOverView from "./views/Clothings/ClothingOverView";
import Home from "./views/Clothings/Home";

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
          path: '/',
          name: 'Home',
          component: Home
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
