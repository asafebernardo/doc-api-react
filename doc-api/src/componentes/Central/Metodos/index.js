import styled from "styled-components"
import Tabs from "./metodos"

const Fundo = styled.div`
    width: 95%;
    height: 95%;
    background-color: #0e1018;
    border-radius: 50px 50px 50px 50px;
    margin-left: 25px;
    margin-top: 30px;
    border: solid #242734 3px;
`
const Section = styled.div`
width: 96%;
height: 95%;
margin-left: 20px;
justify-content: center;
align-items: center;

`
const Titulo = styled.h1`
margin-top: 30px;
margin-left: 10px;
color:rgb(255, 255, 255);
`

function Metodos(){
    return (
    <Fundo>
        <Section>
            <Titulo>Métodos</Titulo>
            <Tabs></Tabs>
        </Section>
    </Fundo>
    )
}

export default Metodos;