import React from 'react'
import './styles.css'
import Link from 'next/link'
import NewsItem from './NewsItem'

function NewsList({ newsList }: any) {
  return (
    <div className='news-list'>
        {
            newsList.map((news: any) => (
                <NewsItem key={news.id} news={news} showLink={true} />
            ))
        }
        
    </div>
  )
}

export default NewsList