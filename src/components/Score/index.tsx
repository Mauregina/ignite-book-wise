import { Star } from 'phosphor-react'
import { Container } from './styles'

interface ScoreProp {
  score: number
}

export default function Score({ score }: ScoreProp) {
  const startComponents = []

  for (let i = 0; i < 5; i++) {
    startComponents.push(
      <Star key={i} weight={i < score ? 'fill' : 'regular'} />,
    )
  }

  return <Container>{startComponents}</Container>
}
