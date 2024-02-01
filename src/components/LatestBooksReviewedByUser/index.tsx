import Image from 'next/image'
import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { api } from '@/lib/axios'

import { Text, TextInput } from '@tucupi-ui/react'

import { formatDate, getTimeDistanceToNow } from '@/utils/date'
import ReviewDescription from './ReviewDescription'
import Score from '../Score'

import {
  Container,
  Content,
  ReviewBox,
  BookContent,
  BookInfo,
  BookName,
} from './styles'
import { useSession } from 'next-auth/react'
import { Book } from '@/interfaces/Book'
import { AuthUser } from '@/interfaces/AuthUser'

interface LatestBooksReviewed {
  id: string
  score: number
  description: string
  createdAt: string
  reviewedAtDate: Date
  book: Book
}

export function LatestBooksReviewedByUser() {
  const session = useSession()
  const [reviews, setReviews] = useState<LatestBooksReviewed[]>([])
  const [filter, setFilter] = useState('')

  const userId = (session.data?.user as AuthUser).id

  const loadInfo = useCallback(async () => {
    try {
      const response = await api.get(`users/${userId}/latest-reviews`, {
        params: {
          filter,
        },
      })

      if (response.status === 200) {
        const reviews = response.data.latestReviews

        const newReviews = reviews.map((review: LatestBooksReviewed) => ({
          ...review,
          bookTitle: review.book.title,
          bookAuthor: review.book.author,
          bookImage: review.book.imageUrl,
          reviewedAtDate: new Date(review.createdAt),
        }))

        setReviews(newReviews)
      }
    } catch (error) {
      console.error('Error fetching latest-reviews', error)
    }
  }, [userId, filter])

  useEffect(() => {
    loadInfo()
  }, [loadInfo])

  function handleChangeFilter(event: ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value)
  }

  return (
    <Container>
      <TextInput
        placeholder="Search book"
        value={filter}
        onChange={handleChangeFilter}
      />

      <Content>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <ReviewBox key={review.id}>
              <Text
                as="time"
                size="sm"
                title={formatDate(review.reviewedAtDate)}
                dateTime={review.reviewedAtDate}
              >
                {getTimeDistanceToNow(review.reviewedAtDate)}
              </Text>

              <BookContent>
                <Image
                  src={review.book.imageUrl}
                  height={134}
                  width={98}
                  alt="Review"
                />
                <BookInfo>
                  <BookName>
                    <Text as="strong">{review.book.title}</Text>
                    <Text as="span" size="sm">
                      {review.book.author}
                    </Text>
                  </BookName>

                  <Score score={review.score} />
                </BookInfo>
              </BookContent>
              <ReviewDescription description={review.description} />
            </ReviewBox>
          ))
        ) : (
          <ReviewBox>
            <Text size="sm">No reviews registered so far!</Text>
          </ReviewBox>
        )}
      </Content>
    </Container>
  )
}
