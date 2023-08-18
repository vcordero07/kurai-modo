// import React, { createContext, useEffect, useState } from 'react'
// import useDarkMode from 'use-dark-mode'

// export const ThemeContext = createContext()

// export const ThemeProvider = ({ children }) => {
//   const { value: isDark, enable, disable } = useDarkMode()
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     if (mounted) {
//       const darkModeFromLocalStorage = JSON.parse(
//         localStorage.getItem('darkMode')
//       )

//       if (isDark) {
//         enable()
//       } else {
//         disable()
//       }
//     }
//   }, [isDark, mounted, enable, disable])

//   return (
//     <ThemeContext.Provider value={{ isDark, toggleDarkMode: enable }}>
//       {children}
//     </ThemeContext.Provider>
//   )
// }
