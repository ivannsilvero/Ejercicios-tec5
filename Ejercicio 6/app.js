const tipoDeTriangulo1 = (n1, n2, n3) => {
    if (n1 >= 1 && n2 >= 1 && n3 >= 1) {
        if (n1 === n2 === n3) {
            alert(`El triangulo 1 es equilatero`);
            return 'equilatero';
        }
        if (n1 !== n2 && n1 !== n3 && n2 !== n3) {
            alert(`El triangulo 1 es escaleno`);
            return 'escaleno';
        } else {
            alert(`El triángulo 1 es isósceles`)
            return 'isósceles';
        }
        return n1, n2, n3;
    } else {
        alert('Por favor, revise el triángulo 1')
    }
}
const tipoDeTriangulo2 = (n1, n2, n3) => {
    if (n1 >= 1 && n2 >= 1 && n3 >= 1) {
        if (n1 === n2 === n3) {
            alert(`El triangulo 2 es equilatero`);
            return 'equilatero';
        }
        if (n1 !== n2 && n1 !== n3 && n2 !== n3) {
            alert(`El triangulo 2 es escaleno`)
            return 'escaleno';
        } else {
            alert(`El triángulo 2 es isósceles`)
            return 'isósceles';
        }
        return n1, n2, n3;
    } else {
        alert('Por favor, revise el triángulo 2')
    }
}
const tipoDeTriangulo3 = (n1, n2, n3) => {
    if (n1 >= 1 && n2 >= 1 && n3 >= 1) {
        if (n1 === n2 === n3) {
            alert(`El triangulo 3 es equilatero`);
            return 'equilatero';
        }
        if (n1 !== n2 && n1 !== n3 && n2 !== n3) {
            alert(`El triangulo 3 es escaleno`);
            return 'escaleno';
        } else {
            alert(`El triángulo 3 es isósceles`);
            return 'isósceles';
        }
        return n1, n2, n3;
    } else {
        alert('Por favor, revise el triángulo 3');
    }
}
const tipoDeTriangulo4 = (n1, n2, n3) => {
    if (n1 >= 1 && n2 >= 1 && n3 >= 1) {
        if (n1 === n2 === n3) {
            alert(`El triangulo 4 es equilatero`);
            return 'equilatero';
        }
        if (n1 !== n2 && n1 !== n3 && n2 !== n3) {
            alert(`El triangulo 4 es escaleno`);
            return 'escaleno';
        } else {
            alert(`El triángulo 4 es isósceles`);
            return 'isósceles';
        }
        return n1, n2, n3;
    } else {
        alert('Por favor, revise el triángulo 4');
    }
}