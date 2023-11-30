import Image from 'next/image'
import { Text } from '@tucupi-ui/react'
import { Star } from 'phosphor-react'

import Book1 from '../../assets/book1.png'
import Book2 from '../../assets/book2.png'
import Book3 from '../../assets/book3.png'
import Book4 from '../../assets/book4.png'

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
          <Image src={Book4} height={94} alt="" />
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
        <BookBox>
          <Image src={Book2} height={94} alt="" />
          <BookInfo>
            <BookName>
              <Text as="strong">O Hobbit</Text>
              <Text as="span" size="sm">
                J.R.R. Tolkien
              </Text>
            </BookName>

            <Score>
              <Star weight="fill" />
              <Star weight="fill" />
              <Star weight="fill" />
              <Star weight="fill" />
              <Star />
            </Score>
          </BookInfo>
        </BookBox>
        <BookBox>
          <Image src={Book3} height={94} alt="" />
          <BookInfo>
            <BookName>
              <Text as="strong">O guia do mochileiro das galáxias</Text>
              <Text as="span" size="sm">
                Douglas Adams
              </Text>
            </BookName>

            <Score>
              <Star weight="fill" />
              <Star weight="fill" />
              <Star />
              <Star />
              <Star />
            </Score>
          </BookInfo>
        </BookBox>
      </Content>
    </Container>
  )
}
