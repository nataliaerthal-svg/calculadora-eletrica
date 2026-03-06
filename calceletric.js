let eletro = (prompt("Digite qual seu eletrodoméstico: "));
let tipoEntrada = (prompt("Digite 1 para Watts e 2 para Kilowatts: "));


let consumoH = Number(prompt("Digite o consumo do aparelho por hora: "));
let h = Number(prompt("Digite quantas horas por dia o aparelho fica ligado: "));
let tarifa = Number(prompt("Digite o número da taxa: "));

let kw

if(tipoEntrada == 1){
    kw = consumoH / 1000;
}else{
    kw = consumoH
}

let consumoMensalKWH = kw * h * 30;
let precoFinal = consumoMensalKWH * tarifa

let mensagem = "Aparelho: " + eletro + "\n" +
"Consumo mensal: " + consumoMensalKWH + " kWh\n" +
"Valor estimado: R$ " + precoFinal;

alert(mensagem);