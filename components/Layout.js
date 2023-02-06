import React from 'react'
import { useDarkMode } from '@/context/dark_mode'
import Header from './Header'

const Layout = ({children}) => {
  const {darkMode} = useDarkMode()
  return (
    <div className={`body ${darkMode? 'bbg-dark': 'bbg-white'}`}>
        <Header />
        {children}
    </div>
  )
}

export default Layout