//ex plano
let salariocliente = parseFloat(prompt());
if(salariocliente >= 3000){
    console.log('Oferecer Plano Alfa')
}else if(salariocliente < 3000){
    console.log('Oferecer Plano Beta')
}else{
    console.log('@@@ Digite valor válido @@@')
};