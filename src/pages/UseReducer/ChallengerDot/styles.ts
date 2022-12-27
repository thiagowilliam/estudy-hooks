import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 10px;
`
export const WrapperDot = styled.div`
  margin-top: 10px;
  background: #ebebeb;
  border: 1px solid #d9d9d9;
  width: 100%;
  height: 70vh;
  position: relative;
`

export const Dot = styled.span`
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: purple;
  position: absolute;
  z-index: 1;
`

export const WrapperButton = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: center;
`
export const Button = styled.button`
  padding: 5px 8px;
  position: relative;
  z-index: 2;
`
