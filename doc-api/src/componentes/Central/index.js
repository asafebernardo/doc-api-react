import styled from "styled-components"
import Campos from "./Campos/index.js"
import Metodos from "./Metodos/index.js"

const Fundo = styled.div`
    background-color: #0b0b11;
    padding: 20px;
    grid-area: conteudo;
`;

const Section = styled.div`
    display: grid;
    grid-template-columns: 40% 60%; /* Duas colunas de tamanho igual */
    width: 100%;
    height: 100%;
`;

function Central() {
    return (
        <Fundo>
            <Section>
                <Campos />
                <Metodos />
            </Section>
        </Fundo>
    );
}

export default Central;
