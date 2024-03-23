import { useEffect, useState } from 'react'

export function ThemeToggler({ onThemeChange }) {
    const [theme, setTheme] = useState(() => {
        const localValue = localStorage.getItem("THEME")
        if (localValue == null) return ('dark')
        return JSON.parse(localValue)
    })

    useEffect(() => {
        document.documentElement.setAttribute('data-bs-theme', theme)
        onThemeChange(theme)
    }, [theme, onThemeChange])

    function toggleTheme() {
        const newTheme = theme === 'dark' ? 'light' : 'dark'

        setTheme(newTheme);

        // Set theme in local storage
        localStorage.setItem("THEME", JSON.stringify(newTheme))
    }

    return (
        <div className="form-check form-switch">
            <input onClick={toggleTheme} className="form-check-input"
                defaultChecked={theme === 'dark' ? false : true}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault" />
        </div>
    )
}