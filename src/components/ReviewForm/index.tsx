import { useSession } from 'next-auth/react'
import { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { X, Check } from 'phosphor-react'

import { Avatar, TextArea, Text, Button } from '@tucupi-ui/react'

import {
  Form,
  Header,
  Reviewer,
  StyledRating,
  Actions,
  DescriptionContainer,
} from './styles'
import { api } from '@/lib/axios'
import { BookContext } from '../ExploreBooks'
import { AuthUser } from '@/interfaces/AuthUser'

interface ReviewFormProps {
  bookId: string
  onCloseFormReview: () => void
}

export function ReviewForm({ bookId, onCloseFormReview }: ReviewFormProps) {
  const session = useSession()
  const userId = (session?.data?.user as AuthUser).id
  const { data } = session
  const [score, setScore] = useState(0)
  const [description, setDescription] = useState('')
  const [error, setError] = useState('')

  const { handleUpdateBooks } = useContext(BookContext)

  const handleChangeScore = (newValue: number) => {
    if (newValue === null) newValue = 0
    const value = newValue || 0
    setScore(value)
  }

  const handleSubmitReview = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (description === '') {
      setError('Description is required')
      return
    } else {
      setError('')
    }

    try {
      const response = await api.post(`users/${userId}/review`, {
        score,
        description,
        bookId,
      })

      if (response.status === 201) {
        handleUpdateBooks()
        onCloseFormReview()
      }
    } catch (error: any) {
      if (error.response.status === 400) {
        setError(error.response.data.message)
      } else {
        console.error('Error adding review:', error)
      }
    }
  }

  return (
    <Form as="form" onSubmit={handleSubmitReview}>
      <Header>
        <Reviewer>
          <Avatar src={data?.user?.image} imageSize="md" />
          <Text as="strong">{data?.user?.name}</Text>
        </Reviewer>
        <StyledRating
          name="rating"
          precision={0.5}
          value={score}
          defaultValue={0}
          onChange={(e: ChangeEvent<{}>, newValue: number) =>
            handleChangeScore(newValue)
          }
        />
      </Header>
      <DescriptionContainer>
        <TextArea
          placeholder="Add your comment here"
          value={description}
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
            setDescription(e.target.value)
          }
        ></TextArea>
        {error && (
          <Text as="p" size="sm">
            {error}
          </Text>
        )}
      </DescriptionContainer>

      <Actions>
        <Button size="sm" variant="secondary" onClick={onCloseFormReview}>
          <X weight="bold" />
        </Button>
        <Button size="sm" variant="secondary" type="submit">
          <Check weight="bold" />
        </Button>
      </Actions>
    </Form>
  )
}
