<template>
    <div id="navbar"> 
      <img id="kristianiaLogo" src="../assets/kristiania.jpeg">
      <strong id="studentHeader">Studentklinikken</strong>
      <router-link to="/login" id="loginBtn">Logg inn</router-link>
    </div>
</template>

<style>
#kristianiaLogo {
width: 60px;
height: 60px;
margin-left: 0px;
}

#studentHeader {
    font-size: 30px;
    margin-right: 20px;
    color: black;
}

#loginBtn {
    color: black;
    text-decoration: none;
    font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
}
#navbar {
    margin-top: -40px;
    display: flex;
    align-items: center;
}


</style>