import styled from 'styled-components'

export const Container = styled.div`
display: flex;
flex-direction: row;
max-width: 100vw;
overflow-x: hidden;
`
export const Drawer = styled.div`
background-color: #F46d1b;
`
export const Application = styled.div`
display:flex ;
flex-direction: column;
width: 100vw;
margin-bottom: 150px;
`
export const BannerImg = styled.img`
width: 100%;
height: 408px;
`
export const Content = styled.div`
display: flex;
justify-content: center;
@media screen and (min-width: 360px) and (max-width: 560px)  {
display:flex;
flex-direction: column;
align-items: flex-start;
}
`