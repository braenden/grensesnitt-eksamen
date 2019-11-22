<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/user/123">User</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    <img alt="Vue logo" src="./assets/johannesBrodwall.jpeg">
    <router-view></router-view>
  </div>
</template>

<!--
<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

-->

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
