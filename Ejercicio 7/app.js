const calcular = (x1, y1, x2, y2, x3, y3, x4, y4, x5, y5) => {

    let a1 = parseInt(x1),
        a2 = parseInt(x2),
        a3 = parseInt(x3),
        a4 = parseInt(x4),
        a5 = parseInt(x5),

        b1 = parseInt(y1),
        b2 = parseInt(y2),
        b3 = parseInt(y3),
        b4 = parseInt(y4),
        b5 = parseInt(y5),

        cuentaPos = 0,
        cuentaNeg = 0;

    (a1 >= 0) ? cuentaPos++ : cuentaNeg++;
    (b1 >= 0) ? cuentaPos++ : cuentaNeg++;
    (a2 >= 0) ? cuentaPos++ : cuentaNeg++;
    (b2 >= 0) ? cuentaPos++ : cuentaNeg++;
    (a3 >= 0) ? cuentaPos++ : cuentaNeg++;
    (b3 >= 0) ? cuentaPos++ : cuentaNeg++;
    (a4 >= 0) ? cuentaPos++ : cuentaNeg++;
    (b4 >= 0) ? cuentaPos++ : cuentaNeg++;
    (a5 >= 0) ? cuentaPos++ : cuentaNeg++;
    (b5 >= 0) ? cuentaPos++ : cuentaNeg++;

    let multiplo = 0;

    if (a1 % 15 == 0) multiplo++;
    if (b1 % 15 == 0) multiplo++;
    if (a2 % 15 == 0) multiplo++;
    if (b2 % 15 == 0) multiplo++;
    if (a3 % 15 == 0) multiplo++;
    if (b3 % 15 == 0) multiplo++;
    if (a4 % 15 == 0) multiplo++;
    if (b4 % 15 == 0) multiplo++;
    if (a5 % 15 == 0) multiplo++;
    if (b5 % 15 == 0) multiplo++;

    alert("Números positivos " + cuentaPos);
    alert("Números negativos: " + cuentaNeg);
    alert("Múltiplos de 15: " + multiplo);


}