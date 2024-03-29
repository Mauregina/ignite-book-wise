import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { api } from '@/lib/axios'

import { Avatar, Text } from '@tucupi-ui/react'

import { formatDate, getTimeDistanceToNow } from '@/utils/date'
import ReviewDescription from './ReviewDescription'
import Score from '../Score'

import {
  Container,
  Content,
  ReviewBox,
  Header,
  Reviewer,
  OtherInfoReviewer,
  BookContent,
  BookInfo,
  BookName,
} from './styles'
import { User } from '@/interfaces/User'
import { Book } from '@/interfaces/Book'

interface LatestBooksReviewed {
  id: string
  score: number
  description: string
  createdAt: string
  reviewedAtDate: Date
  book: Book
  user: User
}

export function LatestBooksReviewed() {
  const [reviews, setReviews] = useState<LatestBooksReviewed[]>([])

  const loadInfo = useCallback(async () => {
    try {
      const response = await api.get('latest-reviews')

      if (response.status === 200) {
        const reviews = response.data.latestReviews

        const newReviews = reviews.map((review: LatestBooksReviewed) => ({
          ...review,
          bookTitle: review.book.title,
          bookAuthor: review.book.author,
          bookImage: review.book.imageUrl,
          username: review.user.name,
          reviewedAtDate: new Date(review.createdAt),
        }))

        setReviews(newReviews)
      }
    } catch (error) {
      console.error('Error fetching latest-reviews: ', error)
    }
  }, [])

  useEffect(() => {
    loadInfo()
  }, [loadInfo])

  return (
    <Container>
      <Text size="sm" as="strong">
        Latest books reviewed
      </Text>
      <Content>
        {reviews.length > 0 ? (
          reviews.map((review) => (
            <ReviewBox key={review.id}>
              <Header>
                <Reviewer>
                  <Avatar src={review.user.image} imageSize="md" />
                  <OtherInfoReviewer>
                    <Text as="strong">{review.user.name}</Text>
                    <Text
                      as="time"
                      size="sm"
                      title={formatDate(review.reviewedAtDate)}
                      dateTime={review.reviewedAtDate}
                    >
                      {getTimeDistanceToNow(review.reviewedAtDate)}
                    </Text>
                  </OtherInfoReviewer>
                </Reviewer>
                <Score score={review.score} />
              </Header>
              <BookContent>
                <Image
                  src={review.book.imageUrl}
                  height={152}
                  width={108}
                  alt="Review"
                />
                <BookInfo>
                  <BookName>
                    <Text as="strong">{review.book.title}</Text>
                    <Text as="span" size="sm">
                      {review.book.author}
                    </Text>
                  </BookName>

                  <ReviewDescription description={review.description} />
                </BookInfo>
              </BookContent>
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
