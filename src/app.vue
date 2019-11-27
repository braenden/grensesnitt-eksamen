<template>
  <div id="app">
    <navbar id="naviPsycho"></navbar>
    <router-view></router-view>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </div>
</template>

<script>
import Navbar from "./components/navbar";
export default {
  name: "app",
  components: {
    navbar: Navbar
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  background-color: white;
}

#naviPsycho {
  text-align: center;
}
</style>