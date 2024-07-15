import Link from 'next/link'
import React from 'react'
import './styles.css'

function Header() {
  return (
    <div className='header-main'>
        <div className='header-nav-left'>
            <Link href={'/'} >Home</Link>
        </div>
        <div className='header-nav-right'>
            <Link href={'/news'} >News</Link>
            <Link href={'/'} >About</Link>
        </div>
    </div>
  )
}

export default Header