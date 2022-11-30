import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: #69a5a4;
  padding: 2rem 0;
  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    strong {
      font-size: 1.5rem;
      color: #f2f2f2;
      margin-left: 0.5rem;
    }
  }
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    display: flex;
  }
  li {
    list-style: none;
    margin-left: 1.5rem;
    a {
      color: #f2f2f2;
      text-decoration: none;
      font-size: 1.2rem;
      &:hover {
        text-decoration: underline;
      }
    }
  }
`
