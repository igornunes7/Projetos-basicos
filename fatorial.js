//Fatorial do número desejado

function Fatorial (num) {
    let fatorial = 1
    if ((num === 0) || (num === 1)) {
        console.log ("Fatorial de" , num, "é" , fatorial)
    }

    for (i = 2; i <= num; i++) {
        fatorial = fatorial * i
    }
    console.log ("Fatorial de" , num , "é" , fatorial)
}

Fatorial (3)
Fatorial (5)
