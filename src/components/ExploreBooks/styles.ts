import { Box, styled } from '@tucupi-ui/react'

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const ButtonContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  gap: '$3',

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
