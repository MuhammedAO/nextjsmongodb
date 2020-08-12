import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <Link href="/">
          <a className="navbar-brand">Note App</a>
        </Link>

        <Link href="/new">
          <a className="create">Create Note</a>
        </Link>
      </nav>
    </React.Fragment>
  )
}

export default Navbar


