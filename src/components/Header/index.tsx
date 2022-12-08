import { Link } from 'react-router-dom'

import logoReact from '../../assets/logo-react.svg'
import * as S from './styles'

export function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderContent>
        <figure>
          <img src={logoReact} alt="" />
          <strong>React Hooks</strong>
        </figure>
        <ul>
          <li>
            <Link to="/">UseState</Link>
          </li>
          <li>
            <Link to="/useEffect">UseEffect</Link>
          </li>
          <li>
            <Link to="/useRef">UseRef</Link>
          </li>
          <li>
            <Link to="/useContext">UseContext</Link>
          </li>
        </ul>
      </S.HeaderContent>
    </S.HeaderContainer>
  )
}
