import Image from 'next/image'
import { useSession } from 'next-auth/react'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/lib/axios'

import { Text } from '@tucupi-ui/react'

import { formatDate, getTimeDistanceToNow } from '@/utils/date'
import Score from '../Score'

import {
  BookBox,
  BookName,
  Container,
  Content,
  Header,
  Descripton,
} from './styles'

interface User {
  id: string
  image: string
}

interface Book {
  id: string
  title: string
  author: string
  imageUrl: string
}

interface LastBookRead {
  description: string
  score: number
  reviewedAtDate: Date
  book: Book
  user: User
}

interface AuthUser {
  id: string
}

export function LastBookRead() {
  const [review, setReview] = useState<LastBookRead | undefined>(undefined)

  const session = useSession()
  const userId = (session?.data?.user as AuthUser).id

  const loadInfo = useCallback(async () => {
    try {
      const response = await api.get(`users/${userId}/last-read`)

      if (response.status === 200) {
        const lastRead = response.data.lastRead
        const reviewedAtDate = new Date(lastRead.createdAt)
        setReview({
          ...lastRead,
          reviewedAtDate,
        })
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
        Last book read
      </Text>
      {review ? (
        <BookBox>
          <Image
            src={review.book.imageUrl}
            height={152}
            width={108}
            alt="Review"
          />
          <Content>
            <Header>
              <Text
                as="time"
                size="sm"
                title={formatDate(review.reviewedAtDate)}
                dateTime={review.reviewedAtDate}
              >
                {getTimeDistanceToNow(review.reviewedAtDate)}
              </Text>
              <Score score={review.score} />
            </Header>

            <BookName>
              <Text as="strong">{review.book.title}</Text>
              <Text as="span" size="sm">
                {review.book.author}
              </Text>
            </BookName>

            <Descripton size="sm">{review.description}</Descripton>
          </Content>
        </BookBox>
      ) : (
        <BookBox>
          <Text size="sm">No books read so far!</Text>
        </BookBox>
      )}
    </Container>
  )
}
