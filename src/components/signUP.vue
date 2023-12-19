<template>
    
    <div class="register">
        <h1>Sign UP</h1>
        <input type="text" placeholder="safyan" name="name"  v-model="name" >
        <input type="text" placeholder="user@email.com" name="gmail" v-model="email">
        <input type="text" placeholder="password" name="password" v-model="password">
        <button  v-on:click="signUP">
            SignUp
        </button>
    </div>
    
</template>
<script>
export default{
    name:"signUp",


    data(){
        return{
            name:'',
            email:'',
            password:''
        }

    },
    method:{
        signUP(){
            alert(this.password, this.email,this.name);
        }
    }
}
</script>
<style>
.register{
    align-items: center;
    width: 50%;
    text-align: center;
    border: 1px solid black;
    margin-left: 20%;
    margin-top: 50px;
    
}
.register input{
    display: block;
    margin:20px;
    padding: 20px;
    width:80%;
  




}
.register button{
    width: 40%;
    padding:5px;
    margin-bottom: 10px;
    background-color: aquamarine;
    font-size: larger;
    border-radius: 20px;
}

</style>