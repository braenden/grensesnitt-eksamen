<template>
    <div>
        <hr id="line5">
        <h1 id="h11">Dine reservasjoner</h1>
        <br>
        <div>
            <ul>
                <p class="reservertTime" id="firstie11">09:00 - 10:00, torsdag 07.09.2020</p><br>
                <p class="reservertTime">15:00 - 16:00, mandag 27.11.2020</p><br>
                <p class="reservertTime" id="lastie11">16:00 - 17:00, tirsdag 03.01.2022</p>
            </ul>
        </div>

        <h1 id="h12">Dine tidligere timer</h1>
        <br>
             <div>
            <ul>
                <p class="tidligereTime" id="firstie11">08:00 - 09:00, tirsdag 19.01.2019</p><br>
                <p class="tidligereTime">10:00 - 11:00, tirsdag 28.02.2018</p><br>
                <p class="tidligereTime">12:00 - 13:00, onsdag 22.01.2018</p><br>
                <p class="tidligereTime">13:00 - 14:00, fredag 19.12.2017</p><br>
                <p class="tidligereTime" id="lastie11">14:00 - 15:00, fredag 03.07.2017</p><br>
            </ul>
        </div>
             <router-link to="/" id="smallBtn5">Tilbake til forsiden</router-link>
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

#h11 {
    margin-bottom: 0px;
    color: black;
    padding-top: 10px;
    margin-top: 10px;
}

.tidligereTime {
    color: white;
    background-color: grey;
    display: inline-block;
    margin-left: -40px;
    height: 40px;
    width: 360px;
    font-weight: bold;
    padding-top: 20px;
    margin-top: -30px;
}

.reservertTime {
    color: white;
    background-color: lightcoral;
    display: inline-block;
    margin-left: -40px;
    height: 40px;
    width: 360px;
    font-weight: bold;
    padding-top: 20px;
    margin-top: -30px;
}

#firstie11 {
border-radius: 5px 5px 0px 0px;
}

#lastie11{
border-radius: 0px 0px 5px 5px;
}

#line5 {
    border: 1px solid orange;
}

#smallBtn5 {
    background-color: orange;
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

#h12 {
    color: black;
}
</style>