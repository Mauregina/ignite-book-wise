import Image from 'next/image'
import { Text } from '@tucupi-ui/react'
import { Star } from 'phosphor-react'

import Book1 from '../../../public/books/andarilhos.jpg'

import {
  BookBox,
  BookInfo,
  BookName,
  Container,
  Content,
  Score,
} from './styles'

export default function BookPopular() {
  return (
    <Container>
      <Text size="sm" as="strong">
        Livros populares
      </Text>
      <Content>
        <BookBox>
          <Image src={Book1} height={94} alt="" />
          <BookInfo>
            <BookName>
              <Text as="strong">A revolução dos bichos</Text>
              <Text as="span" size="sm">
                George Orwell
              </Text>
            </BookName>

            <Score>
              <Star weight="fill" />
              <Star weight="fill" />
              <Star weight="fill" />
              <Star weight="fill" />
              <Star weight="fill" />
            </Score>
          </BookInfo>
        </BookBox>
      </Content>
    </Container>
  )
}
