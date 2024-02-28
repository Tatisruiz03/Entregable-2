
document.addEventListener('DOMContentLoaded', () => {

    const form = document.getElementById('form');

    // Generar el cuento
form.addEventListener('submit', (event) => {

    event.preventDefault()

    const nombre = document.getElementById("nombres").value;
    const apellido = document.getElementById("apellidos").value;
    const apodo = document.getElementById("apodo").value;
    const colorCabello = document.getElementById("color-cabello").value;
    const colorOjos = document.getElementById("color-ojo").value;
    const edad = document.getElementById("edad").value;
    const hobby = document.getElementById("hobby").value;
    const cuento = document.getElementById('cuento');
       
    const cuentoGenerado = `
        En un pequeño pueblo rodeado de montañas vivía un joven llamado <span style="color: red">${nombre}</span>. Su apellido era <span style="color: red">${apellido}</span>, pero todos lo conocían por su apodo, <span style="color: red">${apodo}</span>. Tenía el cabello <span style="color: red">${colorCabello}</span> y ojos <span style="color: red">${colorOjos}</span>, y a sus <span style="color: red">${edad}</span> años era un apasionado de <span style="color: red">${hobby}</span>.
        Un día, mientras <span style="color: red">${nombre}</span> estaba practicando su <span style="color: red">${hobby}</span>, encontró un mapa antiguo en el bosque. El mapa lo guiaba hacia un tesoro escondido en una cueva cercana. Sin dudarlo, <span style="color: red">${nombre}</span> decidió embarcarse en una aventura para encontrar el tesoro.
        En su viaje, <span style="color: red">${nombre}</span> se encontró con muchos desafíos. Tuvo que cruzar ríos caudalosos, escalar montañas escarpadas y enfrentarse a criaturas extrañas. Pero gracias a su valentía, inteligencia y y determinación, logró superar todos los obstáculos. 
        Finalmente, <span style="color: red">${nombre}</span> llegó a la cueva donde estaba escondido el tesoro. Al entrar, se encontró con una gran cantidad de oro, joyas y piedras preciosas. <span style="color: red">${nombre}</span> estaba tan feliz que no podía creerlo. ¡Había encontrado el tesoro!
        <span style="color: red">${nombre}</span> regresó a su pueblo con el tesoro y lo compartió con todos los habitantes. Gracias a su generosidad, el pueblo se convirtió en un lugar próspero y feliz.
        <span style="color: red">${nombre}</span> se convirtió en una heroína para todos. Su historia se transmitió de generación en generación, inspirando a otros a ser valientes, inteligentes y generosos.
    `;

    cuento.innerHTML = cuentoGenerado;

    const inputsToClear = Array.from(document.querySelectorAll('#form input'));
    inputsToClear.forEach((input) => input.value = "");
})
})

