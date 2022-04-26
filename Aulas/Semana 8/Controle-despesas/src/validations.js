class Validations {
    validarCampoObrigatiorio(atributo){
        if(!atributo){
            return 'Este campo é obrigatório'
        }
        return true

    }

    validarMaiorQueZero(valor){
        if(valor <= 0){
            return 'Este campo tem que ter um valor válido'
        }
        return true
    }
}

export default new Validations()