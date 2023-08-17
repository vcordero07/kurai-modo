import React, { useState } from 'react'
import Navbar from './Navbar'
import { ThemeProvider } from './ThemeContext'

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <ThemeProvider>
        <Navbar toggleSidebar={toggleSidebar} />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Layout
