import {shallowMount} from "@vue/test-utils"
import ExercicioExemplo from "@/exercicios/exercicio-exemplo.vue"

describe("ExercicioExemplo.vue", () =>{
    it("renderiza define Props.nome quando informada", () =>{
        const wrapper = shallowMount(ExercicioExemplo, {
            propsData: {nome: "Julia"}
        });
        expect(wrapper.text()).toMatch("Julia");
    });

    it("renderiza o valor padrão quando não há Props.nome", () =>{
        const wrapper = shallowMount(ExercicioExemplo, {
            propsData: {nome: null}
        });
        expect(wrapper.text()).toMatch("visitante");
    });

    it("exibe a mensagem de despedida sem a nota quando o usuario clicar em sair", async () =>{
        const wrapper = shallowMount(ExercicioExemplo);
        const botao = wrapper.find("button");
        await botao.trigger("click");

        expect(wrapper.text()).toMatch("Volte sempre!Quando puder, nos deixe uma avaliação");
    });

    it("exibe a mensagem de despedida COM a nota quando o usuario clicar em sair", async () =>{
        const wrapper = shallowMount(ExercicioExemplo);
        const textInput = wrapper.find('input[type="number]');
        await textInput.setValue("9");

        const botao = wrapper.find("button");
        
        await botao.trigger("click");

        expect(wrapper.text()).toMatch("Volte sempre!Obrigado pela nota 9");
    });

})