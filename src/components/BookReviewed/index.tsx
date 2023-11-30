import Image from 'next/image'

import { Avatar, Text } from '@tucupi-ui/react'
import { Star } from 'phosphor-react'

import Book1 from '../../assets/book1.png'
import Book2 from '../../assets/book2.png'
import Book3 from '../../assets/book3.png'

import {
  Container,
  Content,
  ReviewBox,
  Header,
  Reviewer,
  OtherInfoReviewer,
  BookContent,
  BookInfo,
  Score,
  BookName,
} from './styles'
import ReviewDescription from './ReviewDescription'

export default function BookReviewed() {
  return (
    <Container>
      <Text size="sm" as="strong">
        Avaliações mais recentes
      </Text>
      <Content>
        <ReviewBox>
          <Header>
            <Reviewer>
              <Avatar />
              <OtherInfoReviewer>
                <Text as="strong">Jaxson Dias</Text>
                <Text as="span" size="sm">
                  Hoje
                </Text>
              </OtherInfoReviewer>
            </Reviewer>
            <Score>
              <Star weight="fill" />
              <Star weight="fill" />
              <Star weight="fill" />
              <Star weight="fill" />
              <Star weight="fill" />
            </Score>
          </Header>
          <BookContent>
            <Image src={Book3} height={170} alt="" />
            <BookInfo>
              <BookName>
                <Text as="strong">O guia do mochileiro das galáxias</Text>
                <Text as="span" size="sm">
                  Douglas Adams
                </Text>
              </BookName>

              <ReviewDescription
                description="Tudo começou quando um colega estava sentado na escada em frente a
      biblioteca pública e viu um livro caido no chão. Ele pegou, olhou, mas não
      tinha carimbos nem marcas de que pertencesse a biblioteca. Sem chances de
      encontrar o verdadeiro dono, começou a ler. Tudo começa com um sujeito que
      iria perder a casa pois ela estava no ponto C que fica entre o ponto A e o
      ponto B, entre os quais seria construída uma auto-estrada. Só que esse
      comentário feito por um colega, no meio do segundo grau, ficou só no
      comentário, até o dia em que minha tia comentou sobre um livro que estava
      lendo, onde um sujeito que iria perder a casa pois ela estava no ponto C
      que fica entre o ponto A e o ponto B, entre os quais seria construída uma
      auto-estrada. Tudo começou a fazer sentido: o livro não era uma miragem de
      porta de biblioteca, e fui correr atrás do bendito. Finalmente consegui
      por as mãos nele, uma edição em inglês, com os três primeiros livros da
      série, que começava dizendo que um sujeito que iria perder a casa pois ela
      estava no ponto C que fica entre o ponto A e o ponto B, entre os quais
      seria construída uma auto-estrada. Não que ele devesse se desesperar,
      afinal a terra ficava exatamente no ponto C, entre um ponto A e um ponto B
      entre os quais seria construída uma auto-estrada inter-planetária, e no
      meio desse non-sense é que começa a maior aventura de todos os tempos."
              />
            </BookInfo>
          </BookContent>
        </ReviewBox>
        <ReviewBox>
          <Header>
            <Reviewer>
              <Avatar />
              <OtherInfoReviewer>
                <Text as="strong">Maura Regina</Text>
                <Text as="span" size="sm">
                  Hoje
                </Text>
              </OtherInfoReviewer>
            </Reviewer>
            <Score>
              <Star weight="fill" />
              <Star weight="fill" />
              <Star />
              <Star />
              <Star />
            </Score>
          </Header>
          <BookContent>
            <Image src={Book1} height={170} alt="" />
            <BookInfo>
              <BookName>
                <Text as="strong">Entendendo Algoritmos</Text>
                <Text as="span" size="sm">
                  Aditya Bhargava
                </Text>
              </BookName>

              <ReviewDescription description="Ótimas explicações sobre os principais algoritmos e estruturas de dados, com exemplo de código em Python. Super fácil de acompanhar e entender. Uma verdadeira aula." />
            </BookInfo>
          </BookContent>
        </ReviewBox>
        <ReviewBox>
          <Header>
            <Reviewer>
              <Avatar />
              <OtherInfoReviewer>
                <Text as="strong">Brandon Botosh</Text>
                <Text as="span" size="sm">
                  Ontem
                </Text>
              </OtherInfoReviewer>
            </Reviewer>
            <Score>
              <Star weight="fill" />
              <Star weight="fill" />
              <Star />
              <Star />
              <Star />
            </Score>
          </Header>
          <BookContent>
            <Image src={Book2} height={170} alt="" />
            <BookInfo>
              <BookName>
                <Text as="strong">O Hobbit</Text>
                <Text as="span" size="sm">
                  J.R.R. Tolkien
                </Text>
              </BookName>

              <ReviewDescription
                description="Não tenho coragem de dar menos do que 5/5 pra esse livro. A complexidade desta história criada por Tolkien é de se admirar e dá um nó na minha cabeça só de pensar. Mas eu esperava uma coisa...diferente. Se você gosta de uma leitura dramática e rápido leia não que não vai rolar. Eu torcendo pra ter um drama no decorrer da história e nada. É uma leitura bem lenta também e eu me acostumei à essa escrita logo no início. Tem mais à ver com O Hobbit,o primeiro filme e resto da trilogia nem sei o que aconteceu. O que houve com aqueles filmes eu não sei. Três filmes feitos de um livro um menor que 300 páginas. Doideira.
Grandes expectativas para O Senhor Dos Anéis."
              />
            </BookInfo>
          </BookContent>
        </ReviewBox>
      </Content>
    </Container>
  )
}
