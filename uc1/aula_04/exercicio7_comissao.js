//ex comissões
let valordaComissao = 0;
let metaDeVendas =10000;
let valordasVendas = 12000;
    if(valordasVendas >= metaDeVendas){
        let taxacomissao = 0.04;
        valordaComissao = valordasVendas * taxacomissao;
    }else if(valordaComissao < metaDeVendas){
        let taxacomissao = 0.02
        valordaComissao = valordasVendas * taxacomissao;
    }else{
        console.log('@@@ digite valor válido @@@')
    };
console.log(`
=====================================
SUAS VENDAS FORAM DE: R$${valordasVendas}
SUA COMISSÃO SERÁ DE: R$${valordaComissao}
=====================================
`);    