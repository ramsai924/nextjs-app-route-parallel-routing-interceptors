import React from 'react'
import { DUMMY_NEWS } from '../constants'
import NewsItem from '@/components/NewsList/NewsItem'

function NewsDetails({ params }: any) {
  const newsDetails =  DUMMY_NEWS.find((news: any) => news.id === params.id)

  return (
    <NewsItem news={newsDetails} showLink={false} />
  )
}

export default NewsDetails