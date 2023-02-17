<template>
  <vee-form id="formCadastro" @submit="save" :validation-schema="schema" v-slot="{ errors }"> <!-- Ao submeter não quero um carregamento, só executa o metodo com o prevent -->
  <!-- vee-form não precisa de prevent -->
    <div class="row g-3">
      <div class="col-md-4"> <!-- ele já faz por grid, aqui ele ocupa 4 colunas, normalmente no vue tem 12 colunas o GRID-->
        <label for="nome">Nome</label>
        <vee-field name="nome" class="form-control" v-model="cadastro.nome"/>
        <span class="text-danger" v-show="errors.nome">{{ errors.nome }}</span>
        <!-- <input type="text" class="form-control" v-model="reserva.nome" riquered> -->
        <!-- Requered não aceita se o input estiver vazio -->
      </div>

      <div class="col-3">
        <label for="">Data Nascimento</label>
        <vee-field name="dataNascimento" type ="date" class="form-control" v-model="cadastro.dataNascimento"/>
        <span class="text-danger" v-show="errors.dataNascimento">{{ errors.dataNascimento }}</span>
        <!-- <input type="date" class="form-control" v-model="reserva.dataReserva"> -->
      </div>
   

      <div class="col-sm-12">
        <button type="submit" class="btn btn-primary" style="margin-right: 15px">Save</button>
        <!-- não precisa do v-on:click="save" por causa do form submit lá em cima -->
      </div>
      
    </div>
    </vee-form>
</template>

<script>
    import { Form, Field, defineRule } from 'vee-validate';
    export default {
        components: {
            'vee-form': Form,
            'vee-field': Field
        },
        data() {
            defineRule("required", value => {
                if (!value || value.length === 0) {
                    return "Campo obrigatório"
                }
                return true;
            });
    defineRule("nomeCompleto", value => {
      let nomeCompleto = value.split(' ')
      if (nomeCompleto.length < 2) { 
                    return "Nome completo"
                }
                return true;
            });
    defineRule("validaData", value => {
                if (new Date(value) > new Date()) {
                    return "Data invalida"
                }
                return true;
            });
            const schema = {
                nome: "required|nomeCompleto",
                dataNascimento: "required|validaData"
            }
            return {
                schema,
                cadastro: {}
            }
        },
        methods: {
            save() {       
                this.$store.commit('cadastroModule/save', this.cadastro)
                this.cadastro = {};
                document.getElementById('formCadastro').reset();
                // this.$store.success('Cadastro realizado!', {
                //     position: 'top'
                // })
            },
            clear() {
                this.reserva = {};  
            }
        }
    }
</script>

