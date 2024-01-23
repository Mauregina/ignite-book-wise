import { Rating } from '@mui/material'
import { styled, Box } from '@tucupi-ui/react'

export const Form = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Reviewer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',
})

export const StyledRating = styled(Rating, {
  '& .MuiRating-iconEmpty .MuiSvgIcon-root': {
    color: '$purple300',
  },
  '& .MuiRating-iconFilled': {
    color: '$purple300',
  },
})

export const Actions = styled('div', {
  display: 'flex',
  gap: '$2',
  justifyContent: 'flex-end',
  alignItems: 'center',

  '> button': {
    minWidth: '3rem',
  },
})
