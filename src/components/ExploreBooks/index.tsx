import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import { api } from '@/lib/axios'

import { Button, Text, TextInput } from '@tucupi-ui/react'

import Score from '../Score'

import {
  Container,
  ButtonContent,
  BooksContent,
  ReviewBox,
  BookInfo,
  BookName,
} from './styles'

interface Category {
  id: string
  name: string
}

interface Book {
  id: string
  title: string
  author: string
  description: string
  imageUrl: string
  reviewScore: number
  reviewCount: number
}

export function ExploreBooks() {
  const [books, setBooks] = useState<Book[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [categorySelected, setCategorySelected] = useState('')
  const [filter, setFilter] = useState('')

  const loadCategories = useCallback(async () => {
    const response = await api.get('categories')

    if (response.status === 200) {
      const data = response.data.categories
      setCategories(data)
    }
  }, [])

  useEffect(() => {
    loadCategories()
  }, [loadCategories])

  const loadInfo = useCallback(async () => {
    const response = await api.get('books', {
      params: {
        category: categorySelected,
      },
    })

    if (response.status === 200) {
      const data = response.data.books
      setBooks(data)
    }
  }, [categorySelected])

  useEffect(() => {
    loadInfo()
  }, [loadInfo])

  function handleCategoryClick(category: string) {
    setCategorySelected(category)
  }

  function handleChangeFilter(event: ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value)
  }

  const filteredBooks =
    filter === ''
      ? books
      : books.filter(
          (item) =>
            item.title.toLowerCase().includes(filter.toLowerCase()) ||
            item.author.toLowerCase().includes(filter.toLowerCase()),
        )

  return (
    <Container>
      <TextInput
        placeholder="Buscar livro ou autor"
        value={filter}
        onChange={handleChangeFilter}
      />
      <ButtonContent>
        <Button autoFocus onClick={() => handleCategoryClick('')}>
          Tudo
        </Button>
        {categories &&
          categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </Button>
          ))}
      </ButtonContent>
      <BooksContent>
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
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
          ))
        ) : (
          <Text size="sm">Nenhum livro cadastrado!</Text>
        )}
      </BooksContent>
    </Container>
  )
}
