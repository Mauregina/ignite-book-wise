import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'
import DefaultLayout from '@/layouts/DefaultLayout'
import { Container, Content, Title } from './styles'
import { User } from 'phosphor-react'
import { Heading } from '@tucupi-ui/react'
import { ProfileInfo } from '@/components/ProfileInfo'
import { LatestBooksReviewedByUser } from '@/components/LatestBooksReviewedByUser'

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
