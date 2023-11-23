import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app.page'
import DefaultLayout from '@/layouts/DefaultLayout'

const Explore: NextPageWithLayout = () => {
  return <div>Explore</div>
}

Explore.getLayout = function getLayout(page: ReactElement) {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default Explore
