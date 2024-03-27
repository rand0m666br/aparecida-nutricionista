import { pacienteService } from "../service/paciente-service2.js";

const novaLinha = (nome, peso, altura, gordura, imc, id) => {
    const linhaNovoPaciente = document.createElement("tr");
    linhaNovoPaciente.classList.add("paciente");

    const conteudo = `
    <td class="info-nome">${nome}</td>
    <td class="info-peso">${peso}</td>
    <td class="info-altura">${altura}</td>
    <td class="info-gordura">${gordura}</td>
    <td class="info-imc">${imc}</td>
    <td class="info-acao"><a href="">Editar</a></td>`;

    linhaNovoPaciente.innerHTML = conteudo;
    linhaNovoPaciente.dataset.id = id;
    // console.log(linhaNovoPaciente);
    return linhaNovoPaciente;
}

const tabela = document.querySelector("#tabela-pacientes");

// Remover paciente
tabela.addEventListener('dblclick', (evento) => {
    const linhaPaciente = evento.target.closest("[data-id]");
    console.log(linhaPaciente)
    let id = linhaPaciente.dataset.id;
    pacienteService.removerPaciente(id).then(() => {
        linhaPaciente.remove();
    })
})

pacienteService.listaPacientes().then(promise => {
    promise.forEach(element => {
        tabela.appendChild(novaLinha(element.nome, element.peso, element.altura, element.gordura, element.imc, element.id));
    });
});