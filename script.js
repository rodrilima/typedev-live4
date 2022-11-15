function depositar() {
  // Pegar o valor do saldo e atribuir na variável saldoAtual
  var saldoAtual = Number(document.querySelector('#saldo').innerHTML.replace(',', '.'))
  console.log(saldoAtual)

  // Pegar o valor do deposito e atribuir na variável valorDoDeposito
  var valorDoDeposito = Number(document.querySelector('#valor').value)
  console.log(valorDoDeposito)

  // Somar o valor do saldoAtual com o valorDoDeposito e atribuir na variável saldoFinal
  var saldoFinal = saldoAtual + valorDoDeposito
  console.log(saldoFinal)

  // Substituir o saldoAtual pelo saldoFinal
  document.querySelector('#saldo').innerHTML = saldoFinal.toFixed(2).replace('.', ',')
}

function sacar() {
  // Pegar o valor do saldo e atribuir na variável saldoAtual
  var saldoAtual = Number(document.querySelector('#saldo').innerHTML.replace(',', '.'))
  console.log(saldoAtual)

  // Pegar o valor do saque e atribuir na variável valorDoSaque
  var valorDoSaque = Number(document.querySelector('#valor').value)
  console.log(valorDoSaque)

  // Se o valorDoSaque for maior do que o saldoAtual, não permita que a função continue e exiba um alerta
  if (valorDoSaque > saldoAtual) {
    alert('Valor do Saque não pode ser maior do que o saldo atual')
    return;
  }

  // Subtrair o valor do saldoAtual com o valorDoSaque e atribuir na variável saldoFinal
  var saldoFinal = saldoAtual - valorDoSaque
  console.log(saldoFinal)

  // Substituir o saldoAtual pelo saldoFinal
  document.querySelector('#saldo').innerHTML = saldoFinal.toFixed(2).replace('.', ',')
}

function juros() {
  // A cada 5 segundos o saldo da conta vai aumentar em 10%
  setInterval(() => {
    // Pegar o valor do saldo e atribuir na variável saldoAtual
    var saldoAtual = Number(document.querySelector('#saldo').innerHTML.replace(',', '.'))
    console.log(saldoAtual)

    // Acrescentar 10% do valor no saldoAtual e atribuir na variável saldoFinal
    var saldoFinal = saldoAtual + (saldoAtual * 0.1)
    console.log(saldoFinal)

    // Substituir o saldoAtual pelo saldoFinal
    document.querySelector('#saldo').innerHTML = saldoFinal.toFixed(2).replace('.', ',')
  }, 5000)
}

juros()