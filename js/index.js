
const getContacts = async () => {
    const response = await fetch('https://www.raydelto.org/agenda.php', {
        method: 'GET'
    })

    const data = await response.json();
    let contactos = document.getElementById('contactos');

    data.map((resultado) => {
        if(resultado.telefono !== ''){
            const nombre = document.createElement('input');
            const apellido = document.createElement('input');
            const telefono = document.createElement('input');
            const titulo = document.createElement('h3');
            const contenedor = document.createElement('div');

            nombre.value = resultado.nombre;
            apellido.value = resultado.apellido;
            telefono.value = resultado.telefono;
            titulo.innerText = 'Contacto';

            contenedor.appendChild(titulo);
            contenedor.appendChild(nombre);
            contenedor.appendChild(apellido);
            contenedor.appendChild(telefono);
            contenedor.classList.add('contenedor')
            
            contactos.appendChild(contenedor);
        }
    })
}

