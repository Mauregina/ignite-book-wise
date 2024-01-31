/* eslint-disable camelcase */
import { prisma } from '@/lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method !== 'POST') {
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

  const reviewBody = z.object({
    score: z.number(),
    description: z.string(),
    bookId: z.string(),
  })

  const { score, description, bookId } = reviewBody.parse(req.body)

  const scoreStr = score.toString()

  const userAlreadyReviedBook = await prisma.review.findFirst({
    where: {
      book_id: bookId,
      user_id: user.id,
    },
  })

  if (userAlreadyReviedBook) {
    return res.status(400).json({ message: 'User already reviewed this book.' })
  }

  await prisma.review.create({
    data: {
      score: scoreStr,
      description,
      book_id: bookId,
      user_id: user.id,
    },
  })

  res.status(201).end()
}
