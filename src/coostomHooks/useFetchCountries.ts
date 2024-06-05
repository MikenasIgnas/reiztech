import React                from "react"
import { 
  paginate 
}                           from "../utility/utility"
import { useAppDispatch }   from "../store/hooks"
import { 
  setCountries, 
  setCountriesCount, 
  setLoading 
}                           from "../reducers/countriesReducer"
import data                 from "../utility/data"
import useGetUrlParams      from "./useGetUrlParams"

const useFetchCountries = () => {
    const dispatch        = useAppDispatch()
    const { page, limit } = useGetUrlParams()
    
    React.useEffect(() => {
      const fetchCountries = async () => {
        try {
          dispatch(setLoading(true))
          //todo changeBack
          // const res               = await fetchData(`https://restcountries.com/v2/all?fields=name,region,area`);
          const paginatedResults  = paginate(data, page, limit)
          if(paginatedResults) dispatch(setCountries(paginatedResults))
          dispatch(setCountriesCount(data.length))
          dispatch(setLoading(false))
        } catch (error) {
          if (error instanceof Error) {
            alert('Failed to fetch data, please reload the page and try again')
          }
        }
      };
  
      fetchCountries();
    }, [page, limit]);
}

export default useFetchCountries