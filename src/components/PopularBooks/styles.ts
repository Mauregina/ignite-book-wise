import { Box, styled } from '@tucupi-ui/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
})

export const BookBox = styled(Box, {
  display: 'flex',
  gap: '$5',
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
