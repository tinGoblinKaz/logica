//ex notas dos alunos
let notas = parseFloat(prompt());
if(notas<0 ||notas >10){         //não é necessário, usado apenas pra demonstrar o operador condicional
    console.log('Nota inválida');
}else if(notas >=0 && notas <4){
    console.log('aluno reprovado');
}else if(notas >=4 && notas <7){
    console.log('aluno em recuperação');
}else if(notas >=7 && notas <10){
    console.log('aluno aprovado');
}else{
    console.log('@@@ entrada inválida @@@')
}; 

