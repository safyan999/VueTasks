import { createWebHistory, createRouter } from "vue-router";

import TestingApi from './components/TestingAPI.vue'
import HelloWorld from './components/HelloWorld.vue'
import UserForm from './components/UserForm.vue';
 import HomeComponents from './components/HomeComponents.vue';
import ToDoList from './components/ToDoList/index.vue'
import WeatherApp from './components/WeatherApp/index.vue'
 const routes=[
    {
        name:'UserForm',
        path:'/UserForm',
        component :UserForm
    },
    {
        name:'HelloWorld',
        path:'/HelloWorld',
        component :HelloWorld
    },
    {
        name:'HomeComponents',
        path:'/HomeComponents',
        component :HomeComponents
    },
    {
        name:'TestingApi',
        path:'/TestingApi',
        component :TestingApi
    },
    {
        name:'ToDoList',
        path:'/ToDoList',
        component :ToDoList
    },
    {
        name:'WeatherApp',
        path:'/WeatherApp',
        component :WeatherApp
    },
];
const router =createRouter(
  {  history:createWebHistory(),
    routes
  });

  export default router
