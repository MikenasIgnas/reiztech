import { useAppSelector }   from '../store/hooks'
import CountriesListBody    from '../components/ListBodyComponents/CountriesListBody'
import CountriesListHeader  from '../components/ListHeaderComponents/CountriesListHeader'
import Spinner              from '../components/Spinner'
import useFetchCountries    from '../customHooks/useFetchCountries'

const CountriesList = () => {
  useFetchCountries()
  const loading = useAppSelector((state) => state.countries.loading)

  return (
    <div className='PageContainer'>
      <main className='ListContainer'>
        <CountriesListHeader />
        {loading ? <Spinner /> : <CountriesListBody />}
      </main>
    </div>
  )
}

export default CountriesList