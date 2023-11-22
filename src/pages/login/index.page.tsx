import { Button, Heading, Text } from '@tucupi-ui/react'
import { GithubLogo, GoogleLogo, RocketLaunch } from 'phosphor-react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { Container, ImageContainer, Hero, ConnectContainer } from './styles'

import logo from '../../assets/logo.png'
import { useRouter } from 'next/navigation'

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
        <Heading>Boas vindas!</Heading>
        <Text>Faça seu login ou acesse como visitante.</Text>
        <ConnectContainer>
          <Button onClick={() => handleSignIn('google')}>
            <GoogleLogo />
            Entrar com Google
          </Button>
          <Button>
            <GithubLogo />
            Entrar com GitHub
          </Button>
          <Button onClick={() => handleSignIn('')}>
            <RocketLaunch />
            Acessar como visitante
          </Button>
        </ConnectContainer>
      </Hero>
    </Container>
  )
}
