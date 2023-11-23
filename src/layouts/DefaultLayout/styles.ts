import { styled } from '@tucupi-ui/react'

export const Container = styled('div', {
  maxWidth: '100vw',
  height: '100vh',
  padding: '$5',

  display: 'grid',
  gridTemplateColumns: '230px 1fr',
  gap: '$10',
})

export const Content = styled('main', {
  padding: '$10',

  flex: '1',
  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: '12px',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: 'transparent',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: 'transparent',
  },
})
