import * as Dialog from '@radix-ui/react-dialog'
import Image from 'next/image'

import { Text } from '@tucupi-ui/react'

import { BookInfo, BookName, ReviewBox } from './styles'
import Score from '../Score'
import { useState } from 'react'
import { BookDialogPortal } from './BookDialogPortal'

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

export function BookDialog({ book }: BookDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <ReviewBox key={book.id}>
          <Image src={book.imageUrl} height={152} width={108} alt="" />
          <BookInfo>
            <BookName>
              <Text as="strong">{book.title}</Text>
              <Text as="span" size="sm">
                {book.author}
              </Text>
            </BookName>
            {book.reviewCount > 0 ? (
              <Score score={book.reviewScore} />
            ) : (
              <Text sizw="sm">Sem avaliação!</Text>
            )}
          </BookInfo>
        </ReviewBox>
      </Dialog.Trigger>
      {open && <BookDialogPortal book={book} />}
    </Dialog.Root>
  )
}
