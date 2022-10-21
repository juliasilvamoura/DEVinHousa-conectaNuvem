<template>
  <div class="formulario-cadastro-produto">
      <Form @submit="submeter-formulario">
          <div class="nome-produto">
              <p>Insira o nome do produto:</p>
              <Field id="nome" name="nome" type="text" v-model="produto.nome" :rules="validations.validarNomeProduto"/>
              <div class="erro">
                  <span>
                      <ErrorMessage name="nome"/>
                  </span>
                  
              </div>
          </div>
           <div class="valor-produto">
              <p>Insira o valor do produto:</p>
              <Field id="valor" name="valor" type="number" v-model="produto.valor" :rules="validations.validarValorProduto"/>
              <div class="erro">
                  <span>
                      <ErrorMessage name="valor"/>
                  </span>
                  
              </div>
          </div>
          <div class="botao-submeter">
              <button type="button" @click="submeterProduto" :disabled="!habilitaBotao">Submeter</button>
          </div>
      </Form>
  </div>
</template>

<script>

import { Form, Field, ErrorMessage } from 'vee-validate'
import Validations from '@/validations'

export default {
    data(){
        return{
            produto:{
                nome: null,
                valor:null
            },
            validations: null
        }
    },
    computed:{
        habilitaBotao(){
            return this.produto.nome && this.produto.valor
        }
    },
    components:{
        Form,
        Field,
        ErrorMessage
    },
    methods:{
        submeterProduto(){
            console.log(this.produto)
        }
        
    },
    beforeMount(){
        this.validations=Validations
    }
    
}
</script>

<style>

</style>