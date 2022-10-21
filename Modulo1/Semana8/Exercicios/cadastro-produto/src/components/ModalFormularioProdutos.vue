<template>
  <div class="modal-formulario-produto">
      <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Cadastro de Produtos</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <Form @submit="salvar" :validation-schema="schema" v-slot="{errors}">
            <div class="mb-3">
                <label for="produto" class="form-label">Produto</label>
                <Field type="text" name="produto" class="form-control" id="produto" v-model="produtos.produto"/>
            </div>
            <div class="mb-3">
                <label for="valor" class="form-label">Valor</label>
                <Field type="number" name="valor" class="form-control" id="valor" v-model="produtos.valor"/>
                <span class="text-danger" v-show="errors.valor">{{ errors.valor}} </span>
            </div>
            
            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" :disabled="!habilitaBotao">Salvar</button>
        </Form>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>

import {Form, Field, defineRule} from 'vee-validate'

defineRule("valorValido", value => {
    if(value <= 0){
        return 'valor obrigatório'
    }
    return true;
});



export default {
    components:{
        Form,
        Field
    },
    data(){
        return{
            schema:{
                valor: "valorValido"
            },
            produtos: {
                produto: null,
                valor: null,
            
            },
            validations: null
        }
        
        },
        computed:{
            habilitaBotao(){
                return this.produtos.produto && this.produtos.valor  
            }
        },
        methods:{
            salvar(){
                console.log("salv")
                 this.$emit('produtoSalva', this.produtos)
                 this.limparCampos()
            },
            limparCampos(){
                this.produtos.produto = null
                this.produtos.valor = null
            },
            beforeMount(){
                this.validations = validations
            }
        }
}
</script>

<style>

</style>