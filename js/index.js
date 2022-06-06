let mostrar = true;

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

const addContacts = async (e) => {

    e.preventDefault();
    
    let nombre = document.getElementById('nombre');
    let apellido = document.getElementById('apellido');
    let telefono = document.getElementById('telefono');

    const response = await fetch('https://www.raydelto.org/agenda.php', {
        method: 'POST',
        body: JSON.stringify({'nombre': nombre.value, 'apellido': apellido.value, 'telefono': telefono.value})
    })

    nombre.value = '';
    apellido.value = '';
    telefono.value = '';

    getContacts();
    ocultar();
}

const ocultar = () => {

    if(mostrar){
        document.getElementById('formulario').style.display = 'block';
        document.getElementById('contactos').style.display = 'none';
        mostrar = false;
    }else{
        document.getElementById('formulario').style.display = 'none';
        document.getElementById('contactos').style.display = 'block';
        mostrar = true;
    }
}

document.addEventListener('DOMContentLoaded', getContacts(), false);

const form = document.querySelector('form');
form.addEventListener('submit', addContacts);