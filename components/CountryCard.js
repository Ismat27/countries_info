import { useDarkMode } from "@/context/dark_mode"
import Link from "next/link"

const CountryCard = ({dt}) => {
    const {darkMode} = useDarkMode()
    return (
        <Link href={`/${dt.name.split(' ')[0]}`}>
            <div  className={`country bg-white ${darkMode? 'bg-dark': ''}`}>
                    <div className="country-image">
                        <img src={dt.flag} alt="country"/>
                    </div>
                    <div className="country-mini-details">
                        <h3 className="country-name">{dt.name}</h3>
                        <p>
                            <strong>Population: </strong>
                            <span>{dt.population}</span>
                        </p>
                        <p>
                            <strong>Region: </strong>
                            <span>{dt.region}</span>
                        </p>
                        <p>
                            <strong>Capital: </strong>
                            <span>{dt.capital}</span>
                        </p>
                    </div>
            </div>
        </Link>
    )
}

export default CountryCard