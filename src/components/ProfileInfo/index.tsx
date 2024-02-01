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
import { getYearFromDate } from '@/utils/date'
import { AuthUser } from '@/interfaces/AuthUser'

interface Report {
  memberSince: Date
  pagesRead: number
  booksReviewed: string
  authorsRead: string
  categoriesMostRead: string[]
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
        const memberSince = new Date(data.memberSince)
        setReport({
          ...data,
          memberSince,
        })
      }
    } catch (error) {
      console.error('Error fetching report:', error)
    }
  }, [userId])

  useEffect(() => {
    loadInfo()
  }, [loadInfo])

  return (
    <>
      {report && (
        <Container>
          <UserContent>
            <Avatar src={data?.user?.image} imageSize="lg" />
            <ContentName>
              <Text as="strong" size="xl">
                {data?.user?.name}
              </Text>
              <Text as="span" size="sm">
                Member since {getYearFromDate(report.memberSince)}
              </Text>
            </ContentName>
          </UserContent>
          <Divider />
          <ReportContent>
            <ProfileResumeContent>
              <Book size={32} />
              <ProfileResumeInfo>
                <Text as="strong">{report.pagesRead}</Text>
                <Text size="sm">Pages read</Text>
              </ProfileResumeInfo>
            </ProfileResumeContent>
            <ProfileResumeContent>
              <Books size={32} />
              <ProfileResumeInfo>
                <Text as="strong">{report.booksReviewed}</Text>
                <Text size="sm">Books reviewed</Text>
              </ProfileResumeInfo>
            </ProfileResumeContent>
            <ProfileResumeContent>
              <UserList size={32} />
              <ProfileResumeInfo>
                <Text as="strong">{report.authorsRead}</Text>
                <Text size="sm">Authors read</Text>
              </ProfileResumeInfo>
            </ProfileResumeContent>
            <ProfileResumeContent>
              <Tag size={32} />
              <ProfileResumeInfo>
                <Text as="strong">{report.categoriesMostRead.join(', ')}</Text>
                <Text size="sm">Most read category</Text>
              </ProfileResumeInfo>
            </ProfileResumeContent>
          </ReportContent>
        </Container>
      )}
    </>
  )
}
