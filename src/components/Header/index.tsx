import { HeaderPro, SubTitle } from './styles'
import logo from '../../assets/Images/logo.svg'

const Header = () => (
  <HeaderPro>
    <img src={logo} alt="EFOOD" />
    <nav>
      <SubTitle>
        Viva experiências gastronômicas no conforto da sua casa
      </SubTitle>
    </nav>
  </HeaderPro>
)

export default Header
