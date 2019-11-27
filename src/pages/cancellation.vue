<template>
  <div>
    <hr id="line7" />
    <div id="container" @keyup.enter="sendMessage">
      <input
        v-model="cancellationForm.firstName"
        type="text"
        placeholder="Fornavn"
        class="inputForm"
      />
      <br />
      <input
        v-model="cancellationForm.surname"
        type="text"
        placeholder="Etternavn"
        class="inputForm"
      />
      <br />
      <input
        v-model="cancellationForm.email"
        type="text"
        placeholder="Email addresse"
        class="inputForm"
      />
      <br />
      <textarea
        v-model="cancellationForm.message"
        type="text"
        placeholder="Din melding"
        class="messageForm"
      ></textarea>
      <br />
      <button type="button" @click="sendMessage" id="avbestill">Avbestill time</button>
    </div>
    <br />
    <br />
    <br />
    <router-link to="/" id="smallBtn4">Tilbake til forsiden</router-link>
  </div>
</template>
<script>
export default {
  name: "cancellation",
  data() {
    return {
      cancellationForm: {
        firstName: "",
        surName: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    sendMessage() {
      alert("Du har nå avbestilt din time hos studentklinikken");
    }
  }
};
</script>

<style scoped>
#container {
  background-color: rgb(120, 120, 120);
  border-radius: 5px 5px 5px 5px;
  width: 360px;
  height: 360px;
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
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

.messageForm {
  background-color: lightgray;
  border: none;
  font-size: 17px;
  text-decoration: none;
  display: inline-block;
  height: 100px;
  width: 300px;
  font-weight: bold;
  border-radius: 5px 5px 5px 5px;
  box-shadow: 0px 0px 1px 0px black;
  margin-top: 15px;
  font-family: "Avenir", Arial, Helvetica, sans-serif;
  color: rgb(120, 120, 120);
}

#avbestill {
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

input {
  color: rgb(120, 120, 120);
}

::placeholder {
  color: rgb(120, 120, 120);
  padding-left: 10px;
}

#line7 {
  border: 1px solid lightseagreen;
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