import Link from 'next/link'
import CountryCard from './CountryCard'

const ContinentBlock = ({continent_name, continent_data}) => {
  return (
    <div className='continent_block'>
        <div className='continent_block_header'>
            <h2>{continent_name}</h2>
            <Link href={`/continents/${continent_name.toLowerCase()}`}>See all</Link>
        </div>
        <div className='countries'>
            {
                continent_data.map(countryData => {
                    return (
                        <CountryCard key={countryData.name} dt={countryData} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default ContinentBlock