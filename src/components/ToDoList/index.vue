<template>
    <div class="container">
      <h1 class="text-center mt-4">My Vue Todo APP</h1>
      <div class="d-flex">
        <input
          v-model="task"
          v-on:keyup.enter="buttonSubmit"
          class="form-control"
          type="text"
          placeholder="Enter todo task"
        />
     
        <button
          type="button"
          @click="buttonSubmit"
          class="btn btn-warning round-0"
        >
          Submit
        </button>
      </div>
  
      <table class="table table-bordered mt-5">
        <thead>
          <tr >
            <th scope="col">Task</th>
            <th scope="col">Status</th>
            <th scope="col" class="text-center">#</th>
            <th scope="col" class="text-center">#</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="index">
            <td>
              <span :class="{ 'line-through': task.status === 'Finished' }">
                {{ task.name }}</span
              >
            </td>
            <td>
              <span
                class="pointer noselect"
                v-on:click="changeStatus(index)"
                :class="{
                  'text-danger': task.status === 'To-Do',
                  'text-success': task.status === 'Finished',
                  'text-warning': task.status === 'In-Progess',
                }"
              >
                {{ task.status }}
              </span>
            </td>
            <td
              class="text-center"
              :class="{ noselect: task.status == 'Finished' }"
            >
              <span @click="editRow(index)">
                <i class="fa fa-pen red-color"></i>
              </span>
            </td>
            <td class="text-center">
              <span v-on:click="deleteRow(index)">
                <i class="fa fa-trash red-color"> </i>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: "ToDoList",
    data() {
      return {
        tasks: [
          {
            name: "Add New Task upper",
            status: "To-Do",
          },
        ],
        task: "",
        availableStatuses: ["To-Do", "In-Progess", "Finished"],
        counter: 0,
        editTask: null,
      };
    },
    methods: {
      buttonSubmit() {
        if (this.task.length === 0) return alert(" Task is empty");
        if (this.editTask === null) {
          this.tasks.push({
            name: this.task,
            status: this.availableStatuses[0],
          });
        } else {
          this.tasks[this.editTask].name = this.task;
          this.editTask = null;
        }
        this.task = "";
      },
      changeStatus(index) {
        let newIndex = this.availableStatuses.indexOf(this.tasks[index].status);
        if (++newIndex > 2) newIndex = 0;
  
        this.tasks[index].status = this.availableStatuses[newIndex];
      },
      editRow(index) {
        this.task = this.tasks[index].name;
        this.editTask = index;
      },
      deleteRow(index) {
        this.tasks.splice(index, 1);
      },
    },
  };
  </script>
  
  <style>
  .pointer {
    cursor: pointer;
  }
  .noselect {
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
  }
  .line-through {
    text-decoration: line-through;
  }
  </style>
  