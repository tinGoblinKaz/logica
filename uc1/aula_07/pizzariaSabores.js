// calabresa -> Saindo pizza de calabresa
// frango -> Saindo pizza de frango 
// queijo -> Saindo pizza de queijo
let saborPizza = prompt();
switch (saborPizza) {
    case 'calabresa':
        console.log('Saindo pizza de calabresa')
        break;
    case 'frango':
        console.log('Saindo pizza de frango');
        break;
    case 'queijo':
        console.log('Saindo pizza de queijo');
    default:
        console.log('@@@ ENTRADA INVÁLIDA @@@');        
};
