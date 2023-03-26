import styled from 'styled-components'
import { Typography } from '@mui/material'

export const Container = styled.div`
display: flex;
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
`
export const ContainerToolbar = styled.div`
width: 100%;
height: 100%;
display: flex;
justify-content: space-around;
@media screen and (min-width: 360px) and (max-width: 560px)  {
display: flex;
flex-direction: column; 
align-items: center;
}
@media screen and (min-width: 561px) and (max-width: 770px) {
display: flex;
flex-direction: column; 
align-items: center;
}
`
export const Soon = styled.div`
margin-top: 30px;
@media screen and (min-width: 360px) and (max-width: 560px)  {
margin-right: 50px;
}
`
export const FprSoon = styled.img`
width: 192px;
height: 118px;
`
export const Title = styled.div`
display: flex;
align-items: center;
color: white;
`
export const StyledTypography = styled(Typography)`
@media screen and (min-width: 360px) and (max-width: 560px)  {
font-size: 30px;
margin-right: 55px;
}
@media screen and (min-width: 561px) and (max-width: 770px) {
font-size: 50px;
}
@media screen and (min-width: 771px) and (max-width: 1077px) {
    font-size: 50px;
}
`
export const ColorOrange = styled.span`
color: var(--color-orange);
`
export const ColorGreen = styled.span`
color: var(--color-green);
`
export const Search = styled.div`
margin-top: 30px;
@media screen and (min-width: 360px) and (max-width: 560px)  {
margin-left: 30px;
}
`
export const Sliper = styled.div`
@media screen and (min-width: 360px) and (max-width: 1200px)  {
display: none;
}
`
export const Card = styled.div`
display: flex;
justify-content: center;
cursor: pointer;
@media screen and (min-width: 360px) and (max-width: 560px)  {
display: flex;
flex-direction: column;
align-items: center;
margin-right: 50px;
}
`