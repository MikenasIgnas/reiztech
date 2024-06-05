import { useAppSelector } from "../../store/hooks"
import CountryListItem    from "./CountryListItem/CountryListItem"

const CountriesListBody = () => {
  const countries = useAppSelector((state) => state.countries.countries)
  return (
    <>
      {countries?.map((item, i) => <CountryListItem key={i} item={item}/>)}
    </>
  )
}

export default CountriesListBody