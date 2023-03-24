import styled from 'styled-components'

export const Container = styled.div`
width: 100vw;
height: 100vh;
position: fixed;
background: rgba(0, 0, 0, 0.3);
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
z-index: 9999;
`
export const Content = styled.div`
display: flex;
width: 704px;
height: 453px;
background: #171717;
flex-direction: column;
border-radius: 10px;
`
export const Fechar = styled.div`
display: flex;
margin: 10px 10px 20px 0px;
align-items: center;
justify-content: center;
background-color: red; 
border-radius: 50px;
width: 25px;
height: 25px;
color: #031C29;
cursor: pointer;
font-weight: 900;
`

