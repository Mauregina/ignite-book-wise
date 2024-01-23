import { useSession } from 'next-auth/react'
import Rating from '@mui/material/Rating'
import { ChangeEvent, SetStateAction, useState } from 'react'
import { X, Check } from 'phosphor-react'

import { Avatar, TextArea, Text, Button } from '@tucupi-ui/react'

import { Form, Header, Reviewer, StyledRating, Actions } from './styles'

interface AuthUser {
  id: string
}

export function ReviewForm() {
  const session = useSession()
  const { data } = session
  const userId = (session?.data?.user as AuthUser).id
  const [value, setValue] = useState<number | null>(1)

  return (
    <Form as="form">
      <Header>
        <Reviewer>
          <Avatar src={data?.user?.image} imageSize="md" />
          <Text as="strong">{data?.user?.name}</Text>
        </Reviewer>
        <StyledRating
          name="rating"
          value={value}
          onChange={(
            event: ChangeEvent<{}>,
            newValue: SetStateAction<number | null>,
          ) => {
            setValue(newValue)
          }}
        />
      </Header>
      <TextArea placeholder="Escreva sua avaliação"></TextArea>
      <Actions>
        <Button size="sm" variant="secondary">
          <X weight="bold" />
        </Button>
        <Button size="sm" variant="secondary">
          <Check weight="bold" />
        </Button>
      </Actions>
    </Form>
  )
}
