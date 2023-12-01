import { Text } from '@tucupi-ui/react'

import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useCallback, useEffect, useState } from 'react'

import Book1 from '../../assets/book1.png'

import {
  BookBox,
  BookName,
  Container,
  Content,
  Header,
  Descripton,
} from './styles'

import { api } from '@/lib/axios'

import { formatDate, getTimeDistanceToNow } from '@/utils/date'
import Score from '../Score'

interface LastBookRead {
  name: string
  author: string
  review: string
  score: number
  reviewed_at: string
  reviewedAtDate: Date
}

interface AuthUser {
  id: string
}

export default function BookRead() {
  const [data, setData] = useState<LastBookRead | undefined>(undefined)

  const session = useSession()
  const userId = (session?.data?.user as AuthUser).id

  const loadInfo = useCallback(async () => {
    try {
      const response = await api.get(`users/${userId}/last-read`)

      if (response.status === 200) {
        const lastRead = response.data.lastRead
        const reviewedAtDate = new Date(lastRead.reviewed_at)
        setData({ ...lastRead, reviewedAtDate })
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
      <Text size={'sm'} as="strong">
        Sua última leitura
      </Text>
      {data ? (
        <BookBox>
          <Image src={Book1} height={170} alt="" />
          <Content>
            <Header>
              <Text
                as="time"
                size="sm"
                title={formatDate(data.reviewedAtDate)}
                dateTime={data.reviewedAtDate}
              >
                {getTimeDistanceToNow(data.reviewedAtDate)}
              </Text>
              <Score score={data.score} />
            </Header>

            <BookName>
              <Text as="strong">{data.name}</Text>
              <Text as="span" size="sm">
                {data.author}
              </Text>
            </BookName>

            <Descripton size="sm">{data.review}</Descripton>
          </Content>
        </BookBox>
      ) : (
        <BookBox>
          <Text size="sm">Nenhum livro lido até o momento!</Text>
        </BookBox>
      )}
    </Container>
  )
}
