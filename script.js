/*
 O desafio consiste em criar um script que irá solicitar ao usuário que ele insira **dois número** e, a partir daí, o script deve calcular a soma, subtração, multiplicação e divisão dos valores e exibir o resultado no console do navegador.

 [x] Solicite ao usuário que insira dois números
 [x] Calcule a soma dos valores e exiba no navegador
 [x] Calcule a subtração dos valores e exiba no navegador
 [x] Calcule a multiplicação dos valores e exiba no navegador
 [x] Calcule a divisão dos valores e exiba no navegador
 [x] Verificar se a soma dos dois números é par
 [x] Verificar se os dois número inseridos são iguais

 [x] Exiba uma mensagem de erro caso um dos valores não seja um número
 [x] Exiba uma mensagem de erro caso a divisão seja por zero
 [x] Exiba uma mensagem de erro caso o usuário não insira todos os valores
 [x] Exiba uma mensagem de erro caso o usuário insira valores inválidos
 [x] Exiba uma mensagem de erro caso o usuário insira apenas um valor
*/

// Solicite ao usuário que insira dois números
const firstNumber = prompt("Digite o primeiro número:");
const secondNumber = prompt("Digite o segundo número:");

// Exiba uma mensagem de erro caso um dos valores não seja um número
if (isNaN(firstNumber) || isNaN(secondNumber)) {
  alert("Digite apenas números");
  throw new Error("Digite apenas números");
}
// Exiba uma mensagem de erro caso a divisão seja por zero
else if (secondNumber === "0") {
  alert("Não é possível dividir por zero");
  throw new Error("Não é possível dividir por zero");
}
// Exiba uma mensagem de erro caso o usuário não insira todos os valores
else if (firstNumber == null || secondNumber == null) {
  alert("Digite os dois números");
  throw new Error("Digite os dois números");
}
// Exiba uma mensagem de erro caso o usuário não insira nenhum valor
else if (firstNumber === "" && secondNumber === "") {
  alert("Digite os dois números");
  throw new Error("Digite os dois números");
}
// Exiba uma mensagem de erro caso o usuário insira apenas um valor
else if (firstNumber === "" || secondNumber === "") {
  alert("Digite os dois números");
  throw new Error("Digite os dois números");
} else {
  // Calcule a soma dos valores e exiba no console do navegador
  const sum = Number(firstNumber) + Number(secondNumber);
  alert(`A soma dos valores é ${sum}`);

  // Calcule a subtração dos valores e exiba no navegador
  const subtraction = Number(firstNumber) - Number(secondNumber);
  alert(`A subtração dos valores é ${subtraction}`);

  // Calcule a multiplicação dos valores e exiba no navegador
  const multiplication = (Number(firstNumber) * Number(secondNumber)).toFixed(
    2
  );
  alert(`A multiplicação dos valores é ${multiplication}`);

  // Calcule a divisão dos valores e exiba no navegador
  const division = (Number(firstNumber) / Number(secondNumber)).toFixed(2);
  alert(`A divisão dos valores é ${division}`);

  // Verificar se a soma dos dois números é par
  const isEven = sum % 2 === 0 ? "Sim" : "Não";
  alert(`A soma dos valores é par? \n   --> ${isEven}`);

  // Verificar se os dois número inseridos são iguais
  const isEqual = firstNumber === secondNumber ? "Sim" : "Não";
  alert(`Os dois números são iguais? \n   --> ${isEqual}`);
}

// Exiba uma mensagem de erro caso o usuário insira valores inválidos
if (firstNumber === "" || secondNumber === "") {
  alert("Digite os dois números");
}

// Exiba uma mensagem de erro caso o usuário não insira nenhum valor
if (firstNumber === "" && secondNumber === "") {
  alert("Digite os dois números");
}

// Exiba uma mensagem de erro caso o usuário insira apenas um valor
if (firstNumber === "" || secondNumber === "") {
  alert("Digite os dois números");
}

// Exiba uma mensagem de erro caso o usuário insira mais de dois valores
if (firstNumber === "" || secondNumber === "") {
  alert("Digite os dois números");
}
