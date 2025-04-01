import Sistema from "../../imagens/list.svg";
import Relatorios from "../../imagens/print.svg";
import Configuracoes from "../../imagens/gears.svg";
import Outros from "../../imagens/wrench.svg";
import Icone from "../../imagens/ixc.png";
import styled from "styled-components";

const Fundo = styled.div`
    background-color: #0d1017;
    border-right: 5px solid #232934;
    padding: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    grid-area: lateral;
`;

const Section = styled.div`
    display: grid;
    grid-template-rows: auto auto auto;
    gap: 5px;
    text-align: center;
    justify-content: center;
    margin-right: 5px;
`;

const SectionLogo = styled.div`
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
`;

const Logo = styled.img`
    max-width: 200px; /* Limita o tamanho da logo */
    height: 100%; /* Mantém a proporção */
`;

const SectionPesquisa = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Pesquisa = styled.input`
    width: 200px;
    height: 30px;
    background-color: #0e1118;
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-color: #242734;
    border-radius: 20px;
`;

const SectionAbas = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    gap: 8px; /* Espaçamento entre os botões */
    width: 100%;
`;

const Abas = styled.button`
    width: 65px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #6d788d;
    border: none;
    color: white;
    border-radius: 10px 10px 0px 0px;
    cursor: pointer;
    transform: scale(0.9); /* Aumenta 10% o tamanho */
`;

const Imagem = styled.img`
    width: 20px;
    height: 20px;
`;

function BarraLateral() {
    return (
        <Fundo>
            <Section>
                <SectionLogo><Logo src={Icone} /></SectionLogo>
                <SectionPesquisa><Pesquisa type="text" placeholder="Buscar..." /></SectionPesquisa>
                <SectionAbas>
                    <Abas><Imagem src={Sistema} /></Abas>
                    <Abas><Imagem src={Relatorios} /></Abas>
                    <Abas><Imagem src={Configuracoes} /></Abas>
                    <Abas><Imagem src={Outros} /></Abas>
                </SectionAbas>
            </Section>
        </Fundo>
    );
}

export default BarraLateral;
