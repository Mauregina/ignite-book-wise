import { Button, Heading, Text } from '@tucupi-ui/react'
import { GithubLogo, GoogleLogo, RocketLaunch } from 'phosphor-react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Container, ImageContainer, Hero, ConnectContainer } from './styles'

import logo from '../../assets/logo-login-section.png'

export default function Login() {
  const router = useRouter()

  function handleSignIn(provider?: string) {
    const isVisitor = !provider

    if (isVisitor) {
      router.push('/')
      return
    }

    signIn(provider, {
      callbackUrl: '/',
    })
  }

  return (
    <Container>
      <ImageContainer>
        <Image
          src={logo}
          height={700}
          alt="Logo da aplicação"
          quality={100}
          priority
        />
      </ImageContainer>
      <Hero>
        <Heading>Welcome!</Heading>
        <Text>Login or access as visitor.</Text>
        <ConnectContainer>
          <Button onClick={() => handleSignIn('google')}>
            <GoogleLogo />
            Login with Google
          </Button>
          <Button onClick={() => handleSignIn('github')}>
            <GithubLogo />
            Login with GitHub
          </Button>
          <Button onClick={() => handleSignIn('')}>
            <RocketLaunch />
            Access as visitor
          </Button>
        </ConnectContainer>
      </Hero>
    </Container>
  )
}
