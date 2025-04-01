import React, { useState } from "react";
import styled from "styled-components";

const Fundo = styled.div`
    width: 95%;
    height: 95%;
    background-color: #0e1018;
    border-radius: 50px 50px 50px 50px;
    margin-left: 15px;
    margin-top: 30px;
    border: solid #242734 3px;
`;

const SectionTitulo = styled.div`
    margin-top: 30px;
    margin-left: 5%;
    margin-right: 5%;
    height: 6%;
`;

const Titulo = styled.h1`
    color: rgb(255, 255, 255);
`;

const SectionBuscador = styled.div`
    display: flex;
    justify-content: center; /* Centraliza horizontalmente */
    align-items: center; /* Centraliza verticalmente */
    margin-top: 30px;
    width: 90%; /* Reduzido em 5% */
    margin-left: 5%; /* Centraliza horizontalmente */
`;

const Buscador = styled.input`
    width: 100%; /* Ocupa 100% da largura do container, que é 90% da largura do fundo */
    max-width: 200px; /* Limita a largura máxima a 200px */
    height: 30px;
    background-color: #0e1118;
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-color: #242734;
    border-radius: 20px;
    justify-items: center;
`;

const SectionExpansor = styled.div`
    display: flex;
    flex-direction: column; /* Para garantir que o conteúdo fique abaixo do botão */
    align-items: flex-start; /* Alinha o conteúdo à esquerda */
    margin-top: 30px;
    width: 90%; /* Reduzido em 5% */
    margin-left: 5%; /* Centraliza horizontalmente */
`;

const Botao = styled.button`
    padding: 10px;
    background-color: #191c25;
    color: white;
    border: none;
    border-radius: 10px 10px 0 0;
    cursor: pointer;
    width: 100%; /* Ocupa toda a largura do container */
    height: 40px;
`;

const BotaoConteudo = styled.div`
    display: ${props => (props.isVisible ? "block" : "none")}; /* Condiciona a exibição com base no estado */
    width: 96.3%; /* O conteúdo ocupa toda a largura do container */
    padding: 10px;
    background-color: #252934;
    border-radius: 0 0 10px 10px;
`;

function Metodos() {
    const [isVisible, setIsVisible] = useState(false); // Controle de estado da visibilidade

    const toggleConteudo = () => {
        setIsVisible(!isVisible); // Alterna o estado de visibilidade
    };

    return (
        <Fundo>
            <SectionTitulo>
                <Titulo>Campos</Titulo>
            </SectionTitulo>

            <SectionBuscador>
                <Buscador type="text" placeholder="Buscar..." />
            </SectionBuscador>

            <SectionExpansor>
                <Botao onClick={toggleConteudo}>id_cliente</Botao>
                    <BotaoConteudo isVisible={isVisible}>
                        <p>Conteúdo expandido aqui...</p>
                    </BotaoConteudo>
            </SectionExpansor>
        </Fundo>
    );
}

export default Metodos;
