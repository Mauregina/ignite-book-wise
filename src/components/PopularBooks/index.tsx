import Image from 'next/image'
import { useEffect, useState } from 'react'
import { api } from '@/lib/axios'

import { Text } from '@tucupi-ui/react'

import { BookBox, BookInfo, BookName, Container, Content } from './styles'
import Score from '../Score'

interface PopularBooks {
  id: string
  title: string
  author: string
  description: string
  imageUrl: string
  reviewScore: number
}

export function PopularBooks() {
  const [popularBooks, setPopularBooks] = useState<PopularBooks[]>([])

  const loadInfo = async () => {
    const response = await api.get('popular-books')

    if (response.status === 200) {
      const data = response.data.popularBooks

      setPopularBooks(data)
    }
  }

  useEffect(() => {
    loadInfo()
  }, [])

  return (
    <Container>
      <Text size="sm" as="strong">
        Popular books
      </Text>
      <Content>
        {popularBooks.length > 0 ? (
          popularBooks.map((item) => (
            <BookBox key={item.id}>
              <Image src={item.imageUrl} height={94} width={64} alt="" />
              <BookInfo>
                <BookName>
                  <Text as="strong">{item.title}</Text>
                  <Text as="span" size="sm">
                    {item.author}
                  </Text>
                </BookName>
                <Score score={item.reviewScore} />
              </BookInfo>
            </BookBox>
          ))
        ) : (
          <BookBox>
            <Text size="sm">No reviews registered so far!!</Text>
          </BookBox>
        )}
      </Content>
    </Container>
  )
}
