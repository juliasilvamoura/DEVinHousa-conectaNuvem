class Validations { 
validarNomeProduto(atributo){
    if(!atributo){
        return 'O campo nome produto é obrigatório'
    }
    return true
}
validarValorProduto(valor){
    if(valor <= 0){
        return 'O campo valor produto é obrigatório'
    }
    return true
}
}

export default new Validations()