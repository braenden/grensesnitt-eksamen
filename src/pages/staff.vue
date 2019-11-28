<template>
    <div>
        <h1 id="sjuk_i_hue">Ansatt: Gunnar</h1>
        <div id="container5" class="containerz">
      <ul>
        <p id="firstObject22">Mandag</p>
        <br />
        <p class="opptattTime1">09:00 - 10:00<br>Erik  (Akupunktur)</p>
        <br />
        <p class="ledigTime1">10:00 - 11:00 - Ledig</p>
        <br />
        <p class="ledigTime1">11:00 - 12:00 - Ledig</p>
        <br />
        <p class="ledigTime1">12:00 - 13:00 - Ledig</p>
        <br />
        <p class="ledigTime1">13:00 - 14:00 - Ledig</p>
        <br />
        <p class="ledigTime1">14:00 - 15:00 - Ledig</p>
        <br />
        <p class="ledigTime1" id="lastObject22">15:00 - 16:00 - Ledig</p>
        <br />
      </ul>
    </div>
        <div class="containerz">
      <ul>
        <p id="firstObject22">Tirsdag</p>
        <br />
        <p class="ledigTime1">09:00 - 10:00 - Ledig</p>
        <br />
        <p class="ledigTime1">10:00 - 11:00 - Ledig</p>
        <br />
        <p class="ledigTime1">11:00 - 12:00 - Ledig</p>
        <br />
        <p class="opptattTime1">12:00 - 13:00<br> Hassan (Osteopati)</p>
        <br />
        <p class="opptattTime1">13:00 - 14:00<br> Marianne (Akupunktur)</p>
        <br />
        <p class="ledigTime1">14:00 - 15:00 - Ledig</p>
        <br />
        <p class="ledigTime1" id="lastObject22">15:00 - 16:00</p>
        <br />
      </ul>
    </div>
    <div class="containerz">
      <ul>
        <p id="firstObject22">Onsdag</p>
        <br />
        <p class="ledigTime1">09:00 - 10:00 - Ledig</p>
        <br />
        <p class="opptattTime1">10:00 - 11:00<br> Ole (Osteopati)</p>
        <br />
        <p class="ledigTime1">11:00 - 12:00 - Ledig</p>
        <br />
        <p class="ledigTime1">12:00 - 13:00 - Ledig</p>
        <br />
        <p class="ledigTime1">13:00 - 14:00 - Ledig</p>
        <br />
        <p class="ledigTime1">14:00 - 15:00 - Ledig</p>
        <br />
        <p class="ledigTime1" id="lastObject22">15:00 - 16:00 - Ledig</p>
        <br />
      </ul>
    </div>
    <div class="containerz">
      <ul>
        <p id="firstObject22">Torsdag</p>
        <br />
        <p class="ledigTime1">09:00 - 10:00 - Ledig</p>
        <br />
        <p class="ledigTime1">10:00 - 11:00 - Ledig</p>
        <br />
        <p class="ledigTime1">11:00 - 13:00 - Ledig</p>
        <br />
        <p class="ledigTime1">12:00 - 13:00 - Ledig</p>
        <br />
        <p class="opptattTime1">13:00 - 14:00<br> Petter (Fysiologisk testlab)</p>
        <br />
        <p class="ledigTime1">14:00 - 15:00 - Ledig</p>
        <br />
        <p class="ledigTime1" id="lastObject22">15:00 - 16:00 - Ledig</p>
        <br />
      </ul>
    </div>
    <div class="containerz">
      <ul>
        <p id="firstObject22">Fredag</p>
        <br />
        <p class="ledigTime1">09:00 - 10:00 - Ledig</p>
        <br />
        <p class="ledigTime1">10:00 - 11:00 - Ledig</p>
        <br />
        <p class="opptattTime1">11:00 - 12:00<br> Hanne (Osteopati)</p>
        <br />
        <p class="ledigTime1">12:00 - 13:00 - Ledig</p>
        <br />
        <p class="ledigTime1">13:00 - 14:00 - Ledig</p>
        <br />
        <p class="opptattTime1">14:00 - 15:00<br> Vilde (Kostholdsveiledning)</p>
        <br />
        <p class="ledigTime1" id="lastObject22">15:00 - 16:00 - Ledig</p>
        <br />
      </ul>
    </div>
        <div id="container10">
      <ul>
        <p id="firstObject22">Kunder</p>
        <br />
        <p class="kunder">Erik</p>
        <br />
        <p class="kunder">Ole</p>
        <br />
        <p class="kunder">Hanne</p>
        <br />
        <p class="kunder">Marianne</p>
        <br />
        <p class="kunder">Petter</p>
        <br />
        <p class="kunder">Vilde</p>
        <br />
        <p class="kunder">Hassan</p>
        <br />
        <p class="kunder">Kari</p>
        <br />
        <p class="kunder" id="lastObject22">Trygve</p>
        <br />
      </ul>
    </div>

    <router-link to="/login" id="logout">Logg ut</router-link>
    </div>
</template>
<script>
export default {
    name: "staff"
}
</script>
<style>

#logout{
position: absolute;
right: 80px;
top: 40px;
    background-color: salmon;
    color: white;
    font-size: 15px;
    text-decoration: none;
    display: inline-block;
    height: 30px;
    width: 150px;
    padding-top: 10px;
    font-weight: bold;
    border-radius: 5px 5px 5px 5px; 
}
#container5 {
    margin-left: -100px;
}
#sjuk_i_hue {
    color: black;
    position: absolute;
    top: 20px;
    left: 30px;
}
.containerz {
  left: -150px;
  position: relative;
    margin-left: -50px;
    margin-top: 40px;
    display: inline-block;
}
#container10 {
position: absolute;
    display: inline-block;
    margin-left: -150px;
    margin-top: 40px;
}
#firstKunder {
  border-radius: 5px 5px 0px 0px;
  color: white;
  background-color: black;
  display: inline-block;
  margin-left: 0px;
  height: 40px;
  width: 280px;
  font-weight: bold;
  padding-top: 20px;
  margin-top: -20px;
}
.kunder {
  color: white;
  background-color: grey;
  display: inline-block;
  margin-left: 0px;
  height: 43px;
  width: 280px;
  font-weight: bold;
  padding-top: 20px;
  margin-top: -30px;
  box-shadow: 0px 0px 1px 0px black;
}
.ledigTime1 {
  color: white;
  background-color:indianred;
  display: inline-block;
  margin-left: 0px;
  height: 60px;
  width: 280px;
  font-weight: bold;
  padding-top: 20px;
  margin-top: -20px;
}
.opptattTime1 {
  color: white;
  background-color: lightcoral;
  display: inline-block;
  margin-left: 0px;
  height: 60px;
  width: 280px;
  font-weight: bold;
  padding-top: 20px;
  margin-top: -20px;
}
#firstObject22 {
  border-radius: 5px 5px 0px 0px;
  color: white;
  background-color: black;
  display: inline-block;
  margin-left: 0px;
  height: 40px;
  width: 280px;
  font-weight: bold;
  padding-top: 20px;
  margin-top: -20px;
}
#lastObject22 {
  border-radius: 0px 0px 5px 5px;
}
</style>