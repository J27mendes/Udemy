<template>
  <div id="app">
      <h1>Problema de Monty Hall</h1>
      <div class="form">
          <div v-if="!started">
              <label for="portsAmount">Quantas portas?</label>
              <input type="text" id="portsAmount" size="3" v-model.number="portsAmount">
          </div>
          <div v-if="!started">
              <label for="selectedPort">Qual porta está premiada?</label>
              <input type="text" id="selectedPort" size="3" v-model.number="selectedPort">
          </div>
          <button v-if="!started" @click="started = true">Iniciar</button>
          <button v-if="started" @click="started = false">Reiniciar</button>
      </div>
      <div class="doors" v-if="started">
            <div v-for="i in portsAmount" :key="i">
                <GameDoor :hasGift="i == selectedPort" :number="i"/> 
            </div>
      </div>
      <!--<GameDoor number="1" :hasGift="false"/>-->
  </div>
</template>

<script>
import GameDoor from './components/ChosenDoor.vue'

export default {
    name:"App",
    components: { GameDoor },
        data: function(){
        return {
            started: false,
            portsAmount: 3,
            selectedPort: null
        }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
}
body {
    color: #fff;
    background: linear-gradient(to right, rgb(21, 153, 87), rgb(21, 254, 03));
}
#app {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#app h1 {
    border: 1px solid #000;
    border-radius: 10px;
    border-right: #fff ridge 3px;
    border-top: #fff ridge 3px;
    background-color: #0004;
    padding: 20px;
    margin-bottom: 68px;
}
.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
}
.form, .form input, .form button {
    display: inline-flex;
    margin: 10px;
    font-size: 2rem;
    align-items: center;
    text-align: center;
    border-radius: 7px;
    cursor: pointer;
}
.doors {
    align-self: stretch;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

</style>