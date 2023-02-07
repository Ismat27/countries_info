import Head from 'next/head'
import ContinentBlock from '@/components/ContinentBlock'

export async function getStaticProps() {
  const response = await fetch('https://restcountries.com/v2/all')
  const data = await response .json()
  let continents = new Set(data.map((countryData) => {
    return countryData.region
  }))
  continents = [...continents]
  const continents_data = continents.map((continent => {
    const continent_countries = data.filter(countryData => countryData.region === continent)
    return {
      [continent]: continent_countries.slice(0, 4),
    }
  }))
  return {
    props: {
      continents_data
    }
  }
}

export default function Home({ continents_data }) {
  return (
    <>
      <Head>
        <title>All Country Info</title>
        <meta name="description" content="All countries info" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={''}>
        <div className='page-center'>
          {
            continents_data.map(continent => {
              let temp = Object.entries(continent)
              temp = [...temp[0]]
              const [continent_name, continent_data] = temp
              return (
                <ContinentBlock 
                  key={continent_name} 
                  continent_name={continent_name} 
                  continent_data={continent_data} 
                />
              )
            })
          }
        </div>
      </main>
    </>
  )
}
