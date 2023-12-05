import { Box, styled } from '@tucupi-ui/react'

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const ButtonContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '$10',

  '> button': {
    borderRadius: '$full',
    maxWidth: 120,
  },
})

export const BooksContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$10',
})

export const ReviewBox = styled(Box, {
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
