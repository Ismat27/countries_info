import CountryCard from "@/components/CountryCard"
import Head from "next/head";

function titleCase(string) {
    let sentence = string.toLowerCase().split(" ");
    for(let i = 0; i< sentence.length; i++){
       sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
    }
    return sentence.join(" ")
}

export async function getStaticPaths() {
    const response = await fetch('https://restcountries.com/v2/all')
    const countriesData = await response.json()
    const paths = countriesData.map(countryData => {
        return {
            params: {
                continent_name: countryData.region.toLowerCase()
            }
        }
    })
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const {continent_name} = params
    const response = await fetch('https://restcountries.com/v2/all')
    let continent_data = await response.json()
    continent_data = continent_data.filter(countryData => continent_name === countryData.region.toLowerCase())
    return {
        props: {
            continent_name,
            continent_data
        }
    }
}

const Continent = ({continent_name, continent_data}) => {
    return (
        <>
            <Head>
                <title>Countries in {titleCase(continent_name)}</title>
            </Head>
            <main className="page-center">
                <h1>Countries in {titleCase(continent_name)}</h1>
                <div className="countries">
                    {
                        continent_data.map(countryData => {
                            return (
                                <CountryCard key={countryData.name} dt={countryData} />
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}

export default Continent
