import styled from "styled-components"

export const List = styled.div`
  display: flex;
  flex-direction: column;
`

export const Paragraph = styled.div`
  height: 50px;
  margin-top: 40px;
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
`
