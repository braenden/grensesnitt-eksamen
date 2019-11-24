<template>
    <div>
        <h1 class="adjustment" id="headline">Om oss</h1>
        <hr class="line" id="lines">
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
    margin-left: 20px;
    font-size: 35px;
    margin-bottom: 10px;
}

#info {
    font-size: 15px;
    margin-left: 10px;
    margin-right: 10px;
}

#headline2 {
    margin-left: 10px;
}

.adjustment {
text-align: left;
color: black;
}

#headline {
    margin-left: 10px;
}

#tilbud {
    margin-left: -10px;
    margin-top: -10px;
}

</style>