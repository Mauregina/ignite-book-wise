import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'GET') {
    return res.status(405).end()
  }

  const userId = String(req.query.userid)

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!user) {
    return res.status(400).json({ message: 'User does not exist.' })
  }

  const review = await prisma.review.findFirst({
    where: {
      user_id: userId,
    },
    orderBy: {
      created_at: 'desc',
    },
  })

  if (!review) {
    return res.json({ lastread: {} })
  }

  const book = await prisma.book.findUnique({
    where: {
      id: review.book_id,
    },
  })

  if (!book) {
    return res.status(400).json({ message: 'Book does not exist.' })
  }

  const lastRead = {
    name: book.title,
    author: book.author,
    review: review.description,
    score: review.score,
    reviewed_at: review.created_at,
  }

  res.status(200).json({ lastRead })
}
