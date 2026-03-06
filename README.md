# calculadora-eletrica
calculadora eletrica

⚡ Calculadora de Consumo de Energia

Este projeto é um script simples em JavaScript que calcula o consumo mensal de energia de um eletrodoméstico e estima o valor da conta de luz com base em uma tarifa fixa.

O programa solicita algumas informações ao usuário e, a partir disso, calcula o consumo mensal em kWh e o valor estimado em reais (R$).

📌 Funcionalidades

Solicita o nome do eletrodoméstico

Permite escolher se o consumo está em:

Watts

Kilowatts

Calcula o consumo mensal em kWh

Estima o valor da conta de energia

Exibe o resultado em uma mensagem final

🧮 Como o cálculo funciona

O usuário informa:

Nome do eletrodoméstico

Tipo de unidade (Watts ou Kilowatts)

Consumo por hora

Quantas horas por dia o aparelho fica ligado

Se o valor estiver em Watts, ele é convertido para Kilowatts:

kW = Watts / 1000

O consumo mensal é calculado:

Consumo Mensal (kWh) = kW × horas por dia × 30

O valor final é calculado com a tarifa de energia:

Preço = consumo mensal × tarifa

Tarifa utilizada no projeto:

R$ 0.90 por kWh
💻 Tecnologias utilizadas

JavaScript

Funções nativas do navegador:

prompt()

alert()

▶️ Como executar

Copie o código JavaScript.

Cole em um arquivo .js ou dentro de um <script> em um arquivo HTML.

Abra o arquivo no navegador.

Responda às perguntas exibidas nas janelas de prompt.

📊 Exemplo de saída
Aparelho: Geladeira
Consumo mensal: 54 kWh
Valor estimado: R$ 48.6
📚 Objetivo do projeto

Este projeto foi desenvolvido para praticar conceitos básicos de JavaScript, como:

Variáveis

Condicionais (if / else)

Entrada de dados com prompt

Conversão de valores

Operações matemáticas

Exibição de resultados com alert