import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Binoculars, House, SignIn, SignOut, User } from 'phosphor-react'

import { Avatar, Text } from '@tucupi-ui/react'
import { Container, NavBar, Footer } from './styles'

import logo from '../../assets/logo.svg'

import Link from './Link'

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
        <Link text="Home" href="/">
          <House size={18} />
        </Link>
        <Link text="Explore" href="/explore">
          <Binoculars size={18} />
        </Link>
        {isLogged && (
          <Link text="Profile" href="/profile">
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
          <Text size={'sm'}>Login</Text>
          <SignIn size={20} color="blue" onClick={() => handleSignIn()} />
        </Footer>
      )}
    </Container>
  )
}
