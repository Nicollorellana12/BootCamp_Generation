// Dado el código HTML a continuación, completarlo para que cuando se rellenen los campos de nombre y apellido y hacer clic en “enviar datos”, aparezca por pantalla el texto

// «hola nombre apellido, gracias por rellenar el formulario»

const formulario = document.querySelector('#formEnviar')
const boton = document.querySelector('btn-Enviar')

formulario.addEventListener('submit', (e) =>{
    e.preventDefault()
    let nombre = document.querySelector('#nom').value
    let apellido = document.querySelector('#ape').value

    document.querySelector('#saludo').textContent = `Hola ${nombre} ${apellido} gracias por rellenar el formulario`;


}) 