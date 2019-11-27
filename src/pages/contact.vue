<template>
    <div>
        <hr id="line2">
        <h1 class="adjustment" id="headline6">Kontakt oss</h1>
        <p class="adjustment" id="info2">Telefon: 971 17 690<br>E-post: <a href="mailto:studentklinikken@kristiania.no?">studentklinikken@kristiania.no</a> <br></p>

        <h2 class="adjustment">Tilbakemeldinger</h2>
        <p class="adjustment" id="tilbakemeldingInfo">Har du en tilbakemelding, kan du gjerne sende oss en mail på dette. Vi setter vi pris på både positive ting eller ting som
            kan forbedres. Det kan brukes til kvalitetsutbedring av våre tjenester. og de blir behandlet av klinikkansvarlig innen de ulike fagretningene.
            Vennligst ikke oppgi sensitive personopplysninger i tilbakemeldingen</p><br>
    
        <h2 class="adjustment">Hvis du ønsker å klage på noe</h2>
        <p class="adjustment" id="klageInfo">Klinikken driftes i henhold til relevant lovverk og med faglig kvalifisert personal, der pasientsikkerheten kontinuerlig vurderes.
            Dersom du har opplevd noe mangelfullt eller kritikkverdig ved Studentklinikken ønsker vi at du sender oss mail på dette, slik at vi kan utbedre avvikene.
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

#info2 {
    margin-bottom: 40px;
}

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