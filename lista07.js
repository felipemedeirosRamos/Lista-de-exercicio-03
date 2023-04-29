let custo = Number(prompt("Digite o custo do produto"));
let percentual = Number(prompt("Digite o percentrual para venda:"));
let prercent = (percentual/100);
let venda = custo + prercent;
document.write(`O valor de venda é: ${venda}`);
