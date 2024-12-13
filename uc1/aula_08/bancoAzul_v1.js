
// julio, joão gabriel cerqueira, alice e lucas

const limiteSaques = 3;
let saldo = 0;
let extrato = '';
let limite = 500;
let numeroSaques = 0;

while(true){
    let menu = prompt(`
            ========================
                Selecione uma opção:
                [d] - Depósito
                [s] - Saque
                [e] - Extrato
                [q] - Sair
            ========================
            `);


    if(menu.toLowerCase() =='d'){
        let valor = parseFloat(prompt('Informe o valor do depósito: R$'));
        if (valor > 0){
            saldo += valor;
            extrato += `Depósito de R$ ${valor} \n`;
            alert(`Depósito de R$ ${valor} realizado com sucesso`);
        }else{
            alert('@@@ Operação falhou! O valor informado é inválido! @@@');
        };


    }else if(menu.toLowerCase() =='s'){
        if(numeroSaques < limiteSaques){
            let valor = parseFloat(prompt('Informe o valor do saque: R$'))
            if (valor <= limite){
                if(valor <= saldo){
                    saldo -= valor;
                    extrato += `Saque de R$ ${valor} \n`;
                    alert(`Saque de R$ ${valor} realizado com sucesso`)
                }else{
                    alert('@@@ Operação falhou! O valor informado é maior que o saldo! @@@');
                };
                
            }else{
                alert('@@@ Operação falhou! O valor informado é maior que o seu limite atual! @@@');
                };
            numeroSaques++;
        }else if(numeroSaques >= limiteSaques){
             alert('@@@ Operação falhou! Limite de Saques excedido @@@@');
        }else{
            alert('@@@@ Operação falhou! Erro imprevisto @@@')
        };    



    }else if(menu.toLowerCase() =='e'){
        if (extrato == ''){
            alert('Não foram realizadas movimentações.');
        }else{
            alert(extrato.toFixed(2));
        };

       
    }else if(menu.toLowerCase() == 'q'){
        break;
    
    }else{
        alert('@@@@ Erro, ação inválida @@@')
    };
};



