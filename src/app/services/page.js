import Link from 'next/link'
import React from 'react'

const services = () => {
  return (
    <div>services page <Link href={'/about'}>About</Link></div>
  )
}

export default services