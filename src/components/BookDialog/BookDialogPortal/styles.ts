import { Box, styled } from '@tucupi-ui/react'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.7)',
})

export const DialogContent = styled(Dialog.Content, {
  maxWidth: '32rem',
  height: '100vh',
  padding: '$16 $7',

  position: 'fixed',
  top: 0,
  right: 0,
  background: '$gray900',

  display: 'flex',
  flexDirection: 'column',
  gap: '$5',

  overflowY: 'auto',

  '&::-webkit-scrollbar': {
    width: '$3',
  },
  '&::-webkit-scrollbar-thumb': {
    backgroundColor: '$purple900',
    borderRadius: '$md',
  },
  '&::-webkit-scrollbar-track': {
    backgroundColor: '$gray700',
  },
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray3',
})

export const BookInfoBox = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
})

export const BookTitleAuthorScore = styled('div', {
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

export const ScoreContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const Divider = styled('div', {
  borderTop: '1px solid $purple900',
  width: '100%',
})

export const BookCategoryPages = styled('div', {
  display: 'flex',
  gap: '$16',
})

export const CategoryPages = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$3',

  '> svg': { color: '$purple300' },

  '> div': {
    display: 'flex',
    flexDirection: 'column',
    '> span': { fontSize: '$sm', color: '$gray200' },
  },
})

export const ReviewsTitle = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '$5',
})

export const ReviewBox = styled(Box, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',

  '> p': {
    color: '$gray200',
  },
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
