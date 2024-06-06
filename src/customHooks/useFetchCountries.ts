import React              from "react";
import { 
  setCountries,
  setLoading 
}                         from "../reducers/countriesReducer";
import { useAppDispatch } from "../store/hooks";
import { fetchData }      from "../utility/utility";
import countriesData      from "../utility/countriesData";

const useFetchCountries = () => {
  const dispatch    = useAppDispatch();
  
  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        dispatch(setLoading(true));
        const res = await fetchData(`https://restcountries.com/v2/all?fields=name,region,area`);
          dispatch(setCountries(res));
          dispatch(setLoading(false));
        } catch (error) {
          alert('Failed to fetch data, due to API issues, local data will be used');
          dispatch(setCountries(countriesData));
          dispatch(setLoading(false));
      }
    };
    
    fetchCountries();
  }, []);

};

export default useFetchCountries;