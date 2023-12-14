<template>
    <button varient="danger">Hello</button>
    <div class="myclass">
      <ul v-for="item in myarray" :key="item.id">
        <li>{{ item.id }}</li>
        <li>{{ item.email }}</li>
        <li>{{ item.first_name }}</li>
        <li>{{ item.last_name }}</li>
        <li><img :src="item.avatar" /></li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "TestingApi",
    data() {
      return {
        myarray: [],
      };
    },
    async mounted() {
      let result = await axios.get("https://reqres.in/api/users?page=1");
      console.warn("Api getted", result.data.data);
      this.myarray = result.data.data;
    },
  };
  </script>
  
  <style>
  .myclass {
    width: max-content;
  }
  .myclass li {
    display: flex;
    display: inline;
    padding: 10px;
    margin: 10px;
  }
  ul {
    border: 1px solid black;
    padding: 20px;
    margin: 10px;
  }
  </style>
  