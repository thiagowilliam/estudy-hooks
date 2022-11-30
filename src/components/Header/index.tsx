import { Link } from 'react-router-dom'
import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <figure>Logo</figure>
        <ul>
          <li>
            <Link to="/">UseState</Link>
          </li>
          <li>
            <Link to="/useEffect">UseEffect</Link>
          </li>
        </ul>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
