function validar(){
    var usuario = document.getElementById("usuario").value 
    var password = document.getElementById("password").value 

    if(usuario == "julia.moura" && password == "1234"){
        alert("Login aceito!")
    } else{
        alert("Preencha os campos corretamente")
    }
}