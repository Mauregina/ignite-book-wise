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
  const filter = String(req.query.filter)

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!user) {
    return res.status(400).json({ message: 'User does not exist.' })
  }

  const reviews = await prisma.review.findMany({
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: true,
    },
    where: {
      user_id: userId,
      book: {
        title: {
          contains: filter !== '' ? filter : undefined,
        },
      },
    },
  })

  if (!reviews) {
    return res.json({ latestReviews: [] })
  }

  const newLatestReviews = reviews.map(
    ({ book: { image_url, ...book }, created_at, ...review }) => ({
      ...review,
      createdAt: created_at,
      book: {
        ...book,
        imageUrl: image_url,
      },
    }),
  )

  res.status(200).json({ latestReviews: newLatestReviews })
}
