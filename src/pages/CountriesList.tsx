import CountriesListBody    from '../components/ListBodyComponents/CountriesListBody'
import CountriesListHeader  from '../components/ListHeaderComponents/CountriesListHeader'
import Spinner              from '../components/Spinner'
import useFetchCountries    from '../coostomHooks/useFetchCountries'
import { useAppSelector }   from '../store/hooks'

const CountriesList = () => {
  useFetchCountries()
  const loading = useAppSelector((state) => state.countries.loading)

  return (
    <div className='PageContainer'>
        <div className='ListContainer'>
            <CountriesListHeader/>
            { loading ? <Spinner/> : <CountriesListBody/> }
        </div>
    </div>
  )
}

export default CountriesList