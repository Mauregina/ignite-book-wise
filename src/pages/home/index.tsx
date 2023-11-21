import { Button, Heading, Text } from '@tucupi-ui/react'
import { GithubLogo, GoogleLogo, RocketLaunch } from 'phosphor-react'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { Container, ImageContainer, Hero, ConnectContainer } from './styles'

import logo from '../../assets/logo.png'

export default function Home() {
  const session = useSession()

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
          <Button onClick={() => signIn('google')}>
            <GoogleLogo />
            Entrar com Google
          </Button>
          <Button>
            <GithubLogo />
            Entrar com GitHub
          </Button>
          <Button>
            <RocketLaunch />
            Acessar como visitante
          </Button>
        </ConnectContainer>
        <Text>{JSON.stringify(session.data)}</Text>
      </Hero>
    </Container>
  )
}
