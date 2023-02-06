import Head from 'next/head'
import CountryCard from '@/components/CountryCard'

export async function getStaticProps() {
  const response = await fetch('https://restcountries.com/v2/all')
  const data = await response .json()
  return {
    props: {
      data
    }
  }
}

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>All Country Info</title>
        <meta name="description" content="All countries info" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={''}>
          <div className='countries'>
            {
              data.map(countryData => {
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
