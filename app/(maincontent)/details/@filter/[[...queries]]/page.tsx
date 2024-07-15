import { DUMMY_NEWS } from '@/app/news/constants'
import NewsList from '@/components/NewsList'
import Link from 'next/link'
import React from 'react'

function YearDetails({ params }: any) {
  let links: any = DUMMY_NEWS.map((news: any) => new Date(news.publishedAt).getFullYear())

  const filterNews = (year?: any, month?: any ) => {
    let news: any[] = []

    if(!year && !month){
      news = []
    }
    if(year){
      news = DUMMY_NEWS.filter((news: any) => new Date(news.publishedAt).getFullYear() === Number(year))
    }

    if(year && month){
      news = DUMMY_NEWS.filter((news: any) => new Date(news.publishedAt).getFullYear() === Number(year) && new Date(news.publishedAt).getMonth() === Number(month))
    }

    return news
  }

  
  const selectedYear = params?.queries && params?.queries[0]
  const selectedMonth = params?.queries && params?.queries[1]

  if(selectedYear && !selectedMonth){
    links = DUMMY_NEWS.map((news: any) => new Date(news.publishedAt).getFullYear() === Number(selectedYear) && new Date(news.publishedAt).getMonth())
  }

  if(selectedYear && selectedMonth){
    links = []
  }

  return (
    <div>
      <h3>Filter News : </h3>
      <ul>
        {
          links.map((link: any, i: number) => {
            const hreflink = selectedYear ? `/details/${selectedYear + '/' + link}` : `/details/${link}`
            return <Link style={{margin: 10}} href={hreflink} key={i}>{link}</Link>
          })
        }
      </ul>
      {filterNews(selectedYear, selectedMonth).length === 0 && <p style={{textDecoration: 'underline'}}><strong>No News to filter</strong></p>}
      <NewsList newsList={filterNews(selectedYear, selectedMonth) || []}/>
    </div>
  )
}

export default YearDetails