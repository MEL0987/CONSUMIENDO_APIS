const aplicacion = document.querySelector('.app')

const API_URL = 'https://jsonplaceholder.typicode.com/users'

fetch(API_URL)
.then(respuesta => respuesta.json())
.then(data => {
    data.forEach(usuario => {
        console.log(usuario.name)
        const p = document.createElement('p')

        /**Le seteo el atributo a mi usuario */
        p.setAttribute('id', usuario.id)

        p.innerHTML = usuario.name

        p.addEventListener('click', function(){
           
           /*
           Para dirigirme a la siguiente ventana y ver lo que contiene ese usuario
            */ 
           window.location.href = `./usuario.html?id=${usuario.id}`
        })

        aplicacion.appendChild(p)
    });
 })
.catch(err => console.log(err))

