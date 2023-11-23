import { styled } from '@tucupi-ui/react'

export const Container = styled('aside', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$10',

  padding: '$5',
  background: 'linear-gradient(to bottom, $purple900, $gray700)',
  borderRadius: '$sm',
})

export const NavBar = styled('div', {
  flexGrow: 1,

  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
})

export const Footer = styled('footer', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  ' > svg': {
    cursor: 'pointer',
  },
})
