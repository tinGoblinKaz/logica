let conceito = prompt();

switch(conceito.toUpperCase()){
    case 'A':
        console.log('Atendido');
        break;
    case 'PA':
        console.log('Parcialmente atendido');
        break;
    case 'NA':
        console.log('Não atendido');
        break;
    default:
        console.log('@@@ ENTRADA INVÁLIDA @@@');            
};  