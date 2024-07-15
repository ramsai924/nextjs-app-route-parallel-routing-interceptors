import Link from 'next/link'
import React from 'react'

function NewsItem({ news, showLink }: any) {
  return (
    <div className='news-list__container'>
        <div className='news-list__header'>
            <p className='news-list__header--title'>{news.title}</p>
            <p className='news-list__header--desc'>{news.description}</p>
        </div>
        <div className='news-list__content'>
            <p className='news-list__content--author'>- {news.author}</p>
            <p className='news-list__content--conetnt-text'><span>{news.content}</span></p>
            <p>Published at : {news.publishedAt && new Date(news.publishedAt).toLocaleDateString()}</p>
            <Link href={`/news/${news.id}/modal`}>View News modal details</Link>
            <br />
            {showLink && <Link href={`/news/${news.id}`}>View News</Link>}
        </div>
    </div>
  )
}

export default NewsItem