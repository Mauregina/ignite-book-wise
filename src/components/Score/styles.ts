import { Rating } from '@mui/material'
import { styled } from '@tucupi-ui/react'

export const StyledRating = styled(Rating, {
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: '$purple300',
  },
  '& .MuiRating-iconFilled': {
    color: '$purple300',
  },
})
