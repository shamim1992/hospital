import Link from 'next/link'
import React from 'react'

const about = () => {
  return (
    <div>About page - <Link href={'/services'}>Service Page</Link></div>
  )
}

export default about