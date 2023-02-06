import Link from "next/link"
import { useDarkMode } from "@/context/dark_mode"

const Header = () => {
    const {darkMode, changeDarkMode} = useDarkMode()
    return (
        <header className={`bg-white ${darkMode?'bg-dark': ''} `}>
            <div className="header">
                <h1><Link href={'/'}>Where in the world?</Link></h1>
                <div className="mode-container">
                    <span
                        onClick={changeDarkMode}
                        className={`dark-toggle ${darkMode? 'toggle': ''}`}
                    >
                        <span className="slides"></span>
                    </span>
                    <h1>Dark Mode</h1>
                </div>
            </div>
        </header>
    )
}

export default Header