<template>
    <h1>Using pros form Data display</h1>
    <div class="mydata">
      <table style="border: 1px solid black">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Education</th>
            <th>Skills</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(formData, index) in tableData" :key="index">
            <td>{{ formData.firstname }}</td>
            <td>{{ formData.lastname }}</td>
            <td>{{ formData.email }}</td>
            <td>{{ formData.password }}</td>
            <td>{{ formData.gender }}</td>
            <td>{{ formData.education }}</td>
            <td>{{ formData.skils.join(", ") }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "FormDisplay",
    props: {
      tableData: String,
    },
  };
  </script>
  