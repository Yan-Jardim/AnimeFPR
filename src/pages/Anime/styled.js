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
@media screen and (min-width: 360px) and (max-width: 560px) {
display: none;
}
`
export const Content = styled.div`
display: flex;
@media screen and (min-width: 360px) and (max-width: 700px) {
display: flex;
flex-direction: column;
align-items: flex-start;
margin-top: 150px;
}
`
export const ContentCard = styled.div`
margin-left: 83px;
width: 250px;
@media screen and (min-width: 360px) and (max-width: 560px) {
margin-left: 23px;
}
`
export const Card = styled.img`
width: 221px ;
height: 313px ;
margin-top: -50px;
`
export const Trailer = styled.button`
width: 221px ;
height: 49px ;
border: none ;
font-size: 16px;
font-weight: bold;
margin-top: 30px;
border-radius:  10px;
background-color: var(--color-orange);
color: var(--color-white);
cursor: pointer;
`
export const Approval = styled.p`
margin-top: 29px;
width: 150px;
color: var(--color-green);  
`
export const Popular = styled.p`
margin-top: 20px;
`
export const Classification = styled.p`
margin-top: 20px;
`
export const ContentText = styled.div`
margin: 13px 0 0 29px;
`
export const Title = styled.h1`
margin-bottom: 10px;

`
export const Text = styled.p`
margin-right: 65px;
font-size: clamp(1.75em, 1em + 3vw, 2,5em);
`