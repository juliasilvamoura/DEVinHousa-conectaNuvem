import {verificaPalavraNoTexto} from '../../src/exercicios/exercicio-7';

describe(() => {
    it('Deve retornar informe um texto quando o param texto não for informado', () =>{
        expect(verificaPalavraNoTexto(null, "algumaPalavra")).toBe(
            "informe um texto"
        );
    });
    it('Deve retornar informe um texto quando o param palavra não for informado', () =>{
        expect(verificaPalavraNoTexto("algum texto", false)).toBe(
            "informe um texto"
        );
    });
    it('Deve retornar true se o texto contem a palavra', () =>{
        expect(verificaPalavraNoTexto("vasco da gama", "vasco")).toBe(
            true
        );
    });

    it('Deve retornar false se o texto NÃO contem a palavra', () =>{
        expect(verificaPalavraNoTexto("vasco da gama", "abacaxi")).toBe(
            false
        );
    });
});