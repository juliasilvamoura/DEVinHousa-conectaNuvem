class Pessoa{
    ser(){
        console.log("Eu sou uma pessoa")
    }
}

class Jovem extends Pessoa{

}

class Idoso extends Pessoa{
    serAvancado(){
        console.log("Eu sou um idoso")
    }
}

const p1 = [new Pessoa(), new Jovem()];
p1.forEach(p1 => p1.ser());

const p2 = new Idoso;
p2.serAvancado();