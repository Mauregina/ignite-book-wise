import { NextPageWithLayout } from '../_app.page'
import { ReactElement } from 'react'
import { useSession } from 'next-auth/react'

import { House } from 'phosphor-react'
import { Heading } from '@tucupi-ui/react'

import DefaultLayout from '@/layouts/DefaultLayout'
import { Container, Title, Content, Latest } from './styles'

import { LastBookRead } from '@/components/LastBookRead'
import { LatestBooksReviewed } from '@/components/LatestBooksReviewed'
import BookPopular from '@/components/BookPopular'

const Home: NextPageWithLayout = () => {
  const { data: session } = useSession()
  const isLogged = session
  return (
    <Container>
      <Title>
        <House size={22} color="#8661C1" />
        <Heading>Início</Heading>
      </Title>
      <Content>
        <Latest>
          {isLogged && <LastBookRead />}

          <LatestBooksReviewed />
        </Latest>
        <BookPopular />
      </Content>
    </Container>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
