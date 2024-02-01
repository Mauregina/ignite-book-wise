import { styled, Button } from '@tucupi-ui/react'

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$10',
})

export const ButtonContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
  gridColumnGap: '$1',
  gridRowGap: '$1',

  '> button': {
    width: '100%',
  },
})

export const StyledButton = styled(Button, {
  variants: {
    active: {
      true: {
        color: '$white',
        background: '$purple300',
      },
    },
  },
})

export const BooksContent = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '$10',
})
