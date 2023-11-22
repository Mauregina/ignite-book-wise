import { useSession } from 'next-auth/react'

export default function Home() {
  const session = useSession()
  return (
    <div>
      Home<pre>{JSON.stringify(session)}</pre>
    </div>
  )
}
