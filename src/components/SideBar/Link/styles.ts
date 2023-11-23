import { styled } from '@tucupi-ui/react'

import Link from 'next/link'

export const LinkItem = styled(Link, {
  display: 'flex',
  alignItems: 'center',
  gap: '$2',

  textDecoration: 'none',
  color: '$gray100',
  borderLeft: '4px solid transparent',

  variants: {
    isActive: {
      true: { borderLeft: '4px solid $purple300' },
    },
  },
})
