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

  const reviews = await prisma.review.findMany({
    orderBy: {
      created_at: 'desc',
    },
    include: {
      book: true,
      user: true,
    },
  })

  if (!reviews) {
    return res.json({ latestReviews: [] })
  }

  const latestReviews = reviews.slice(0, 5)

  const newLatestReviews = latestReviews.map(
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
