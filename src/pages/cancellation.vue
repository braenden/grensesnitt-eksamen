<template>
    <div>
        <input v-model="cancellationForm.firstName" type="text" placeholder="Fornavn"><br>
        <input v-model="cancellationForm.surname" type="text" placeholder="Etternavn"><br>
        <input v-model="cancellationForm.email" type="text" placeholder="Email addresse"><br>
        <textarea v-model="cancellationForm.message" type="text" placeholder="Din melding"></textarea><br>
        <button type="button" @click="sendMessage">Avbestill time</button>
    </div>
</template>
<script>
export default {
    name: "cancellation",
    data () {
        return {
            cancellationForm: [
                {firstName: ""},
                {surName: ""},
                {email: ""},
                {message: ""}
            ]
        }
    },
    methods: {
        sendMessage () {
            alert("Melding sent fra ")
        }
    }
}
</script>