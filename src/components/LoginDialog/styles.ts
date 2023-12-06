import { styled } from '@tucupi-ui/react'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.7)',
})

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  width: '20rem',
  background: '$gray800',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: '$10 0',
  borderRadius: '$md',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$5',
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

export const ConnectContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$4',

  padding: '$1',
})
