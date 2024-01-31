import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'

import { Book, Tag, X } from 'phosphor-react'

import { Avatar, Text } from '@tucupi-ui/react'

import Score from '@/components/Score'

import {
  AddReviewButton,
  BookCategoryPages,
  BookInfo,
  BookInfoBox,
  BookName,
  BookTitleAuthorScore,
  CategoryPages,
  CloseButton,
  DialogContent,
  Divider,
  Header,
  OtherInfoReviewer,
  Overlay,
  ReviewBox,
  Reviewer,
  ReviewsTitle,
  ScoreContainer,
} from './styles'
import { formatDate, getTimeDistanceToNow } from '@/utils/date'
import { ReviewForm } from '@/components/ReviewForm'
import { useSession } from 'next-auth/react'
import { LoginDialog } from '@/components/LoginDialog'
import { Fragment, useState } from 'react'

interface User {
  id: string
  name: string
  image: string
}

interface Category {
  id: string
  name: string
}

interface Review {
  id: string
  score: number
  description: string
  created_at: string
  user: User
}

interface BookDialogProps {
  book: {
    id: string
    title: string
    author: string
    description: string
    imageUrl: string
    categories: Category[]
    reviews: Review[]
    reviewScore: number
    reviewCount: number
    pages: number
  }
}

export function BookDialogPortal({ book }: BookDialogProps) {
  const { data: session } = useSession()
  const isLogged = session
  const [showForm, setShowForm] = useState(false)

  const ReviewActionWrapper = isLogged ? Fragment : LoginDialog

  function handleClickReview() {
    if (isLogged) {
      setShowForm(true)
    }
  }

  function handleCloseFormReview() {
    setShowForm(false)
  }

  console.log(isLogged)
  console.log(ReviewActionWrapper)

  return (
    <Dialog.Portal>
      <Overlay />
      <DialogContent>
        <CloseButton>
          <X weight="bold" size={24} />
        </CloseButton>
        <BookInfoBox>
          <BookTitleAuthorScore>
            <Image src={book.imageUrl} height={242} width={172} alt="" />
            <BookInfo>
              <BookName>
                <Text as="strong">{book.title}</Text>
                <Text as="span" size="sm">
                  {book.author}
                </Text>
              </BookName>
              {book.reviewCount > 0 ? (
                <ScoreContainer>
                  <Score score={book.reviewScore} />
                  <Text>
                    {`${book.reviewCount} ${
                      book.reviewCount > 1 ? 'reviews' : 'review'
                    }`}
                  </Text>
                </ScoreContainer>
              ) : (
                <Text sizw="sm">No review!</Text>
              )}
            </BookInfo>
          </BookTitleAuthorScore>
          <Divider />
          <BookCategoryPages>
            <CategoryPages>
              <Book size={24} />
              <div>
                <Text as="span">Category</Text>
                <Text as="strong">
                  {book.categories
                    .map(
                      (category) =>
                        category.name.charAt(0).toUpperCase() +
                        category.name.slice(1),
                    )
                    .join(', ')}
                </Text>
              </div>
            </CategoryPages>
            <CategoryPages>
              <Tag size={24} />
              <div>
                <Text as="span">Pages</Text>
                <Text as="strong">{book.pages}</Text>
              </div>
            </CategoryPages>
          </BookCategoryPages>
        </BookInfoBox>

        <>
          <ReviewsTitle>
            <Text as="span" size="sm">
              Reviews
            </Text>
            <ReviewActionWrapper>
              <AddReviewButton onClick={handleClickReview}>
                Add a review
              </AddReviewButton>
            </ReviewActionWrapper>
          </ReviewsTitle>
          {showForm && (
            <ReviewForm
              bookId={book.id}
              onCloseFormReview={handleCloseFormReview}
            />
          )}
          {book.reviewCount > 0 ? (
            book.reviews.map((review) => {
              const reviewedAtDate = new Date(review.created_at)
              return (
                <ReviewBox key={review.id}>
                  <Header>
                    <Reviewer>
                      <Avatar src={review.user.image} imageSize="md" />
                      <OtherInfoReviewer>
                        <Text as="strong">{review.user.name}</Text>
                        <Text
                          as="time"
                          size="sm"
                          title={formatDate(reviewedAtDate)}
                          dateTime={reviewedAtDate}
                        >
                          {getTimeDistanceToNow(reviewedAtDate)}
                        </Text>
                      </OtherInfoReviewer>
                    </Reviewer>
                    <Score score={review.score} />
                  </Header>
                  <Text size="sm">{review.description}</Text>
                </ReviewBox>
              )
            })
          ) : (
            <ReviewBox>No review!</ReviewBox>
          )}
        </>
      </DialogContent>
    </Dialog.Portal>
  )
}
