import React from 'react'
import './Page404.css'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <div className='not-found'>
        <img src="/assets/images/page-404-error.jpg" alt="error" />
        <Link to={'/'} className='btn btn-primary btn-large'>Go to the Main Page</Link>
    </div>
  )
}

export default Page404