<template>
  <div class="modal-formulario-movimentacao">
      <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Adicionar Movimentação</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <Form @submit="salvarMovimentacao">

         <div class="mb-3">
            <label for="titulo" class="form-label">Título</label>
            <Field type="titulo" class="form-control" id="titulo" name="titulo" v-model="movimentacao.titulo" :rules="validations.validarCampoObrigatiorio"/>
                <span class="error-menssage">
                    <ErrorMessage name="titulo"/>
                </span> 
        </div>

        <div class="mb-3">
            <label for="descricao" class="form-label">Descrição</label>
            <Field type="text" class="form-control" id="descricao"  name="descricao" v-model="movimentacao.descricao" :rules="validations.validarCampoObrigatiorio"/>
                <span class="error-menssage">
                    <ErrorMessage name="descricao"/>
                </span>  
        </div>

        <div class="mb-3">
            <label for="valor" class="form-label">Valor</label>
            <Field type="number" class="form-control" id="valor" name="valor"  v-model="movimentacao.valor" :rules="validations.validarMaiorQueZero"/>
                <span class="error-menssage">
                    <ErrorMessage name="valor"/>
                </span>
        </div>

        <div class="mb-3">
            <label for="tipo" class="form-label">Tipo</label>
           <Field class="form-select" name="tipo" as="select" v-model="movimentacao.tipo" :rules="validations.validarCampoObrigatiorio">
                <option selected disabled>Selecione uma opção</option>
                 <option v-for="tipo in tipos" :key="tipo" :value="tipo">{{ tipo }}</option>
            </Field>
            <span class="error-message">
                <ErrorMessage name="tipo"/>
            </span>
        </div>

        <div class="mb-3">
            <label for="data" class="form-label">Data</label>
            <Field type="date" class="form-control" id="data" name="data" v-model="movimentacao.data" :rules="validations.validarCampoObrigatiorio"/>
                <span class="error-menssage">
                    <ErrorMessage name="data"/>
                </span>       
        </div>

        <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" :disabled="!habilitaBotao">Salvar</button>
        </Form>
      </div>
      <div class="modal-footer">
          <!-- data-bs-dismiss="modal" é propriedade que fecha a tela do modal -->
        <!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import {Form, Field, ErrorMessage} from 'vee-validate'
import validations from '@/validations'


export default {
    components:{
        Form,
        Field,
        ErrorMessage
    },
    data(){
        return{
            movimentacao: {
                titulo: null,
                descricao: null,
                valor: null,
                tipo: null,
                data: null
            },
            tipos: null,
            validations: null
        }
        
        },
        computed:{
            habilitaBotao(){
                return this.movimentacao.titulo && this.movimentacao.descricao && this.movimentacao.valor && this.movimentacao.tipo && this.movimentacao.data
            }
        },
        methods:{
            salvarMovimentacao(){
                
                 this.$emit('movimentacaoSalva', this.movimentacao)
                 this.limparCampos()
            },
            limparCampos(){
                this.movimentacao.titulo = null
                this.movimentacao.descricao = null
                this.movimentacao.valor = null
                this.movimentacao.tipo = null
                this.movimentacao.data = null
            }
        },
        beforeMount(){
            this.tipos=["Despesas", "Movimentação"]
            this.validations=validations
    }
}
</script>

<style>

</style>