"use client"
import React from 'react'
import { DUMMY_NEWS } from '../../../constants'
// import NewsItem from '@/components/NewsList/NewsItem'
import { useRouter } from 'next/navigation'

function DetailsInModalIntercept({ params }: any) {
    const newsDetails =  DUMMY_NEWS.find((news: any) => news.id === params.id)
    const router = useRouter()
  return (
    <div style={{ width: '50%', position: 'fixed', height: '100%', background: 'lightgrey', top: '50%', left: '20%' }}>
        <h3>Modal intercepted</h3>
        <button onClick={router.back}>close</button>
        {/* <NewsItem news={newsDetails} /> */}
    </div>
  )
}

export default DetailsInModalIntercept