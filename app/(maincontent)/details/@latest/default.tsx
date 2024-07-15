import { DUMMY_NEWS } from '@/app/news/constants'
import NewsList from '@/components/NewsList'
import React from 'react'

function LatestDetails() {
  return (
    <div>
      <h3>Latest News :</h3>
      <NewsList newsList={DUMMY_NEWS}/>
    </div>
  )
}

export default LatestDetails