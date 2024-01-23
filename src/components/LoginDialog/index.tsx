import * as Dialog from '@radix-ui/react-dialog'
import { GithubLogo, GoogleLogo, X } from 'phosphor-react'
import { ReactNode } from 'react'

import { Text, Button } from '@tucupi-ui/react'

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
          <TextTitle>Faça login para deixar sua avaliação</TextTitle>
          <ConnectContainer>
            <Button onClick={() => handleSignIn('google')}>
              <GoogleLogo />
              Entrar com Google
            </Button>
            <Button>
              <GithubLogo />
              Entrar com GitHub
            </Button>
          </ConnectContainer>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
