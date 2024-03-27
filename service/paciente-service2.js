export const listaPacientes = () => {
    return fetch('http://localhost:3000/profile').then(resposta => {
        return resposta.json();
    });
}

export const criarPaciente = (nome, peso, altura, gordura, imc) => {
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome: nome,
            peso: peso,
            altura: altura,
            gordura: gordura,
            imc: imc
        })
    }).then(resposta => {
        return resposta.body
    })
}

const removerPaciente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE'
    })
}

const detalhaPaciente = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then(resposta => {
        return resposta.json();
    })
}

export const pacienteService = {
    listaPacientes,
    criarPaciente,
    removerPaciente,
    detalhaPaciente
}