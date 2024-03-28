import { pacienteService } from "../service/paciente-service2.js";

const getURL = new URL(window.location);

const id = getURL.searchParams.get('id');

const inputNome = document.querySelector("#nome");
const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");
const inputGordura = document.querySelector("#gordura");

pacienteService.detalhaPaciente(id)
    .then(dados => {
        inputNome.value = dados.nome
        inputPeso.value = dados.peso
        inputAltura.value = dados.altura
        inputGordura.value = dados.gordura
        const imc = (dados.peso / (dados.altura ** 2)).toFixed(2);

        const botao = document.querySelector("#adicionar-paciente");
        botao.addEventListener('click', () => {
            pacienteService.atualizaPaciente(id, inputNome.value, inputPeso.value, inputAltura.value, inputGordura.value, imc).then(() => {
                alert("Atualizado com sucesso!");
                window.location.href = "../index.html";
            })
        });
    });