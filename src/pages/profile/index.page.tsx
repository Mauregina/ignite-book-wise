import { NextPageWithLayout } from '../_app.page'
import { ReactElement, useEffect } from 'react'
import { getSession, useSession } from 'next-auth/react'

import { User } from 'phosphor-react'
import { Heading } from '@tucupi-ui/react'

import DefaultLayout from '@/layouts/DefaultLayout'
import { Container, Content, Title } from './styles'

import { ProfileInfo } from '@/components/ProfileInfo'
import { LatestBooksReviewedByUser } from '@/components/LatestBooksReviewedByUser'
import { useRouter } from 'next/router'
import { GetServerSideProps } from 'next'

const Profile: NextPageWithLayout = () => {
  return (
    <Container>
      <Title>
        <User size={26} color="#8661C1" />
        <Heading>Perfil</Heading>
      </Title>
      <Content>
        <LatestBooksReviewedByUser />
        <ProfileInfo />
      </Content>
    </Container>
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
    props: {}, // The page props will be empty since we don't need to pass any data to the page
  }
}
