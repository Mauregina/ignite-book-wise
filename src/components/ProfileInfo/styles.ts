import { styled } from '@tucupi-ui/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$10',

  borderLeft: '1px solid $gray700',
  padding: '$2',
})

export const Divider = styled('div', {
  borderTop: '5px solid $purple300',
  width: '20%',
})

export const UserContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$1',
})

export const ContentName = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$1',

  '> span': {
    color: '$gray400',
  },
})

export const ReportContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$5',
})

export const ProfileResumeContent = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$5',

  ' > svg': { color: '$purple300' },
})

export const ProfileResumeInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})
