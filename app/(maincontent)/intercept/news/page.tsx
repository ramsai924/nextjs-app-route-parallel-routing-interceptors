import NewsList from '@/components/NewsList'
import React from 'react'
import { DUMMY_NEWS } from './constants'

function News() {
  return (
    <div>
        <NewsList newsList={DUMMY_NEWS} />
    </div>
  )
}

export default News