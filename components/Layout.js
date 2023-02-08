import React from 'react'
import { useDarkMode } from '@/context/dark_mode'
import Header from './Header'
import SearchFilter from './SearchFilter'

const Layout = ({children}) => {
  const {darkMode} = useDarkMode()
  return (
    <div className={`body ${darkMode? 'bbg-dark': 'bbg-white'}`}>
        <Header />
        <SearchFilter />
        {children}
    </div>
  )
}

export default Layout