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

  const categoryId = String(req.query.category)
  const filter = String(req.query.filter)

  const data = await prisma.book.findMany({
    include: {
      Review: {
        include: {
          user: true,
        },
        orderBy: {
          created_at: 'desc',
        },
      },
      BookCategory: {
        include: {
          category: true,
        },
      },
    },
    where: {
      BookCategory: {
        some: {
          category_id: categoryId !== '' ? categoryId : undefined,
        },
      },
      AND: [
        {
          OR: [
            {
              title: {
                contains: filter !== '' ? filter : undefined,
              },
            },
            {
              author: {
                contains: filter !== '' ? filter : undefined,
              },
            },
          ],
        },
      ],
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

    const categories = book.BookCategory.map((category) => category.category)
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
      categories,
      reviews: book.Review,
      reviewCount,
      reviewSumScore,
      reviewScore,
    }
  })

  const resultSorted = result.sort((a, b) => {
    if (b.reviewCount !== a.reviewCount) {
      return b.reviewCount - a.reviewCount
    } else {
      return b.reviewSumScore - a.reviewSumScore
    }
  })

  res.status(200).json({ books: resultSorted })
}
