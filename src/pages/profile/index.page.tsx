import { NextPageWithLayout } from '../_app.page'
import { ReactElement } from 'react'
import { getSession } from 'next-auth/react'
import { GetServerSideProps } from 'next'

import { User } from 'phosphor-react'
import { Heading } from '@tucupi-ui/react'

import DefaultLayout from '@/layouts/DefaultLayout'
import { Container, Content, Title } from './styles'

import { ProfileInfo } from '@/components/ProfileInfo'
import { LatestBooksReviewedByUser } from '@/components/LatestBooksReviewedByUser'
import { NextSeo } from 'next-seo'

const Profile: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title="See your profile info | BookWise" noindex />

      <Container>
        <Title>
          <User size={26} color="#8661C1" />
          <Heading>Profile</Heading>
        </Title>
        <Content>
          <LatestBooksReviewedByUser />
          <ProfileInfo />
        </Content>
      </Container>
    </>
  )
}

Profile.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Profile

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
