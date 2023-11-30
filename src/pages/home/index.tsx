import { NextPageWithLayout } from '../_app.page'
import { ReactElement } from 'react'
import { House } from 'phosphor-react'
import { Heading } from '@tucupi-ui/react'

import DefaultLayout from '@/layouts/DefaultLayout'
import { Container, Title, Content, Latest } from './styles'

import BookRead from '@/components/BookRead'
import BookReviewed from '@/components/BookReviewed'
import BookPopular from '@/components/BookPopular'

const Home: NextPageWithLayout = () => {
  return (
    <Container>
      <Title>
        <House size={22} color="#8661C1" />
        <Heading>Início</Heading>
      </Title>
      <Content>
        <Latest>
          <BookRead />
          <BookReviewed />
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
