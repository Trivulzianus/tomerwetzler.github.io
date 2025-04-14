import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-100 py-4">
      <div className="container mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} tomerw. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
