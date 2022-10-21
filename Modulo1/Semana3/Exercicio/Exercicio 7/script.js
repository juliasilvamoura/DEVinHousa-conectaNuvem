

var dia = new Date().getDate() // dia
var mes = new Date().getMonth() +1  // mes
var texto = document.querySelector('.texto')
var imagem = document.querySelector('.estacao')
var estacao = ''

console.log(dia)

    switch(mes){
        case 1:
            estacao = "Verão"
            texto.innerHTML = estacao
            texto.style.color= "#cc9a4f"
            break;
        case 2:
            estacao = "Verão"
            texto.innerHTML = estacao
            texto.style.color= "#cc9a4f"
            break;
        case 3:
            if(dia<=21){
                estacao="Verão"
                texto.innerHTML = estacao
                texto.style.color= "#cc9a4f"
                //console.log(texto)
            } else {
                estacao = "Outono"
                texto.innerHTML = estacao
                texto.style.color = "#a7591a"
            }
            break;
        case 5:
            estacao = "Outono"
            texto.innerHTML = estacao
            texto.style.color = "#a7591a"
            break;
        case 6:
            if(dia<=21){
                estacao = "Outono"
                texto.innerHTML = estacao
                texto.style.color = "#a7591a"
            } else {
                estacao = "Inverno"
                texto.innerHTML = estacao
                texto.style.color = "#4699dd"
            }
            break;
        case 7:
                estacao = "Inverno"
                texto.innerHTML = estacao
                texto.style.color = "#4699dd"
                break;
        case 8:
                estacao = "Inverno"
                texto.innerHTML = estacao
                texto.style.color = "#4699dd"
                break;
        case 9:
            if(dia<=21){
                estacao = "Inverno"
                texto.innerHTML = estacao
                texto.style.color = "#4699dd"
            } else {
                estacao = "Primavera"
                texto.innerHTML = estacao
                texto.style.color = "#69b10a"
            }
            break;
        case 10:
            estacao = "Primavera"
            texto.innerHTML = estacao
            texto.style.color = "#69b10a"
            break;
        case 11:
            estacao = "Primavera"
            texto.innerHTML = estacao
            texto.style.color = "#69b10a"
            break;
        case 12:
            if(dia<=21){
                estacao = "Primavera"
                texto.innerHTML = estacao
                texto.style.color = "#69b10a"
            } else {
                estacao = "Verão"
                texto.innerHTML = estacao
                texto.style.color= "#cc9a4f"
            }
            break;

    }

    switch(estacao){
        case "Verão":
            imagem.src = "https://images.vexels.com/media/users/3/238483/isolated/preview/3f2928bc6385711f17ea740b323d0a94-letras-de-elementos-de-emblemas-de-verao-13.png"
            imagem.alt = "Verão"
            break
        case "Primavera":
            imagem.src = "https://images.vexels.com/media/users/3/230500/isolated/lists/986a3b315048ee3f480a7a191678a33c-passaros-em-planicie-de-primavera.png"
            imagem.alt = "Primavera"
            break
        case "Outono":
            imagem.src = "https://images.vexels.com/media/users/3/182558/isolated/lists/460771e837e215ec99e90265a8cd166a-folha-de-bordo-vermelho-plana-de-outono.png"
            imagem.alt = "Outono"
            break
        case "Inverno":
            imagem.src = "https://images.vexels.com/media/users/3/159559/isolated/lists/cedb99e7e25b9cbeb8785e847db98057-traco-de-inverno-padrao-de-floco-de-neve.png"
            imagem.alt = "Inverno"
            break
        }

   

