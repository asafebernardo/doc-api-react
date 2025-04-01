import styled from "styled-components";

const Fundo = styled.div`
    background-color: #0a0b11;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 10px;
    grid-area: superior;
`;

const Endpoint = styled.h2`
    color: rgb(102, 102, 102);
    margin: 0;
    position: absolute;
    left: 30px;
`;

const Buscador = styled.input`
    width: 200px;
    height: 30px;
    background-color: #0e1118;
    border: 1px solid #ccc;
    padding: 5px 10px;
    border-color: #242734;
    border-radius: 20px;
    position: absolute;
    right: 30px;
`;

function BarraSuperior() {
    return (
        <Fundo>
            <Endpoint>Cliente</Endpoint>
            <Buscador type="text" placeholder="Buscar..." />
        </Fundo>
    );
}

export default BarraSuperior;
