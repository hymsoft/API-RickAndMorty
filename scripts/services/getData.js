const baseURL = 'https://rickandmortyapi.com/api';
 //declarar una varible q contednra la url de la api en donde se hacen las peticiones

//funcion - muestra un solo personaje por id
//peticion get asincrona, tengo q esperar la respuesta de la api para mostrar al personaje
const getCharacter = async (id) => { 
    const res = await fetch(`${baseURL}/character/${id}`);
    const data = await res.json(); // de la respuesta nos interesa el body que es el que tiene la info que vamos a necesitar
    console.log(data);
    return data;
}

//funcion - muestra todos los personaje
//peticion get asincrona, tengo q esperar la respuesta de la api para mostrar a los personjes
const getCharacters = async (page) => {
    const res = await fetch(`${baseURL}/character/?page=${page}`);
    const data = await res.json();
    console.log(data);
    return data;
}

export { getCharacter, getCharacters };