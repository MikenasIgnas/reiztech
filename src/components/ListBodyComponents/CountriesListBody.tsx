import { selectPages }    from "../../reducers/selectors"
import { useAppSelector } from "../../store/hooks"
import useGetUrlParams    from "../../customHooks/useGetUrlParams"
import CountryListItem    from "./CountryListItem/CountryListItem"
import Pagination         from "./Pagination"

const CountriesListBody = () => {
  const { page, limit, areaFilter, regionFilter } = useGetUrlParams()
  const {paginatedData, paginatedDataCount }      = useAppSelector((state) => selectPages(state, page, limit, regionFilter, areaFilter))
  
  return (
    <>
      {paginatedData?.map((item, i) => <CountryListItem key={i} item={item}/>)}
      <Pagination paginatedDataCount={paginatedDataCount}/>
    </>
  )
}

export default CountriesListBody