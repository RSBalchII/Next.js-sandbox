import Link from 'next/link'

import React from 'react'

export default function Navbar() {
  return (
    <nav>
        <h1>Help Desk</h1>
        <Link href="/">
            Dashboard
        </Link>
            <br />
        <Link href="/tickets">
            Tickets
        </Link>
    </nav>
  )
}
