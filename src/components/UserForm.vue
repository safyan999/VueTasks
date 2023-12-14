<template>
    <div class="container">
      <h1>Signup Form</h1>
      <form @submit.prevent="submit">
      
        <div class="mydiv">
          <label>First Name</label>
          <input
            type="text"
            placeholder="safyan"
            name="firstName"
            id="firstName"
            v-model="form.firstname"
            required
          />
          <label>Last Name</label>
          <input
            type="text"
            placeholder="arain"
            name="lastName"
            id="lastName"
            required
            v-model="form.lastname"
          />
        </div>
  
    
        <div class="mydiv">
          <label>Email</label>
          <input
            type="email"
            placeholder="safyan@gmail.com"
            name="email"
            id="email"
            required
            v-model="form.email"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="rtgyhu"
            name="password"
            id="password"
            required
            v-model="form.password"
          />
        </div>
  
        <div class="mydiv">
          <label>Gender:</label>
          <input
            type="radio"
            value="Male"
            id="male"
            name="gender"
            required
            v-model="form.gender"
          />
          <label for="male">Male</label>
          <input
            type="radio"
            value="Female"
            id="female"
            name="gender"
            required
            v-model="form.gender"
          />
          <label for="female">Female</label>
          <input
            type="radio"
            value="Other"
            id="other"
            name="gender"
            required
            v-model="form.gender"
          />
          <label for="other">Other</label>
        </div>

        <div class="mydiv">
          <label>Education</label>
          <select v-model="form.education">
            <option>Matric</option>
            <option>Intermediate</option>
            <option>Bachelor</option>
          </select>
        </div>
        <div class="mydiv">
          <label><b>Skills</b></label>
          <input
            type="checkbox"
            value="VueJs"
            name="vueJs"
            v-model="form.skils"
          />
          <label>VueJs</label>
          <input
            type="checkbox"
            value="ReactJs"
            name="ReactJs"
            v-model="form.skils"
          />
          <label>ReactJs</label>
          <input
            type="checkbox"
            value="NodeJs"
            name="NodeJs"
            v-model="form.skils"
          />
          <label>NodeJs</label>
        </div>

        <button class="mybutton" v-on:click="submit" type="button">Submit</button>
        <button type="button" class="btn btn-primary">Primary Button</button>
  
        <ul style="list-style: none">
          <li v-for="item in error" :key="item" style="color: red">
            {{ item }} no valid
          </li>
        </ul>
      </form>
    </div>
  
    <!-- //modifiers -->
    <div>
      <label>modifer for number</label>
      <input type="text" v-model.lazy.trim.number="UserData" />
      <h1>User Input , with modifier proferties :{{ UserData }}</h1>
    </div>
  
    <FormDisplay :tableData="formDataArray" />
  </template>
  
  <script>
  import FormDisplay from "./FormDisplay.vue";
  export default {
    name: "UserForm",
    components: {
      FormDisplay,
    },
    data() {
      return {
        form: {
          firstname: "",
          lastname: "",
          gender: "",
          education: "",
          skils: [],
          email: "",
          password: "",
        },
        error: [],
        formDataArray: [],
        UserData: "",
      };
    },
    methods: {
      submit() {
        this.error = [];
        for (const item in this.form) {
          if (this.form[item] === "" || this.form[item].length === 0) {
            this.error.push(item);
          }
        }
        if (this.error.length === 0) {
          alert("Submitted");
          console.warn(this.form);
          this.formDataArray.push({
            ...this.form,
          });
          this.resetForm();
        }
        console.warn(this.form, this.error);
      },
      resetForm() {
        for (const key in this.form) {
          if (Array.isArray(this.form[key])) {
            this.form[key] = [];
          } else {
            this.form[key] = "";
          }
        }
      },
    },
  };
  </script>
  
  <style>
  /* Container Styles */
  .container {
    height: max-content;
    width: fit-content;
    align-items: center;
    margin: 10%;
    outline: dashed 1px black;
  }
  
  /* Form Styles */
  .mydiv {
    margin: 10px;
    padding: 10px;
  }
  
  .mybutton {
    width: 100px;
    height: fit-content;
    text-align: center;
    margin: 10px;
    padding: 10px;
    background-color: skyblue;
  }
  
  /* Display Data Styles */
  .mydata {
    background-color: rgb(169, 172, 164);
    margin: 10px;
    padding: 10px;
    height: auto;
    width: fit-content;
  }
  
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  thead th,
  tbody td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  
  /* Highlight header row */
  thead th {
    background-color: #f2f2f2;
  }
  
  /* Highlight alternate rows */
  tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  </style>
  