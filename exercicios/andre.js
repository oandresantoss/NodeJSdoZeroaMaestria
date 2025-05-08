function execucao () {
    console.log('PROGRAMA EXECUTADO')
}

setTimeout(execucao, 3000);

function fazerEntrega(callback) {
    console.log('Saiu para entrega');
    setTimeout(() => {
        callback('Pedido ENTREGUE!');
}, 2000);
}

fazerEntrega((message) => {
    console.log(message);
});

function limpaTela() {
    console.clear()
}

setTimeout(limpaTela, 10000);