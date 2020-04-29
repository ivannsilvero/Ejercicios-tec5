const multiplicar = (numero) => {

    let resultado,
        valor = parseInt(numero);

    if (isNaN(valor) || valor > 10 || valor < 0) {
        alert('Ingrese un número válido!!!!');
    } else {
        for (let i = 0; i <= 12; i++) {
            resultado = valor * i;
            console.log(valor);
            document.write(`${ valor } * ${ i } = ${ resultado } <br>`);
        }
    }
}