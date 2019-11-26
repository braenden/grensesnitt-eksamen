<template>
    <div><hr id="line4">
    <div id="container">
    <h1>Reservasjon av time</h1>
        <input v-model="bookingForm.firstName" type="text" placeholder="fornavn" class="inputForm"><br>
        <input v-model="bookingForm.surName" type="text" placeholder="etternavn" class="inputForm"><br>
        <input v-model="bookingForm.email" type="text" placeholder="e-post" class="inputForm"><br>
        <input v-model="bookingForm.phoneNumber" type="text" placeholder="telefonnummer" class="inputForm"><br><br>
        <select @change="changeTreatment($event)" class="options" id="selectBtn">
            <option>velg behandling</option>
            <option  v-for="treatments in treatments" :value="treatments.name" v-bind:key="treatments.id">{{ treatments.name }}</option>
        </select><br>
        <input v-model="bookingForm.date" type="date" class="options"><br>
        <input v-model="bookingForm.time" type="time" class="options"><br>
        <button type="button" @click="sendBooking" id="bestill">Bestill time</button><br><br>
        </div><br>
        
        <div id="container2">
            <ul>
                <p class="ledigTime">08:00 - 09:00 - Ledig</p><br>
                <p class="opptattTime">09:00 - 10:00 - Opptatt</p><br>
                <p class="ledigTime">10:00 - 11:00 - Ledig</p><br>
                <p class="ledigTime">12:00 - 13:00 - Ledig</p><br>
                <p class="ledigTime">13:00 - 14:00 - Ledig</p><br>
                <p class="ledigTime">14:00 - 15:00 - Ledig</p><br>
                <p class="opptattTime">15:00 - 16:00 - Opptatt</p><br>
                <p class="opptattTime">16:00 - 17:00 - Opptatt</p><br>
            </ul>
        </div>
             <router-link to="/" id="smallBtn4">Tilbake til forsiden</router-link>
             <br><br><br>

    </div>
</template>
<script>
export default {
    name: "booking",
    data () {
        return {
            bookingForm: [
                {firstName: "", id: 1},
                {surName: "", id: 2},
                {email: "", id: 3},
                {phoneNumber: "", id: 4},
                {date: "", id: 5},
                {time: "", id: 6}
            ],
                treatments: [
                {name: "Akupunktur"},
                {name: "Osteopati"},
                {name: "Kostholdsveiledning"},
                {name: "Fysiologisk lab"}
            ],
                days: [
                    {name: "Mandag"},
                    {name: "Tirsdag"},
                    {name: "Onsdag"},
                    {name: "Torsdag"},
                    {name: "Fredag"}
                ]
        }
    },
    methods: {
        sendBooking () {
            alert("Du har nå bestilt time hos studentklinikken");
        },
        changeTreatmeants (event) {
            this.selectedTreatment = event.target.options
            event.target.options.selectedIndex.text
        },
        changeDays (event) {
            this.selectedDay = event.target.options
            event.target.options.selectedIndex.text
        }
    }
}
</script>
<style>

#container {
    background-color: rgb(120,120,120);
    border-radius: 5px 5px 5px 5px;
    width: 360px;
}

h1 {
    margin-bottom: 0px;
    color: white;
    padding-top: 10px;
    margin-top: 10px;
}

.inputForm {
    background-color: lightgray;
    border: none;
    font-size: 17px;
    text-decoration: none;
    display: inline-block;
    height: 30px;
    width: 300px;
    font-weight: bold;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 0px 0px 1px 0px black;
    margin-top: 15px;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
}

.ledigTime {
    color: white;
    background-color: grey;
    display: inline-block;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 0px 0px 1px 0px black;
    margin-left: -40px;
    height: 40px;
    width: 360px;
    font-weight: bold;
    padding-top: 20px;
    margin-top: -20px;
}

.opptattTime {
    color: white;
    background-color: lightcoral;
    display: inline-block;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 0px 0px 1px 0px black;
    margin-left: -40px;
    height: 40px;
    width: 360px;
    font-weight: bold;
    padding-top: 20px;
    margin-top: -20px;
}

::placeholder {
color: rgb(120,120,120);
padding-left: 10px;
}

.options {
    padding-left: 10px;
    font-size: 15px;
    margin-top: 20px;
    width: 185px;
    height: 30px;
    border: none;
    border-radius: 5px 5px 5px 5px;
    background-color: lightgray;
    box-shadow: 0px 0px 1px 0px black;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-weight: bold;
}

#adjustment2 {
    text-align: left;
    color: black;
    margin-left: 10px;
}

#selectBtn {
    height: 30px;
    width: 195px;
}

select {
    color: rgb(120,120,120);
}

input {
    color: rgb(120,120,120);
}

#bestill {
    text-align: center;
    font-size: 20px;
    margin-top: 30px;
    width: 150px;
    height: 50px;
    border-radius: 5px 5px 5px 5px;
    background-color: white;
    color: lightcoral;
    border: none;
    font-weight: bold;
}

#line4 {
    border: 1px solid royalblue;
}

#smallBtn4 {
    background-color: royalblue;
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