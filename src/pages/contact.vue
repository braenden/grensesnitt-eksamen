<template>
    <div>
        <hr id="line2">
        <h1 class="adjustment" id="headline6">Kontakt oss</h1>
        <p class="adjustment" id="info2">Telefon: 971 17 690<br>E-post: <a href="mailto:studentklinikken@kristiania.no?">studentklinikken@kristiania.no</a> <br></p>


        <h2 class="adjustment">Gi oss din tilbakemelding</h2>
        <h4 class="adjustment">Skjema for tilbakemelding</h4>
        <p class="adjustment" id="tilbakemeldingInfo">Her kan du gi tilbakemelding til klinikken. Vi setter pris på din tilbakemelding om positive ting eller ting som
            kan forbedres. Meldingen brukes til kvalitetsutbedring av våre tjenester. De blir behandlet av klinikkansvarlig innen for de ulike fagretningene.
            Vennligst ikke oppgi sensitive personopplysninger i tilbakemeldingen</p><br>
    
        <h4 class="adjustment">Skjema for klager</h4>
        <p class="adjustment" id="klageInfo">Klinikken driftes i henhold til relevant lovverk og med faglig kvalifisert personal, der pasientsikkerheten kontinuerlig vurderes.
            Dersom du har opplevd noe mangelfullt eller kritikkverdig ved Studentklinikken ønsker vi at du melder fra slik at vi kan utbedre avvikene.
            Klagen blir behandlet av programansvarlige innen for de ulike fagretningene. Vennligst ikke oppgi sensitive personopplysninger i tilbakemeldingen.</p>
            <hr>
            <br>
             <router-link to="/" id="smallBtn2">Tilbake til forsiden</router-link>
             <br><br><br>

    </div>
</template>

<script>
export default {
    name: "contact"
}
</script>

<style>

#headline6 {
    font-size: 30px;
    margin-bottom: -10px;
}

#line2 {
    border: 1px solid salmon;
}

#klageInfo {
    font-size: 15px;
    margin-top: -10px;
}

#tilbakemeldingInfo {
    font-size: 15px;
    margin-top: -10px;
}

.adjustment {
text-align: left;
color: black;
margin-left: 10px;
}

#smallBtn2 {
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

</style>