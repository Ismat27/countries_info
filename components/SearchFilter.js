import { useState } from "react"
import { useDarkMode } from "@/context/dark_mode"
import { useRouter } from "next/router"
import Link from "next/link"

const SearchFilter = () => {
    const { darkMode } = useDarkMode()
    const router = useRouter()
    const [showContinent, setShow] = useState(false)
    const [query, setQuery] = useState('')
    const setShowContinent = () => {
        setShow(prevData => !prevData)
    }

    const handleSearch = (event) => {
        event.preventDefault()
        if (!query) {
            return
        }
        router.push(`/search?q=${query}`)
    }

    return (
        <section className="search-filter">
        <form onSubmit={handleSearch} className={`search bg-white ${darkMode? 'bg-dark': ''}`}>
            <input
                type="text"
                name="searchCountry"
                placeholder="search for a country..."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className={`bg-white ${darkMode? 'bg-dark': ''}`}
            />
        </form>
        <ul className="filter">
            <li className="abc">
                <div className={`select-continent bg-white ${darkMode? 'bg-dark': ''}`}>
                    <span>Filter by region</span>
                    <span className="btn show-continents" onClick={setShowContinent}>+</span>
                </div>
                <ul className={`continents bg-white ${darkMode? 'bg-dark': ''} ${showContinent? 'show-continent': ''} `}>
                    <li
                     className="continent btn"
                    >
                        <Link href={'/continents/africa'}>Africa</Link>
                    </li>
                    <li
                     className="continent btn"
                    >
                        <Link href={'/continents/americas'}>Americas</Link>
                    </li>
                    <li
                     className="continent btn"
                    >
                        <Link href={'/continents/asia'}>Asia</Link>
                    </li>
                    <li
                     className="continent btn"
                    >
                        <Link href={'/continents/europe'}>Europe</Link>
                    </li>
                    <li
                     className="continent btn"
                    >
                        <Link href={'/continents/oceania'}>Oceania</Link>
                    </li>
                </ul>
            </li>
        </ul>
    </section>
    )
}

export default SearchFilter