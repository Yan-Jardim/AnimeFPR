import styled from 'styled-components'

export const container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: rgba(0, 0, 0, 0.8);
height: 102px;
`
export const FprSoon = styled.img`
width: 121px;
height: 75px;
cursor: pointer;
margin-left: 40px;
@media screen and (min-width: 360px) and (max-width: 560px)  {
  margin: auto;
}
`