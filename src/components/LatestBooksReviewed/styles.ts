import { Rating } from '@mui/material'
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

export const ReviewBox = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
})

export const Reviewer = styled('div', {
  display: 'flex',
  gap: '$3',
})

export const OtherInfoReviewer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '> strong': {
    color: '$gray200',
  },

  '> time': {
    color: '$gray400',
  },
})

export const BookContent = styled('header', {
  display: 'flex',
  gap: '$5',
})

export const BookInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$2',
})

export const BookName = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '> span': {
    color: '$gray400',
  },
})
