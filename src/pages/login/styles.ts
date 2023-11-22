import { styled } from '@tucupi-ui/react'

export const Container = styled('div', {
  maxWidth: 1160,
  display: 'flex',
  alignItems: 'center',
  gap: '$20',

  height: '100vh',
  margin: '0 auto',
  padding: '0 $10',
})

export const ImageContainer = styled('div', {
  '@media(max-width: 800px)': {
    display: 'none',
  },
})

export const Hero = styled('div', {
  maxWidth: 480,
})

export const ConnectContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',
  marginTop: '$10',

  padding: '$1',

  '@media(max-width: 300px)': {
    '> button > svg': {
      display: 'none',
    },
  },
})
