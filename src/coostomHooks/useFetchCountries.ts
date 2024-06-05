import React              from "react"
import fetchData          from "../utility/utility"
import { useAppDispatch } from "../store/hooks"
import { setCountries }   from "../reducers/countriesReducer"

const useFetchCountries = () => {
    const [loading, setLoading] = React.useState(false)
    const dispatch              = useAppDispatch()
  
    React.useEffect(() => {
      const fetchCountries = async () => {
        try {
          setLoading(true)
          const res = await fetchData('https://restcountries.com/v2/all?fields=name,region,area');
          dispatch(setCountries(res))
          setLoading(false)
        } catch (error) {
        }
      };
  
      fetchCountries();
    }, []);

    return { loading }
}

export default useFetchCountries