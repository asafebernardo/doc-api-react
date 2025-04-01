import styled from "styled-components"

const Fundo = styled.div`
    width: 95%;
    height: 95%;
    background-color: #0e1018;
    border-radius: 50px 50px 50px 50px;
    margin-left: 25px;
    margin-top: 30px;
`
const GET = styled.button`
    background-color:rgb(255, 255, 255);
`
const POST = styled.button`
    background-color:rgb(255, 255, 255);
`
const PUT = styled.button`
    background-color:rgb(255, 255, 255);
`
const DELETE = styled.button`
    background-color:rgb(255, 255, 255);
`

function Metodos(){
    return (
    <Fundo>
        <GET/>
        <POST/>
        <PUT/>
        <DELETE/>
    </Fundo>
    )
}

export default Metodos;