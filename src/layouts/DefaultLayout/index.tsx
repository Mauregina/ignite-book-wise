import { ReactNode } from 'react'
import SideBar from '@/components/SideBar'
import { Container, Content } from './styles'

interface DefaultLayoutProps {
  children: ReactNode
}

export default function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <Container>
      <SideBar />
      <Content>{children}</Content>
    </Container>
  )
}
