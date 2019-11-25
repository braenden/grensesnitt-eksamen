<template>
    <div class="card-body">
        <input v-model="bookingForm.firstName" type="text" placeholder="Fornavn" class="form-control form-control-lg"><br>
        <input v-model="bookingForm.surName" type="text" placeholder="Etternavn"><br>
        <input v-model="bookingForm.email" type="text" placeholder="E-post"><br>
        <input v-model="bookingForm.phoneNumber" type="text" placeholder="Telefonnummer"><br>
        <select @change="changeTreatment($event)">
            <option value="null" select disabled>Velg</option>
            <option v-for="treatments in treatments" :value="treatments.name" v-bind:key="treatments.id">{{ treatments.name }}</option>
        </select><br>
        <input v-model="bookingForm.date" type="date" :show-day="false"><br>
        <input v-model="bookingForm.time" type="time" placeholder="Tid"><br>
        <button type="button" @click="sendBooking">Bestill time</button><br>
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
                {date: ""},
                {time: ""}
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
.div {
    margin: 2px;
    color: aqua;
    background-color: blue;
}
.button {
    background-color: blueviolet;
}
</style>