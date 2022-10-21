<template>
  <div class="calculadora">
      <div class="entra-altura">
          <p>Informe seu peso:</p>
          <input type="number" v-model="peso">
      </div>
      <div class="entrada-altura">
          <p>Informe sua altura</p>
          <input type="number" v-model="altura">
      </div>
      <button @click="calcular">Calcular</button>
      <p>Você está com {{ resultado }} e seu IMC é {{ imc }}</p>
  </div>
</template>

<script>
export default {
data(){
    return{
        peso: null,
        altura: null,
        imc: null,
        resultado:null
    }
},
methods: {
    calcular(){
       this.imc = this.peso / Math.pow(this.altura,2)

       if(this.imc < 18.5) this.resultado ='Baixo Peso'

        else if(18.5 <= this.imc <= 24.9) this.resultado ='Peso Normal'

        else if(25<= this.imc <= 29.9) this.resultado ='Sobrepeso'
            
        else if(30 <= this.imc <= 34.9) this.resultado ='Obesidade Grau I'
            
        else if(35 <= this.imc <= 39.9) this.resultado ='Obesidade Grau II'
            
        else if(this.imc >= 40) this.resultado ='Obesidade Grau III ou Morbido'
    }
}
}
</script>

<style>
button{
    margin-top: 15px;
    padding:10px;
    border: none;
    background-color: rgb(61, 163, 133);
    border-radius: 5px;
}
body{
    font-size: 15px;
}

input{
    border-radius: 5px;
    padding: 5px;
}
</style>