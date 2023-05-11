import logo from '../../assets/Images/logo.svg'
import logoinstagram from '../../assets/Images/Vector.png'
import logofacebook from '../../assets/Images/Vector_2.png'
import logotwitter from '../../assets/Images/Vector_3.png'
import { Container, Logos, SectionLogo, TextFooter } from './styles'

const Footer = () => (
  <Container>
    <div className="container">
      <SectionLogo>
        <img src={logo} alt="Logo" />
      </SectionLogo>
      <Logos>
        <img src={logofacebook} alt="Logo Facebook" />
        <img src={logotwitter} alt="Logo Twitter" />
        <img src={logoinstagram} alt="Logo Instagram" />
      </Logos>
      <div>
        <TextFooter>
          A efood é uma TextFooterlataforma para divulgação de estabelecimentos,
          a responsabilidade pela entrega, qualidade dos produtos é toda do
          estabelecimento contratado.
        </TextFooter>
      </div>
    </div>
  </Container>
)

export default Footer
