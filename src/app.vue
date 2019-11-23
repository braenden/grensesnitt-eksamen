<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/contact">Contact</router-link></li>
      <li><router-link to="/booking">Booking</router-link></li>
      <li><router-link to="/cancellation">Cancellation</router-link></li>
      <li><router-link to="/aboutUs">About us</router-link></li>
      <li><router-link to="/yourReservations">See your reservations</router-link></li>
      </ul>
    <img src="./assets/johannesBrodwall.jpeg">
    <router-view></router-view>
  </div>
</template>


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