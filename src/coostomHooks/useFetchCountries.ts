import React              from "react"
import { fetchData }      from "../utility/utility"
import { useAppDispatch } from "../store/hooks"
import { 
  setCountries, 
  setLoading 
}                         from "../reducers/countriesReducer"

const useFetchCountries = () => {
    const dispatch              = useAppDispatch()
  
    React.useEffect(() => {
      const fetchCountries = async () => {
        try {
          dispatch(setLoading(true))
          const res = await fetchData(`https://restcountries.com/v2/all?fields=name,region,area`);
          dispatch(setCountries(res))
          dispatch(setLoading(false))
        } catch (error) {
          if (error instanceof Error) {
            alert('Failed to fetch data, please reload the page and try again')
          }
        }
      };
  
      fetchCountries();
    }, []);

}

export default useFetchCountries