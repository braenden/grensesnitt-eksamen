<template>
    <div>      
    <form name = "login">
    <div class ="login">
        <input v-if="username.name === 'username'" type ="text" placeholder ="username" name = userid><br>
        <input v-else="login.password === 'password'" type ="password" placeholder="password" name=pswrd><br>
         <input type="button" onclick="check(this.form)" value="Login"/>
         <router-link to="/" id="loginBtn" class="smallBtn">Guest</router-link>
        </div>
    </form>
    </div>
</template>
<script> 
    export default {
        name: "login",
        data () {
            return {
                login: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
        }
    }
</script>