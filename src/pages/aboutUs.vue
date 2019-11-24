<template>
    <div>
        <hr id="line">
        <h1 class="adjustment" id="headline">Om oss</h1>
        <p class="adjustment" id="info">Vi behandler akutte og langvarige plager/ubehag, men kan også hjelpe til med forebyggende tiltak.
            Du kan forvente en individuell samtale, undersøkelse, behandling og råd rettet mot dine behov.
            <br><br>Studentene har selv ansvar for
            konsultasjonene, men har alltid en erfaren veileder tilgjengelig. Du trenger ikke henvisning fra lege.</p>


        <h2 class="adjustment" id="headline2">Våre tilbud</h2>
        <ul id="tilbud" class="adjustment">
            <li>Akupunktur</li>
            <li>Osteopati</li>
            <li>Kostholdsveiledning</li>
            <li>Fysiologisk testlab</li>
        </ul><br>
        <img id="omStudentklinikken" src="../assets/omStudentklinikken.jpg">
         <p>"Du kan forvente behandling av høy kvalitet, hvor ditt behov står sentralt"</p>
         
         <h2 class="adjustment">Åpningstider</h2>
         <p class="adjustment" id="tider">Mandag - torsdag: 07:30 - 19:00<br>Fredag: 08:00 - 16:00</p>

         <h2 class="adjustment">Priser</h2>
         <p class="adjustment" id="tider">Første behandling: kr 300,-* <br> Videre behandling: kr 220,-* <br>
                                          Kostveiledning: GRATIS <br><br>
                                          <i>Gjelder ikke sommerklinikken for akupunktur og osteopati. <br><br>
                                          * Rabattert pris, gjelder kun honnører over 60 år, ungdom under 18 år, studenter og HK ansatte</i></p>

        <h2 class="adjustment">Adresse</h2>
         <p class="adjustment" id="tider">Prinsens gate 9, 0153 Oslo<br>Ligger i 3. etasje.<br><br>Henvend deg alltid i resepsjonen før konsultasjonen.</p>

         <h2 class="adjustment">Dine rettigheter som pasient</h2>
         <p class="adjustment" id="tider">Vi forholder oss til en rekke lover og regler som ivaretar dine pasientrettigheter. Våre studenter må samtykke
             til å følge dette lovverket før de starter sin kliniske praksisperiode.<br><br>Under følger en oversikt over de mest relevante bestemmelsen
             for deg som pasient ved Studentklinikken tilhørende Institutt for Helsevitenskap.</p>
            <hr>
            <br>
             <router-link to="/" class="smallBtn">Tilbake til forsiden</router-link>
             <br><br><br>

    </div>
</template>

<script>
export default {
    name: "aboutUs"
}
</script>

<style>
#omStudentklinikken {
    width: 300px;
}

#headline {
    font-size: 30px;
    margin-bottom: -10px;
}

#line {
    border: 1px solid yellowgreen;
}

#info {
    font-size: 15px;
    margin-right: 10px;
}

#tider {
    font-size: 15px;
    margin-top: -10px;
}

.adjustment {
text-align: left;
color: black;
margin-left: 10px;
}

#tilbud {
    margin-left: -10px;
    margin-top: -10px;
}

.smallBtn {
    background-color: yellowgreen;
    color: white;
    font-size: 15px;
    text-decoration: none;
    display: inline-block;
    height: 30px;
    width: 150px;
    padding-top: 10px;
    font-weight: bold;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 0px 0px 1px 0px black;  
}

</style>