<template>
  <div id="loginContainer">
    <div id="loginBox">
      <br />
      <br />
      <br />
      <input
        type="text"
        name="username"
        v-model="input.username"
        placeholder="Username"
        class="inputStyle"
      />
      <br />
      <input
        type="password"
        name="password"
        v-model="input.password"
        placeholder="Password"
        class="inputStyle"
      />
      <br />
      <button
        @keyup.enter="login()"
        id="loginButton"
        type="button"
        v-on:click="login()"
      >
        Login
      </button>
    </div>
    <br />
    <br />
    <br />
    <router-link to="/" id="smallBtn8">Tilbake til forsiden</router-link>
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input: {
        username: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      if (this.input.username == "admin" && this.input.password == "password") {
        this.$router.replace({ name: "staff" });
      } else {
        alert("The username and / or password is incorrect");
      }
    }
  }
};
</script>

<style>
#loginBox {
  background-color: rgb(120, 120, 120);
  display: inline-block;
  width: 360px;
  height: 525px;
  margin-top: 20px;
  border-radius: 5px 5px 5px 5px;
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

#smallBtn8 {
  background-color: purple;
  color: white;
  font-size: 15px;
  text-decoration: none;
  display: inline-block;
  height: 30px;
  width: 150px;
  padding-top: 10px;
  font-weight: bold;
  border: none;
  border-radius: 5px 5px 5px 5px;
}
</style>
