let calculo = (prompt("Digite o que deseja fazer utilizando o número correspondente; 1- Conversão, 2- Calculo com Lei de Ohn, 3- Cálculo de resistores, 4- Cálculo de consumo de energia elétrica: "));
let resultado;


if(calculo == 1){
    let unidade = (prompt("Digite qual a unidade de medida que você tem, V- Volt, A- Amper, W-Watt, O- Ohm: "));
    let valor = Number(prompt("Digite o número para ser convertido: "));
    let unidadeDeConv = (prompt("Digite se deseja converter para mili ou kilo, 1-mili, 2- kilo: "));
    if(unidadeDeConv == 1){
        resultado = valor * 1000;
        }else if(unidadeDeConv == 2){
            resultado = valor / 1000;
        } console.log(resultado + unidade);
    }else if(calculo == 2){
        let valorOhm = (prompt("Digite o valor em Ohms: "));
        let valorAmper = (prompt("Digite o valor em Amper: "));
        resultado = valorOhm * valorAmper;
        console.log(resultado + "V");
    }else if(calculo == 3){
        let mult = (prompt("Digite o multiplicador: "))
        let primeira = (prompt("Digite a primeira faixa: "));
        let seg = (prompt("Digite a segunda faixa: "));
        let cincoOuQuatro = (prompt("Digite 4 para 4 faixas e 5 para 5 faixas: "));
        switch(cincoOuQuatro){
        case 4:
        resultado = (primeira * 10 + seg) * (10 ** multiplicador);
        console.log(resultado);
        break;

        case 5:
            let ter = (prompt("Digite a terceira faixa: "));
        resultado = ((primeira * 100) + (seg * 10) + ter) * (10 ** multiplicador);
        console.log(resultado);
        break;
        }
    }else if(calculo == 4){
     let watt = (prompt("Digite a potência(watts): "));
     let horas = (prompt("Digite quantas horas usa: "));
     resultado = (watt * horas) / 1000;
     console.log(resultado)
    
    }else{
        console.log("Número inválido!")
    }
        
    
