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

  const reviews = await prisma.review.findMany({
    where: {
      user_id: userId,
    },
    include: {
      book: {
        include: {
          BookCategory: {
            include: {
              category: true,
            },
          },
        },
      },
    },
  })

  const booksReviewed = reviews.length

  const pagesRead = reviews.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.book.pages
  }, 0)

  const authorReadSet = new Set()
  reviews.forEach((item) => {
    authorReadSet.add(item.book.author)
  })
  const authorsRead = authorReadSet.size

  interface CategoryCount {
    name: string
    total: number
  }

  const categoriesRead = reviews.reduce(
    (accumulator: CategoryCount[], currentObject) => {
      currentObject.book.BookCategory.forEach((item) => {
        const categoryName = item.category.name
        const existingCategory: CategoryCount | undefined = accumulator.find(
          (category: CategoryCount) => category.name === categoryName,
        )

        if (existingCategory) {
          existingCategory.total += 1
        } else {
          accumulator.push({ name: categoryName, total: 1 })
        }
      })
      return accumulator
    },
    [],
  )

  const sortedCategoriesRead = categoriesRead.sort((a, b) => b.total - a.total)

  const categoriesMostReadArray = sortedCategoriesRead.reduce(
    (accumulator: CategoryCount[], currentObject) => {
      if (accumulator.length > 0) {
        if (accumulator[0].total === currentObject.total) {
          accumulator.push(currentObject)
        }
      } else {
        accumulator.push(currentObject)
      }

      return accumulator
    },
    [],
  )

  const categoriesMostRead = categoriesMostReadArray.map(
    (item) => item.name.charAt(0).toUpperCase() + item.name.slice(1),
  )

  const report = {
    pagesRead,
    booksReviewed,
    authorsRead,
    categoriesMostRead,
  }

  res.status(200).json({ report })
}
