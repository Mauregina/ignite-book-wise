import * as Dialog from '@radix-ui/react-dialog'
import { GithubLogo, GoogleLogo, X } from 'phosphor-react'
import { ReactNode } from 'react'

import { Button } from '@tucupi-ui/react'

import { CloseButton, ConnectContainer, DialogContent, Overlay } from './styles'
import { TextTitle } from '../BookDialog/BookDialogPortal/styles'
import { signIn } from 'next-auth/react'

interface LoginDialogProps {
  children: ReactNode
}

export function LoginDialog({ children }: LoginDialogProps) {
  function handleSignIn(provider: string) {
    signIn(provider, { callbackUrl: '/explore' })
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Overlay />
        <DialogContent>
          <CloseButton>
            <X weight="bold" size={24} />
          </CloseButton>
          <TextTitle>Login to leave your review</TextTitle>
          <ConnectContainer>
            <Button onClick={() => handleSignIn('google')}>
              <GoogleLogo />
              Login with Google
            </Button>
            <Button>
              <GithubLogo />
              Login with GitHub
            </Button>
          </ConnectContainer>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
