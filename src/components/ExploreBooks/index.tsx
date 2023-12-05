import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { api } from '@/lib/axios'

import { Button, Text, TextInput } from '@tucupi-ui/react'

import { Container, ButtonContent, BooksContent } from './styles'
import { BookDialog } from '../BookDialog'

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

interface Book {
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
          filteredBooks.map((book) => <BookDialog book={book} key={book.id} />)
        ) : (
          <Text size="sm">Nenhum livro cadastrado!</Text>
        )}
      </BooksContent>
    </Container>
  )
}
