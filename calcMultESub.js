let unidade = (prompt("Digite o número para obter a conversão na unidade desejada,\n1-> A\n 2-> Ohm\n 3-> V\n 4-> W\n : "));
let valor = Number(prompt("Digite o número para ser convertido: "));
let resultado = 1000 * valor;

if(unidade == 1){
    alert(valor + "A" + "=" + resultado + "mA");
} else if (unidade == 2){
    alert(valor + "Ohm" + "=" + resultado + "mOhn");
}else if (unidade == 3){
    alert(valor + "V" + "=" + resultado + "mV");
}else if (unidade == 4){
    alert(valor + "W" + "=" + resultado + "mW");
}