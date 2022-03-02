let SalarioS, CH;
const Horas = 20000
const HExtra = 30000

function LeerDatos() {
    CH = Number(prompt('Ingrese cantidad de horas'))
}

LeerDatos()
Calcular(CH)

function Calcular(CH) {
    if (CH >= 1 && CH<40) {
        SalarioS = CH * Horas
    }
    else {
        HExtra = CH - 40
    }


  
}