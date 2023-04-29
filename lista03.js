let salarioMinimo = 1200;
let salarioUsuario = Number(prompt("Digite o seu salário"));
let quantSalario = Math.round(salarioUsuario/salarioMinimo);
document.write(`A quantidade de salário mínimos de: ${salarioUsuario} é: ${quantSalario} salários mínimos `);
