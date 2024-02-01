import {
  ChangeEvent,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '@/lib/axios'

import { Text, TextInput } from '@tucupi-ui/react'

import { Container, ButtonContent, BooksContent, StyledButton } from './styles'
import { BookDialog } from '../BookDialog'
import { Book } from '@/interfaces/Book'
import { Category } from '@prisma/client'

interface BookContextType {
  handleUpdateBooks: () => void
}

export const BookContext = createContext({} as BookContextType)

export function ExploreBooks() {
  const [books, setBooks] = useState<Book[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [categorySelected, setCategorySelected] = useState('')
  const [filter, setFilter] = useState('')

  const [updateBooks, setUpdateBooks] = useState(false)

  const handleUpdateBooks = () => {
    setUpdateBooks(true)
  }

  const handleCategoryClick = (category: string) => {
    setCategorySelected(category)
  }

  const handleChangeFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value)
  }

  const loadCategories = useCallback(async () => {
    try {
      const response = await api.get('categories')

      if (response.status === 200) {
        const data = response.data.categories
        setCategories(data)
      }
    } catch (error) {
      console.error('Error fetching categories', error)
    }
  }, [])

  const loadInfo = useCallback(async () => {
    try {
      const response = await api.get('books', {
        params: {
          category: categorySelected,
          filter,
        },
      })

      if (response.status === 200) {
        const data = response.data.books
        setBooks(data)
        setUpdateBooks(false)
      }
    } catch (error) {
      console.error('Error fetching books', error)
    }
  }, [categorySelected, filter])

  useEffect(() => {
    loadInfo()
  }, [loadInfo])

  useEffect(() => {
    if (updateBooks) {
      loadInfo()
    }
  }, [loadInfo, updateBooks])

  useEffect(() => {
    loadCategories()
  }, [loadCategories])

  return (
    <BookContext.Provider value={{ handleUpdateBooks }}>
      <Container>
        <TextInput
          placeholder="Search book or author"
          value={filter}
          onChange={handleChangeFilter}
        />
        <ButtonContent>
          <StyledButton
            active={categorySelected === ''}
            variant="secondary"
            onClick={() => handleCategoryClick('')}
          >
            All
          </StyledButton>
          {categories &&
            categories.map((category) => (
              <StyledButton
                active={category.id === categorySelected}
                key={category.id}
                variant="secondary"
                onClick={() => handleCategoryClick(category.id)}
              >
                {category.name}
              </StyledButton>
            ))}
        </ButtonContent>
        <BooksContent>
          {books.length > 0 ? (
            books.map((book) => <BookDialog book={book} key={book.id} />)
          ) : (
            <Text size="sm">No books registered in this category!</Text>
          )}
        </BooksContent>
      </Container>
    </BookContext.Provider>
  )
}
