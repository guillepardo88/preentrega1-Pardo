function calcular_compra (compra,cuotas){
    
    let televisor = 800000;
    let aspiradora = 230000;
    let notebook = 1200500;

    //POR COMPRA DE TELEVISOR
    if (compra == "televisor" && cuotas == "ninguna"){

        compra = televisor + (televisor * 0.21);
        return compra
    }
    else if (compra == "televisor" && cuotas == "3"){

        cuotas = televisor + (televisor * 0.40);
        compra = televisor + cuotas + (televisor * 0.21);
        return compra
    }
    else if (compra == "televisor" && cuotas == "6"){

        cuotas = televisor + (televisor * 0.70);
        compra = televisor + cuotas + (televisor * 0.21);
        return compra
    }
    else if (compra == "televisor" && cuotas == "12"){

        cuotas = televisor + (televisor * 0.90);
        compra = televisor + cuotas + (televisor * 0.21);
        return compra
    }

    //POR COMPRA DE ASPIRADORA
    if (compra == "aspiradora" && cuotas == "ninguna"){

        compra = aspiradora + (aspiradora * 0.21);
        return compra
    }
    else if (compra == "aspiradora" && cuotas == "3"){

        cuotas = aspiradora + (aspiradora * 0.40);
        compra = aspiradora + cuotas + (aspiradora * 0.21);
        return compra
    }
    else if (compra == "aspiradora" && cuotas == "6"){

        cuotas = aspiradora + (aspiradora * 0.70);
        compra = aspiradora + cuotas + (aspiradora * 0.21);
        return compra
    }
    else if (compra == "aspiradora" && cuotas == "12"){

        cuotas = aspiradora + (aspiradora * 0.90);
        compra = aspiradora + cuotas + (aspiradora * 0.21);
        return compra
    }

    //POR COMPRA DE NOTEBOOK
    if (compra == "notebook" && cuotas == "ninguna"){

        compra = notebook + (notebook * 0.21);
        return compra
    }
    else if (compra == "notebook" && cuotas == "3"){

        cuotas = notebook + (notebook * 0.40);
        compra = notebook + cuotas + (notebook * 0.21);
        return compra
    }
    else if (compra == "notebook" && cuotas == "6"){

        cuotas = notebook + (notebook * 0.70);
        compra = notebook + cuotas + (notebook * 0.21);
        return compra
    }
    else if (compra == "notebook" && cuotas == "12"){

        cuotas = notebook + (notebook * 0.90);
        compra = notebook + cuotas + (notebook * 0.21);
        return compra
    }
}

let compra = "";   

console.log("Bienvenido/a, que desea comprar?");
console.log("Un televisor, aspiradora o notebook?");

while( compra != "fin"){
    
    compra = prompt("Elija su opcion, o escriba Fin para salir");
    compra = compra.toLowerCase();

    if (compra == "fin"){
        break
    }

    let cuotas = prompt("Elija cantidad de cuotas: 3, 6, 12 o ninguna");
    cuotas = cuotas.toLowerCase();

    let compra_final = calcular_compra(compra,cuotas);
    
    console.log("Su compra queda en:", compra_final);
    console.log("En", cuotas , "cuotas");
}