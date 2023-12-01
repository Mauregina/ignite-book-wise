import { Box, Text, styled } from '@tucupi-ui/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const BookBox = styled(Box, {
  display: 'flex',
  gap: '$5',
  background: '$purple900',
})

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  gap: '$5',

  '> p': {
    color: '$gray300',
  },
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '> time': {
    color: '$gray200',
  },
})

export const BookName = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '> span': {
    color: '$gray400',
  },
})

export const Descripton = styled(Text, {
  display: '-webkit-box',
  overflow: 'hidden',
  WebkitBoxOrient: 'vertical',
  WebkitLineClamp: 2,
})
