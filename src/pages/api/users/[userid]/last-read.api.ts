/* eslint-disable camelcase */
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
    include: {
      book: true,
      user: true,
    },
  })

  if (!review) {
    return res.json({ lastread: {} })
  }

  const lastRead = {
    ...review,
    createdAt: review.created_at,
    book: {
      ...review.book,
      imageUrl: review.book.image_url,
    },
    user: {
      ...review.user,
      imageUrl: review.user.image,
    },
  }

  res.status(200).json({ lastRead })
}
