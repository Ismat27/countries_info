import CountryCard from "@/components/CountryCard";
import Head from "next/head";
import Link from "next/link";

export async function getServerSideProps(context) {
    const { query } = context
    const { q } = query
    try {
        const res = await fetch(`https://restcountries.com/v2/name/${q}`)
        const data = await res.json()
        return  {
            props: {
                searchWord: q,
                data: data.slice(0, 5)
            }
        }
    } 
    catch (error) {
        return  {
            props: {
                searchWord: q,
                data: []
            }
        }
    }
}

const SearchResult = ({searchWord, data}) => {

    if (data.length <= 0) {
        return (
            <main className="page-center">
                <Head>
                    <title>Country Info</title>
                </Head>
                <h1>No result found for {searchWord} </h1>
                <p><Link href={'/'}>Click here to go back home</Link></p>
            </main>
        )
    }

    return (
        <>
            <main className="page-center">
                <Head>
                    <title>Country Info</title>
                </Head>
                <h1>Search result for {searchWord}</h1>
                <div className="countries">
                    {
                        data.map(countryData => {
                            return (
                                <CountryCard key={countryData.name} dt={countryData}/>
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}

export default SearchResult