import CountriesListBody    from '../components/ListBodyComponents/CountriesListBody'
import CountriesListHeader  from '../components/ListHeaderComponents/CountriesListHeader'
import useFetchCountries    from '../coostomHooks/useFetchCountries'

const CountriesList = () => {
    useFetchCountries()

  return (
    <div className='PageContainer'>
        <div className='ListContainer'>
            <CountriesListHeader/>
            <CountriesListBody/>
        </div>
    </div>
  )
}

export default CountriesList