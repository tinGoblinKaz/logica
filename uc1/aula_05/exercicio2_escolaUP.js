//ex notas dos alunos pt2
let notas = parseFloat(prompt());
if(notas<0 ||notas >10){         //não é necessário, usado apenas pra demonstrar o operador condicional
    console.log('Nota inválida')
}else if(notas <=4 && notas >=0){
    console.log('aluno reprovado')
}else if(notas <=7 && notas >4){    
    console.log('aluno em recuperação')
    let notaRec = parseFloat(prompt());
    if(notaRec<0 ||notaRec >10){
        console.log('Nota inválida')
    }else{
        let avaliacao = notaRec <=5? 'aluno reprovado':'aluno aprovado';
        console.log(avaliacao)};
}else if(notas <= 10 && notas > 7 ){
    console.log('aluno aprovado')
}else{
    console.log('@@@ entrada inválida @@@')
};
