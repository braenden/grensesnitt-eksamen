<template>
    <div id="loginContainer">
        <div id="loginBox"><br><br><br>
        <input type="text" name="username" v-model="input.username" placeholder="Username" class="inputStyle"/><br>
        <input type="password" name="password" v-model="input.password" placeholder="Password" class="inputStyle"/><br>
        <router-link id="loginButton" to="/staff" type="button" v-on:click="login()">Login</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        alert("The username and / or password is incorrect");
                    }
                } else {
                    alert("A username and password must be present");
                }
            }
        }
    }
</script>

<style>

#loginBox {
    background-color: white;
    display: inline-block;
    width: 360px;
    height: 400px;
    margin-top: 20px;
    box-shadow: 0px 0px 1px 0px black;
}

#loginContainer {
    background-color: rgb(120, 120, 120);
    position:fixed;
    left: 0px;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    box-shadow: 0px 0px 1px 0px black;
}

.inputStyle {
    width: 300px;
    height: 30px;
    margin-top: 10px;
}

#loginButton {
    text-decoration: none;
    display: inline-block;
    text-align: center;
    font-size: 20px;
    width: 120px;
    height: 35px;
    border-radius: 5px 5px 5px 5px;
    background-color: purple;
    color: white;
    font-weight: bold;
    padding-top: 10px;
    margin-top: 30px;
}
</style>