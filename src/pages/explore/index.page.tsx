import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'
import DefaultLayout from '@/layouts/DefaultLayout'
import { Container, Title } from './styles'
import { Binoculars } from 'phosphor-react'
import { Heading } from '@tucupi-ui/react'
import { ExploreBooks } from '@/components/ExploreBooks'
import { NextSeo } from 'next-seo'

const Explore: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title="Explore and review books | BookWise" />

      <Container>
        <Title>
          <Binoculars size={26} color="#8661C1" />
          <Heading>Explore</Heading>
        </Title>
        <ExploreBooks />
      </Container>
    </>
  )
}

Explore.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Explore
