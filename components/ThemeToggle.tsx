"use client"

import { useTheme } from "@/components/ThemeContext"
import { Form } from "react-bootstrap"

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Form.Check
      type="switch"
      id="theme-switch"
      checked={theme === "dark"}
      onChange={toggleTheme}
      label={theme === "dark" ? "Mode sombre" : "Mode clair"}
    />
  )
}