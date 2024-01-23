import { StyledRating } from './styles'

interface ScoreProp {
  score: number
}

export default function Score({ score }: ScoreProp) {
  return <StyledRating name="rating" value={score} precision={0.5} readOnly />
}
