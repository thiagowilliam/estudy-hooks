import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  p {
    font-size: 18px;
    strong {
      margin-left: 5px;
    }
  }
  button {
    margin-top: 20px;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`
