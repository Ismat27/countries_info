import { createContext, useContext, useState } from "react";
const Context = createContext()

const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false)
    const changeDarkMode = () => {
        setDarkMode(prev => !prev)
    }
    return (
        <Context.Provider
            value={{
                darkMode,
                changeDarkMode
            }}
        >
            {children}
        </Context.Provider>
    )
}

const useDarkMode = () => {
    return useContext(Context)
}

export { useDarkMode }

export default DarkModeProvider