import styled from "styled-components"

export const List = styled.div`
  display: flex;
  flex-direction: column;
`
export const Paragraph = styled.div`
  margin: 40px ;
  @media screen and (min-width: 360px) and (max-width: 560px)  {
  max-width: 280px ;
}
`
export const Title = styled.span`
  font-size: 22px;
  font-weight: bold;
  margin-right: 10px;
  color: var(--color-orange);
`
export const Subtitle = styled.span`
  font-size: 22px;
  font-weight: bold;
  color: var(--color-green);

`
export const ContentCards = styled.div`
display: grid;
grid-gap: 30px;
grid-template-columns: repeat(auto-fit,minmax(360px,1200px));
justify-content: center;
justify-items: center;
padding: 30px;
background-color: red;
`
