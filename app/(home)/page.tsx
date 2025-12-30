import HomeCarousel from '@/components/shared/home/HomeCarousel'
import data from '@/lib/data'
import React from 'react'

const page = () => {
  return (
    <HomeCarousel items={data.carousels} />
  )
}

export default page
