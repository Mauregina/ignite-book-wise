import { Box, styled } from '@tucupi-ui/react'

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const Title = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$1',
})

export const Content = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 400px',
  gap: '$10',
})

export const Latest = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})
