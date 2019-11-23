<template>
  <div id="app">
    <meta name="viewport" content="width=device-width, initial-scale=0.86, maximum-scale=3.0, minimum-scale=0.86">
    <navbar></navbar>
    <router-view></router-view>

      <ul>
      <router-link to="/">Home</router-link><br>
      <router-link to="/contact">Contact</router-link><br>
      <router-link to="/booking">Booking</router-link><br>
      <router-link to="/cancellation">Cancellation</router-link><br>
      <router-link to="/aboutUs">About us</router-link><br>
      <router-link to="/yourReservations">See your reservations</router-link>
      </ul>

  </div>
</template>

<script>
import Navbar from './components/navbar'
export default {
  name: 'app',
  components: {
  'navbar': Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: white;
}
</style>