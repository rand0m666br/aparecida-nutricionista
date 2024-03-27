import { pacienteService, criarPaciente } from "../service/paciente-service2.js";

const formulario = document.querySelector("#form-adiciona");
const botao = document.querySelector("#adicionar-paciente");

botao.addEventListener('click', () => {
    // alert('teste');
    // evento.preventDefault();
    // alert('teste');

    const nome = document.querySelector("#nome").value;
    const peso = document.querySelector("#peso").value;
    const altura = document.querySelector("#altura").value;
    const gordura = document.querySelector("#gordura").value;
    const imc = (peso / (altura ** 2 )).toFixed(2);

    pacienteService.criarPaciente(nome, peso, altura, gordura, imc).then( () => {
        alert("Cadastro realizado com sucesso");
        location.reload();
    })
})

// formulario.addEventListener('submit', (evento) => {
//     evento.preventDefault();
//     alert('teste');

//     const nome = document.querySelector("#nome").value;
//     const peso = document.querySelector("#peso").value;
//     const altura = document.querySelector("#altura").value;
//     const gordura = document.querySelector("#gordura").value;

//     pacienteService.criarPaciente(nome, peso, altura, gordura).then( () => {
//         alert("Cadastro realizado com sucesso");
//     })
// });