import Image from 'next/image'

import { Avatar, Button, Text } from '@tucupi-ui/react'
import { Container, NavBar, Footer } from './styles'

import logo from '../../assets/logo.svg'
import { Binoculars, House, SignIn, SignOut, User } from 'phosphor-react'
import Link from './Link'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function SideBar() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const isLogged = session

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  function handleSignOut() {
    signOut()
  }

  function handleSignIn() {
    router.push('/login')
  }

  return (
    <Container>
      <Image src={logo} height={30} alt="" />
      <NavBar>
        <Link text="Início" href="/">
          <House size={18} />
        </Link>
        <Link text="Explorar" href="/explore">
          <Binoculars size={18} />
        </Link>
        {isLogged && (
          <Link text="Perfil" href="/profile">
            <User size={18} />
          </Link>
        )}
      </NavBar>
      {isLogged ? (
        <Footer>
          <Avatar src={session.user?.image} />
          <Text size={'sm'}>{session.user?.name}</Text>
          <SignOut size={20} color="red" onClick={() => handleSignOut()} />
        </Footer>
      ) : (
        <Footer>
          <Text size={'sm'}>Fazer login</Text>
          <SignIn size={20} color="blue" onClick={() => handleSignIn()} />
        </Footer>
      )}
    </Container>
  )
}
