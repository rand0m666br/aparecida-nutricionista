const novaLinha = (nome, peso, altura, gordura, imc) => {
    const linhaNovoPaciente = document.createElement("tr");
    linhaNovoPaciente.classList.add("paciente");

    const conteudo = `
    <td class="info-nome">${nome}</td>
    <td class="info-peso">${peso}</td>
    <td class="info-altura">${altura}</td>
    <td class="info-gordura">${gordura}</td>
    <td class="info-imc">${imc}</td>
    `;

    linhaNovoPaciente.innerHTML = conteudo;
    return linhaNovoPaciente;
}

const tabela = document.querySelector("#tabela-pacientes");

const http = new XMLHttpRequest();
 
http.open('GET', 'http://localhost:3000/profile');
 
http.send();

http.onload = () => {
    const data = JSON.parse(http.response);

    data.forEach(element => {
        tabela.appendChild(novaLinha(element.nome, element.peso, element.altura, element.gordura, element.imc));
    });
}