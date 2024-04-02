function converter() {
    // Taxa de conversão (1 Real para x Dólar)
    const taxaDeConversao = 0.20; // Taxa de conversão de exemplo

    // Obtém o valor inserido em Reais
    const valorEmReal = parseFloat(document.getElementById('realInput').value);

    // Verifica se o valor inserido é um número válido
    if (isNaN(valorEmReal) || valorEmReal <= 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira um valor válido.';
        return;
    }

    // Converte o valor para Dólar
    const valorEmDolar = valorEmReal * taxaDeConversao;

    // Exibe o resultado
    document.getElementById('resultado').innerText = `O valor em dólar é: $${valorEmDolar.toFixed(2)}`;
}
