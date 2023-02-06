import styles from  '@/styles/Country.module.css'
import { useDarkMode } from "@/context/dark_mode"
import Head from 'next/head'
import { useRouter } from 'next/router'
export async function getStaticPaths() {
    const response = await fetch('https://restcountries.com/v2/all')
    const countriesData = await response.json()
    const paths = countriesData.map(countryData => {
        return {
            params: {
                slug: countryData.name.split(' ')[0]
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const { slug } = params
    const response = await fetch(`https://restcountries.com/v2/name/${slug}`)
    const data = await response.json()
    let country = data[0]
    if (!country.borders) {
        country = {
            ...country,
            borders: ['not available']
        }
    }
    return {
        props: {
            data,
            country,
        }
    }
}

const CountryPage = ({country}) => {
    const router = useRouter()
    const { darkMode } = useDarkMode()
    const countryBorders = country.borders.map(border => {
        return <span className={styles.border} key={border}>{border}</span>
    })
    const languages = country.languages.map(language => language.name).join(', ')
    const currencies = country.currencies.map(currency => {
        return <span key={currency.name}>{currency.name}</span>
    })
    return (
        <main className={`${styles.main} ${darkMode?'bbg-dark': 'bbg-white'} `}>
            <Head>
                <title>{country.name}</title>
            </Head>
            <button
                onClick={() => router.back()}
                className={`${darkMode?'bg-dark': 'bg-white'} ${styles.nav_btn} `}
            >
                Back
            </button>
            <div className={styles.main_content}>
                <div className={styles.country_flag}>
                    <img src={country.flag} alt="country"/>
                </div>
                <div className={styles.country_details}>
                    <h1>{country.name}</h1>
                    <div className={styles.main_details}>
                        <div className={styles.d1}>
                            <p>
                                <strong>Native Name: </strong>
                                <span>{country.nativeName}</span>
                            </p>
                            <p>
                                <strong>Population: </strong>
                                <span>{country.population}</span>
                            </p>
                            <p>
                                <strong>Region: </strong>
                                <span>{country.region}</span>
                            </p>
                            <p>
                                <strong>Sub Region: </strong>
                                <span>{country.subregion}</span>
                            </p>
                            <p>
                                <strong>Capital: </strong>
                                <span>{country.capital}</span>
                            </p>
                        </div>
                        <div className={styles.d2}>
                            <p>
                                <strong>Top Level Domain: </strong>
                                <span>{country.topLevelDomain}</span>
                            </p>
                            <div className={styles.languages}>
                                <strong>Languages: </strong>
                                <div className={styles.country_languages}>
                                    {languages}
                                </div>
                            </div>
                            <div className={styles.currencies}>
                                <strong>Currencies: </strong>
                                <div className={styles.country_currencies}>
                                    {currencies}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border_countries">
                        <h2>Border Countries : </h2>
                        <div className={styles.borders}>
                            {countryBorders}
                        </div>
                    </div>
                </div>

            </div>
            </main>
    )
}

export default CountryPage