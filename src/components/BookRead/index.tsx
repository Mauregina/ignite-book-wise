import Image from 'next/image'
import { Text } from '@tucupi-ui/react'
import { Star } from 'phosphor-react'

import Book1 from '../../assets/book1.png'

import {
  BookBox,
  BookName,
  Container,
  Content,
  Header,
  Score,
  Descripton,
} from './styles'

export default function BookRead() {
  return (
    <Container>
      <Text size={'sm'} as="strong">
        Sua última leitura
      </Text>
      <BookBox>
        <Image src={Book1} height={150} alt="" />
        <Content>
          <Header>
            <Text as="time" size="sm">
              Há 2 dias
            </Text>
            <Score>
              <Star weight="fill" />
              <Star weight="fill" />
              <Star weight="fill" />
              <Star />
              <Star />
            </Score>
          </Header>

          <BookName>
            <Text as="strong">Entendendo Algoritmos</Text>
            <Text as="span" size="sm">
              Aditya Bhargava
            </Text>
          </BookName>

          <Descripton size="sm">
            Um guia ilustrado para programadores e outros curiosos. Um algoritmo
            nada mais é do que um procedimento passo a passo para a resolução de
            um problema. Os algoritmos que você mais utilizará como um
            programador já foram descobertos, testados e provados. Se você quer
            entendê-los, mas se recusa a estudar páginas e mais páginas de
            provas, este é o livro certo. Este guia cativante e completamente
            ilustrado torna simples aprender como utilizar os principais
            algoritmos nos seus programas. O livro Entendendo Algoritmos
            apresenta uma abordagem agradável para esse tópico essencial da
            ciência da computação. Nele, você aprenderá como aplicar algoritmos
            comuns nos problemas de programação enfrentados diariamente. Você
            começará com tarefas básicas como a ordenação e a pesquisa. Com a
            prática, você enfrentará problemas mais complexos, como a compressão
            de dados e a inteligência artificial. Cada exemplo é apresentado em
            detalhes e inclui diagramas e códigos completos em Python. Ao final
            deste livro, você terá dominado algoritmos amplamente aplicáveis e
            saberá quando e onde utilizá-los.
          </Descripton>
        </Content>
      </BookBox>
    </Container>
  )
}
