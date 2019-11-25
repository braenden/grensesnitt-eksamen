<template>
    <div><hr id="line4">
        <input v-model="bookingForm.firstName" type="text" placeholder="fornavn" class="inputForm"><br>
        <input v-model="bookingForm.surName" type="text" placeholder="etternavn" class="inputForm"><br>
        <input v-model="bookingForm.email" type="text" placeholder="e-post" class="inputForm"><br>
        <input v-model="bookingForm.phoneNumber" type="text" placeholder="telefonnummer" class="inputForm"><br>
        <select @change="changeTreatment($event)" class="options">
            <option>Velg behandling</option>
            <option  v-for="treatments in treatments" :value="treatments.name" v-bind:key="treatments.id">{{ treatments.name }}</option>
        </select><br>
        <input v-model="bookingForm.date" type="date" class="options"><br>
        <input v-model="bookingForm.time" type="time" class="options"><br>
        <button type="button" @click="sendBooking" id="bestill">Bestill time</button><br>
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
        }
    },
}
</script>
<style>

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
    margin-top: 12px;
}

::placeholder {
color: rgb(120,120,120)
}

.options {
    font-size: 15px;
    margin-top: 25px;
    width: 185px;
    height: 30px;
}

#bestill {
    text-align: center;
    font-size: 20px;
    margin-top: 30px;
    width: 150px;
    height: 50px;
    border-radius: 5px 5px 5px 5px;
    background-color: royalblue;
    color: white;
    border: none;
    font-weight: bold;
}

#line4 {
    border: 1px solid royalblue;
}
</style>