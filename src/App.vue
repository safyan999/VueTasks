<template>
    <div id="app">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="navbar-brand" to="/">Home</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" to="/UserForm">UserForm</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/HelloWorld">HelloWorld</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/HomeComponents">HomeComponents</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/TestingApi">Testing API</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/ToDoList">ToDoList</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/WeatherApp">WeatherApp</router-link>
            </li>
          </ul>
        </div>
      </nav>
  
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>
  