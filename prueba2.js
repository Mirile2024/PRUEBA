function cargarDatosDesdeServidor(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const exito = true;
            if (exito){
                const datos= ['dato1', 'dato2', 'dato3'];
                resolve(datos);

            }else{
                reject (new Error('Error al cargar datos'));
            }
            }, 2000);
    })
}
cargarDatosDesdeServidor()
.then((datos)=>{
    console.log(datos,'Datos cargados exitosamente');
    //-Desde aca-------------------------
    const API_URL = 'https://swapi.dev/api/people/?page=2&format=json'

    const obtenerPersonajes = async () => {
        const respuesta = await fetch(API_URL)
        const personajes = await respuesta.json()
        mostrarPersonajes(personajes)
        console.log(personajes);
    }
    const mostrarPersonajes = personajes => {
        const lista = document.getElementById('lista-personajes')
        //--------siempre ver jerarquia de las APIS
        personajes.results.forEach(personaje => {
            const personajesName = document.createElement('article')
            personajesName.classList.add('personaje')
            personajesName.innerHTML = `
         <h3>${personaje.name}<h3/>
         <p>height: ${personaje.height}</p>
         <p>${personaje.gender}</p>
         `
            lista.appendChild(personajesName)
        })
    }
    
    obtenerPersonajes()
    //---Hasta aca-------------------------
    
})
.catch ((error)=>{
    console.log(error.message);
});