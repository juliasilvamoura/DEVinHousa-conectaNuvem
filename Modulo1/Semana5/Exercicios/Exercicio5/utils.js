
export function somaTudo(...params){ //rest
    return params.reduce((acumulador, num) => acumulador+num, 0)
}

// ou

export function somaTudoFor(...params){ //rest
    let total = 0
    params.forEach(num => total+=num);

    return total
}