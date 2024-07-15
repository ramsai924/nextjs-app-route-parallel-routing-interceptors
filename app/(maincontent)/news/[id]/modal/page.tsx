import React from 'react'
import { DUMMY_NEWS } from '../../constants'
import NewsItem from '@/components/NewsList/NewsItem'

function DetailsInModal({ params }: any) {
    const newsDetails =  DUMMY_NEWS.find((news: any) => news.id === params.id)
  return (
    <div>
        <p>Modals</p>
        <NewsItem news={newsDetails} />
    </div>
  )
}

export default DetailsInModal