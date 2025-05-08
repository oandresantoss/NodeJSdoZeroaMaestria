function fazerPedido(callback) {
    console.log('Pedido saiu para entrega!');
        setTimeout(() => {
        callback('Seu pedido chegou!');
        }, 3000);
}

fazerPedido((mensagem) => {
    console.log(mensagem);
    console.log('Console será limpo após 10 segundos');
});



setTimeout(() =>{
    console.clear();
}, 10000);