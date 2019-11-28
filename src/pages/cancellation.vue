<template>
  <div id="background">
    <hr id="line7" />
    <div id="container" @keyup.enter="sendMessage">
      <h1>Avbestilling av time</h1>
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
        placeholder="epost"
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
#background {
  margin-left: -10px;
  background-color: grey;
  width: 380px;
  height: 758px;
  margin-bottom: -10px;
}

#container {
  border-radius: 5px 5px 5px 5px;
  width: 360px;
  display: inline-block;
}

h1 {
  margin-bottom: 0px;
  color: white;
  padding-top: 0px;
  margin-top: 10px;
}

.inputForm {
  background-color: white;
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
  background-color: white;
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
  color: grey;
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
  border: 1px solid grey;
}

#smallBtn4 {
  background-color: white;
  color: lightseagreen;
  font-size: 15px;
  text-decoration: none;
  display: inline-block;
  height: 30px;
  width: 150px;
  padding-top: 10px;
  font-weight: bold;
  border: none;
  border-radius: 5px 5px 5px 5px;
}
</style>