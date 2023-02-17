<template>
  <vee-form @submit="save" :validation-schema="schema" v-slot="{ errors }"> 
    <!-- Ao submeter não quero um carregamento, só executa o metodo com o prevent -->
  <!-- vee-form não precisa de prevent -->
    <div class="row g-3">
      <div class="col-md-4"> <!-- ele já faz por grid, aqui ele ocupa 4 colunas, normalmente no vue tem 12 colunas o GRID-->
        <label for="nome">Nome</label>
        <vee-field name="nome" class="form-control" v-model="reserva.nome"/>
        <span class="text-danger" v-show="errors.nome">{{ errors.nome }}</span>
        <!-- <input type="text" class="form-control" v-model="reserva.nome" riquered> -->
        <!-- Requered não aceita se o input estiver vazio -->
      </div>

      <div class="col-3">
        <label for="">Data Reserva</label>
        <vee-field name="dataReserva" type ="date" class="form-control" v-model="reserva.dataReserva"/>
        <span class="text-danger" v-show="errors.dataReserva">{{ errors.dataReserva }}</span>
        <!-- <input type="date" class="form-control" v-model="reserva.dataReserva"> -->
      </div>

      <div class="col-3">
        <label for="">Hora de Entrada</label>
        <vee-field name="horaEntrada" type="time" class="form-control" v-model="reserva.horaEntrada"/>
        <span class="text-danger" v-show="errors.horaEntrada">{{ errors.horaEntrada }}</span>
        <!-- <input type="time" class="form-control" v-model="reserva.horaEntrada"> -->
      </div>

      <div class="col-2">
        <label for="">Qtd. Horas</label>
        <vee-field name="qtdHoras" type="number" class="form-control" v-model="reserva.qtdHoras"/>
        <span class="text-danger" v-show="errors.qtdHoras">{{ errors.qtdHoras }}</span>
        <!-- <input type="number" class="form-control" v-model="reserva.qtdHoras"> -->
      </div>

      <!-- deu 12 colunas agora ele automaticamente cria outra linha -->

      <div class="col-4">
        <label for="">Placa</label>
        <vee-field name="placa"  class="form-control" v-model="reserva.placa"/>
        <span class="text-danger" v-show="errors.placa">{{ errors.placa }}</span>
        <!-- <input type="text" class="form-control" v-model="reserva.placa"> -->
      </div>

      <div class="col-4">
        <label for="">Modelo</label>
        <vee-field name="modelo"  class="form-control" v-model="reserva.modelo"/>
        <span class="text-danger" v-show="errors.modelo">{{ errors.modelo }}</span>
        <!-- <input type="text" class="form-control" v-model="reserva.modelo"> -->
      </div>

      <div class="col-4"> <!-- pode ser col-sm-4 ou col-4 -->
        <label for="">Ano</label>
        <vee-field name="ano" type="number" class="form-control" v-model="reserva.ano"/>
        <span class="text-danger" v-show="errors.ano">{{ errors.ano }}</span>
        <!-- <input type="number" class="form-control" v-model="reserva.ano"> -->
      </div>

      <div class="col-sm-12">
        <button type="submit" class="btn btn-primary" style="margin-right: 15px">Save</button>
        <button type="buton" class="btn btn-danger" @click="clear">Clear</button>
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
            defineRule("dataSuperior", value => {
                if (new Date(value + ` ${this.reserva.horaEntrada}:00`) < new Date()) {
                    return "Data deve ser posterior a data atual"
                }
                return true;  
            });
            defineRule("required", value => {
                if (!value || value.length === 0) {
                    return "Campo obrigatório"
                }
                return true;
            });
            defineRule("placaValida", value => {
                let regexp = /^[a-zA-Z]{3}-[0-9]{1}[a-zA-Z0-9]{1}[0-9]{2}$/
                
                if (!regexp.test(value)) {
                    return "Placa inválida!"
                }
                return true;
            });
            const schema = {
                nome: "required",
                dataReserva: "required|dataSuperior",
                horaEntrada: "required",
                qtdHoras: "required",
                placa: "required|placaValida",
                modelo: "required",
                ano: "required"
            }
            return {
                schema,
                reserva: {}
            }
        },
        methods: {
            save() {       
                this.reserva = {};
            },
            clear() {
                this.reserva = {};  
            }
        }
    }
</script>

