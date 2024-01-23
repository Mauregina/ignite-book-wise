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

  const data = await prisma.book.findMany({
    where: {
      Review: {
        some: {},
      },
    },
    include: {
      Review: {
        select: {
          score: true,
        },
      },
    },
  })

  const result = data.map((book) => {
    const customRound = (value: number) => {
      if (value < 1.5) {
        return Math.floor(value)
      } else {
        return Math.round(value * 2) / 2
      }
    }
    const reviewCount = book.Review.length
    const reviewSumScore = book.Review.reduce(
      (sum, review) => sum + parseInt(review.score),
      0,
    )
    const reviewScoreAverage = reviewSumScore / reviewCount
    const reviewScore = customRound(reviewScoreAverage)

    return {
      ...book,
      imageUrl: book.image_url,
      reviewCount,
      reviewSumScore,
      reviewScore,
    }
  })

  const resultSliced = result.slice(0, 10)

  const resultSorted = resultSliced.sort((a, b) => {
    if (b.reviewCount !== a.reviewCount) {
      return b.reviewCount - a.reviewCount
    } else {
      return b.reviewSumScore - a.reviewSumScore
    }
  })

  res.status(200).json({ popularBooks: resultSorted })
}
