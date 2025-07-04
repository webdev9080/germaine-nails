"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("light")

  // Charger le thème au démarrage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme | null
    if (storedTheme) {
      setThemeState(storedTheme)
      updateHtmlClass(storedTheme)
    } else {
      // Détection mode sombre OS par défaut
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      const defaultTheme = prefersDark ? "dark" : "light"
      setThemeState(defaultTheme)
      updateHtmlClass(defaultTheme)
    }
  }, [])

  // Met à jour la classe sur html et body
  const updateHtmlClass = (theme: Theme) => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark")
      document.body.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
      document.body.classList.remove("dark")
    }
  }

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
    localStorage.setItem("theme", newTheme)
    updateHtmlClass(newTheme)
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error("useTheme must be utilisé à l’intérieur de ThemeProvider")
  }
  return context
} 