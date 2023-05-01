function calcular() {
    // Obtenemos los valores de los campos de entrada
    let altura = document.getElementById("altura").value;

    let ancho = document.getElementById("ancho").value;

    // Realizamos el cálculo (regla de tres simple)
    let area = altura * ancho;
    let cantidad = area / 10; // 10 metros cuadrados por unidad de material

    console.log(cantidad)

    // Mostramos el resultado en la página
    document.getElementById("resultado").innerHTML = "Se necesitan " + cantidad + " unidades de material.";
}
