import styled from "styled-components"

export const List = styled.div`
  display: flex;
  flex-direction: column;
 @media screen and (min-width: 360px) and (max-width: 560px)  {
  margin-left: 35px;
  }
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
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
 @media screen and (min-width: 360px) and (max-width: 560px)  {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (min-width: 560px) and (max-width: 860px)  {

  }
`
