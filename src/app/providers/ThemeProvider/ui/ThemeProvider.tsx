import React, { FC, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const ThemeProvider:FC = ({children}) => {

    const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const defatultProps = useMemo(() => ({
        theme, setTheme: setTheme
    }), [theme])

  return (
    <ThemeContext.Provider value={defatultProps}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider