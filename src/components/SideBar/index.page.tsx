import Link from 'next/link'
import { Container } from './styles'

export default function SideBar() {
  return (
    <Container>
      <div>Logo</div>
      <div>
        <ul>
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/explore">Explore</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
        </ul>
      </div>
      <div>Button</div>
      <div>----------</div>
    </Container>
  )
}
