import { Rating } from '@mui/material'
import { Box, styled } from '@tucupi-ui/react'

export const CartContent = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'stretch',
})

export const ReviewBox = styled(Box, {
  display: 'flex',
  gap: '$5',
  cursor: 'pointer',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '$2',
})

export const BookName = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '> span': {
    color: '$gray400',
  },
})
