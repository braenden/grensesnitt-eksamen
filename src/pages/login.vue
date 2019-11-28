<template>
  <div id="loginContainer">
    <div id="loginBox" @keyup.enter="login">
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
      <button id="loginButton" to="/staff" type="button" v-on:click="login()">Login</button>
      <br />
      <br />
      <!-- <img id="johannes" src="../assets/johannesBrodwall.jpeg" /> -->
      <!-- Bilde av mannen selv -->
      <br />
      <br />
      <!-- <router-link to="/" id="smallBtn8">Tilbake til forsiden</router-link> -->
      <br />
      <br />
      <br />
    </div>
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
      if (this.input.username == "Gunnar" && this.input.password == "1234") {
        this.$router.replace({ name: "staff" });
      } else {
        alert("The username or password is incorrect");
      }
    }
  }
};
</script>

<style>
#johannes {
  height: 200px;
  width: 200px;
}

.inputStyle {
  width: 250px;
  height: 30px;
  margin-top: 10px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  font-weight: bold;
  box-shadow: 0px 0px 1px 0px black;
}

#loginButton {
  text-decoration: none;
  display: inline-block;
  text-align: center;
  font-size: 20px;
  width: 120px;
  height: 35px;
  border: none;
  border-radius: 5px 5px 5px 5px;
  background-color: darkgoldenrod;
  color: white;
  font-weight: bold;
  padding-top: 0px;
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