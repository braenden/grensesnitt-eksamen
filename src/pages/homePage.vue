<template>
    <div>

      <ul>
      <!-- <router-link to="/"></router-link><br> -->
      <router-link to="/contact" id="contactBtn" class="bigBtn">Kontakt oss</router-link>
      <router-link to="/booking" id="bookingBtn" class="bigBtn">Reserver time</router-link><br>
      <router-link to="/cancellation" id="cancellationBtn" class="bigBtn">Avbestill time</router-link>
      <router-link to="/aboutUs" id="aboutUsBtn" class="bigBtn">Om oss</router-link><br>
      <router-link to="/yourReservations" id="yourReservationsBtn" class="bigBtn">Dine reservasjoner</router-link>
      <router-link to="/staff" id="staffBtn" class="bigBtn">Ansatt</router-link>

      </ul>
    </div>
</template>

<script>
export default {
    name: "homePage"
}
</script>

<style>

.bigBtn {
    font-size: 18px;
    color: white;
    text-decoration: none;
    display: inline-block;
    height: 45px;
    width: 300px;
    font-weight: bold;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 0px 0px 1px 0px black;
    margin-left: -40px;
    margin-top: 12px;
    padding-top: 30px;
    
}

#contactBtn {
background-color: salmon;
}

#bookingBtn {
background-color:royalblue;
}

#cancellationBtn {
    background-color: lightseagreen;
}

#aboutUsBtn {
    background-color: yellowgreen;
}

#yourReservationsBtn {
    background-color: orange;
}

#staffBtn {
    background-color: purple;
}

</style>