'use client'
import { Theme, ThemeContextType } from "@/shared/types/themeProvider"
import React, { createContext, useEffect, useState, useContext } from "react"

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)


export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext)

    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider')
    }

    return context
}
export const ThemeProvider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    const [theme, setTheme] = useState<Theme>('dark')
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        const storedTheme = localStorage.getItem('theme') as Theme | null
        if (storedTheme) {
            setTheme(storedTheme)
        }
    }, [])

    useEffect(() => {
        if (mounted) {
            localStorage.setItem('theme', theme)
            document.documentElement.classList.toggle('dark', theme === 'dark')
        }
    }, [theme, mounted])

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <main className={`${theme} text-foreground`}>
                {children}
            </main>
        </ThemeContext.Provider>
    )
}