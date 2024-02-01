import { NextPageWithLayout } from '../_app.page'
import { ReactElement } from 'react'
import { useSession } from 'next-auth/react'

import { House } from 'phosphor-react'
import { Heading } from '@tucupi-ui/react'

import DefaultLayout from '@/layouts/DefaultLayout'
import { Container, Title, Content, Latest } from './styles'

import { LastBookRead } from '@/components/LastBookRead'
import { LatestBooksReviewed } from '@/components/LatestBooksReviewed'
import { PopularBooks } from '@/components/PopularBooks'
import { NextSeo } from 'next-seo'

const Home: NextPageWithLayout = () => {
  const { data: session } = useSession()
  const isLogged = session
  return (
    <>
      <NextSeo
        title="Check it out the last book tracks | BookWise"
        description="Keep track of the books you want to read"
      />

      <Container>
        <Title>
          <House size={26} color="#8661C1" />
          <Heading>Home</Heading>
        </Title>
        <Content>
          <Latest>
            {isLogged && <LastBookRead />}

            <LatestBooksReviewed />
          </Latest>
          <PopularBooks />
        </Content>
      </Container>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Home
