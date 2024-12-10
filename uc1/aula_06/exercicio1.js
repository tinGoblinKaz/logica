//ex 1 avaliação do funcionário
let vendas = parseInt(prompt());
if(vendas <=0){
    console.log('Número de vendas inválido');
}else if(vendas <=4){
    console.log('Desempenho Insuficiente');
}else if(vendas <=9){
    console.log('Desempenho Satisfatório');
}else{
    console.log('Desempenho Excelente');
}; 