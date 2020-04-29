const calcularPromedioM = (n1, n2, n3, n4, n5) => {

    let a1 = parseInt(n1),
        a2 = parseInt(n2),
        a3 = parseInt(n3),
        a4 = parseInt(n4),
        a5 = parseInt(n5);

    alert(`Promedio de la mañana: ${(a1 + a2 + a3+ a4+ a5)/5}`);

}

const calcularPromedioT = (n1, n2, n3, n4, n5, n6) => {

    let a1 = parseInt(n1),
        a2 = parseInt(n2),
        a3 = parseInt(n3),
        a4 = parseInt(n4),
        a5 = parseInt(n5),
        a6 = parseInt(n6);

    alert(`Promedio de la tarde: ${(a1 + a2 + a3+ a4+ a5+a6)/6}`);

}

const calcularPromedioN = (n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11) => {

    let a1 = parseInt(n1),
        a2 = parseInt(n2),
        a3 = parseInt(n3),
        a4 = parseInt(n4),
        a5 = parseInt(n5),
        a6 = parseInt(n6),
        a7 = parseInt(n7),
        a8 = parseInt(n8),
        a9 = parseInt(n9),
        a10 = parseInt(n10),
        a11 = parseInt(n11);

    alert(`Promedio de la noche: ${(a1 + a2 + a3+ a4+ a5+a6+a7+a8+a9+a10+a11)/11}`);

}


const calcularPromedio = (m, t, n) => {
    let manana = parseInt(m);
    let tarde = parseInt(t);
    let noche = parseInt(n)

    if (manana > tarde && manana > noche) {
        alert(`Mañana tiene el mayor promedio de años, ${manana}`);
    }
    if (tarde > manana && tarde > noche) {
        alert(`Tarde tiene el mayor promedio de años, ${tarde}`);
    }
    if (noche > manana && noche > tarde) {
        alert(`Noche tiene el mayor promedio de años, ${noche}`)
    } else {
        alert('Por favor, llene los casilleros');
    }

}



