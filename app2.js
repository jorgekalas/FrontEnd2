let botonPrincipal = document.querySelector('.botonPrincipal');
let divContenedor = document.querySelector('.divContenedor')


function crearBoton(texto){
    let nuevoBoton = document.createElement('button');
    let textoBoton = document.createTextNode(texto);
    nuevoBoton.appendChild(textoBoton)
    nuevoBoton.classList.add('nuevoBoton');
    divContenedor.appendChild(nuevoBoton);
}

let textos = ['Mate', 'Café', 'Harina', 'Palmitos', 'Yerba', 'Mermelada', 'Cacao', 'Picadillo', 'Paté', 'Caballa', 'Arroz', 'Arvejas', 'Sardinas', 'Atún', 'Choclo', 'Lentejas']
let contador = 0;
botonPrincipal.addEventListener('click', () => {
    if(contador<textos.length){
        crearBoton(textos[contador]);
        contador ++;
} else{
    alert('🎶Marolio, le da sabor a tu vida🎶')
    alert('🎶Marolio está desde el comienzo del día.🎶')
}

});

