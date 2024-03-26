export const listaPacientes = () => {
    return fetch('http://localhost:3000/profile').then(resposta => {
        return resposta.json();
    });
}

export const pacienteService = {
    listaPacientes
}