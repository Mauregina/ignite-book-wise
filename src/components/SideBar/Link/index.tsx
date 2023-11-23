import { Text } from '@tucupi-ui/react'
import { LinkItem } from './styles'
import { ReactNode } from 'react'
import { useRouter } from 'next/router'

interface LinkProps {
  children: ReactNode
  text: string
  href: string
}

export default function Link({ children, text, href }: LinkProps) {
  const router = useRouter()
  const isActive = router.pathname === href

  return (
    <LinkItem href={href} isActive={isActive}>
      <span>{'  '}</span>
      {children}
      <Text size={'sm'}>{text}</Text>
    </LinkItem>
  )
}
