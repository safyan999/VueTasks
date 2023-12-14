<template>

<h1>
    This is Home components
</h1>
<button v-on:click="test('Button clicked called')">click me </button>
<input type="text" v-model="count" />
<h1>{{ count }}</h1>

<input type="email" placeholder="safyan@gmail.com" v-model="email" />
<input type="password" placeholder=" pass" v-model="pass" />
<button v-on:click="getdata()"> login</button>
<button v-on:click="signUP()">Signup</button>

<slot>
    
</slot>
</template>

<script>

export default {
    name: "HomeComponents",
    data() {
        return {
            count: 10,
            emailL: null,
            pass: null
        };
    },
    methods: {
        test() {
            this.count = this.count + 1;
        },
        getdata() {
            console.log(this.email, this.pass);
        },
        signUP() {
         
          
        }
    }
}
</script>

<style scoped>
h1 {
    color: rgb(182, 67, 0);
}
</style>
