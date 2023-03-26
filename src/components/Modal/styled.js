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
@media screen and (min-width: 360px) and (max-width: 560px)  {
    display: flex;
    justify-content: center;
}
`
export const Content = styled.div`
display: flex;
width: 904px;
height: 509px;
flex-direction: column;
@media screen and (min-width: 360px) and (max-width: 560px)  {
 width: 85%;
 height: 90%;
 overflow: auto;
}
`
export const Trailer = styled.iframe`
width: 100%;
height: 509px;
border: none;
`
