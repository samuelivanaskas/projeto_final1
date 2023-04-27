class Game {
  category: string
  description: string
  image: string
  infos: string[]
  title: string
  id: number

  constructor(
    id: number,
    title: string,
    infos: string[],
    image: string,
    description: string,
    category: string
  ) {
    this.id = id
    this.title = title
    this.infos = infos
    this.infos = infos
    this.image = image
    this.description = description
    this.category = category
  }
}

export default Game
