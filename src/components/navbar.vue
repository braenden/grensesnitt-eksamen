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
margin-left: 20px;
}

#studentHeader {
    font-size: 30px;
    margin-right: 40px;
}

#loginBtn {
    color: black;
    text-decoration: none;
}
#navbar {
    margin-top: -30px;
    display: flex;
    align-items: center;
}


</style>