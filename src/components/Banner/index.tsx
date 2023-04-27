import { Imagem, Titulo } from './styles'

import bannerImg from '../../assets/Images/imagem_fundo.png'
import Tag from '../Tag'
import Button from '../Button'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaque da semana</Tag>
      <div>
        <Titulo>La Dolce Vita Trattoria</Titulo>
      </div>
      <Button
        type="link"
        to="/comida"
        title="Clique aqui para pedir sua comida"
      >
        Pedir
      </Button>
    </div>
  </Imagem>
)

export default Banner
