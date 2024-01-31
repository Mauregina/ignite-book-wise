import { useSession } from 'next-auth/react'
import { useCallback, useEffect, useState } from 'react'
import { Books, Book, UserList, Tag } from 'phosphor-react'
import { api } from '@/lib/axios'

import { Avatar, Text } from '@tucupi-ui/react'

import {
  Container,
  ContentName,
  Divider,
  UserContent,
  ProfileResumeContent,
  ProfileResumeInfo,
  ReportContent,
} from './styles'

interface Report {
  pagesRead: number
  booksReviewed: string
  authorsRead: string
  categoriesMostRead: string[]
}

interface AuthUser {
  id: string
}

export function ProfileInfo() {
  const session = useSession()
  const { data } = session

  const [report, setReport] = useState<Report | undefined>(undefined)

  const userId = (session?.data?.user as AuthUser).id

  const loadInfo = useCallback(async () => {
    try {
      const response = await api.get(`users/${userId}/report`)

      if (response.status === 200) {
        const data = response.data.report
        setReport(data)
      }
    } catch (error) {
      console.error('Error ', error)
    }
  }, [userId])

  useEffect(() => {
    loadInfo()
  }, [loadInfo])

  return (
    <Container>
      <UserContent>
        <Avatar src={data?.user?.image} imageSize="lg" />
        <ContentName>
          <Text as="strong" size="xl">
            {data?.user?.name}
          </Text>
          <Text as="span" size="sm">
            Membro desde 2021
          </Text>
        </ContentName>
      </UserContent>
      <Divider />
      <ReportContent>
        <ProfileResumeContent>
          <Book size={32} />
          <ProfileResumeInfo>
            <Text as="strong">{report?.pagesRead}</Text>
            <Text size="sm">Páginas lidas</Text>
          </ProfileResumeInfo>
        </ProfileResumeContent>
        <ProfileResumeContent>
          <Books size={32} />
          <ProfileResumeInfo>
            <Text as="strong">{report?.booksReviewed}</Text>
            <Text size="sm">Livros avaliados</Text>
          </ProfileResumeInfo>
        </ProfileResumeContent>
        <ProfileResumeContent>
          <UserList size={32} />
          <ProfileResumeInfo>
            <Text as="strong">{report?.authorsRead}</Text>
            <Text size="sm">Autores lidos</Text>
          </ProfileResumeInfo>
        </ProfileResumeContent>
        <ProfileResumeContent>
          <Tag size={32} />
          <ProfileResumeInfo>
            <Text as="strong">{report?.categoriesMostRead.join(', ')}</Text>
            <Text size="sm">Categoria mais lida</Text>
          </ProfileResumeInfo>
        </ProfileResumeContent>
      </ReportContent>
    </Container>
  )
}
