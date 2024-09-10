import React from 'react'

import Link from 'next/link'
export default function page() {
  return (
    <>
    this is login page and we dont want ki yha pe header and footer dikhe jo humne app/layout.js mein rkha hai 
    <Link href={'/dashboard'}> dashboard link </Link>
    </>
  )
}
