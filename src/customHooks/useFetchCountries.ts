import React              from "react";
import { paginate }       from "../utility/utility";
import { 
  setCountries, 
  setCountriesCount, 
  setLoading 
}                         from "../reducers/countriesReducer";
import { useAppDispatch } from "../store/hooks";
import data               from "../utility/data";
import useGetUrlParams    from "./useGetUrlParams";

const useFetchCountries = () => {
  const dispatch                                  = useAppDispatch();
  const { page, limit, regionFilter, areaFilter } = useGetUrlParams();

  React.useEffect(() => {
    const fetchCountries = async () => {
      try {
        dispatch(setLoading(true));
        // todo changeBack
        // const res = await fetchData(`https://restcountries.com/v2/all?fields=name,region,area`);
        const paginatedData = paginate(data, page, limit);
        if (paginatedData) {
          dispatch(setCountries(paginatedData));
          dispatch(setCountriesCount(data.length));
          dispatch(setLoading(false));
        }
      } catch (error) {
       alert('Failed to fetch data, due to API issues, please reload the page and try again');
      }
    };

    fetchCountries();
  }, []);

  React.useEffect(() => {
      let filteredData = data;

      if (regionFilter && regionFilter === 'true') {
        filteredData = filteredData.filter((item) => item.region === 'Oceania');
      }

      if (areaFilter && areaFilter === 'true') {
        const findLithuania = data.find((item) => item.name === 'Lithuania');
        if (findLithuania) {
          filteredData = filteredData.filter((item) => item.area < findLithuania.area);
        }
      }

      const paginatedData = paginate(filteredData, page, limit);
      if (paginatedData) {
        dispatch(setCountries(paginatedData));
        dispatch(setCountriesCount(filteredData.length));
      }

  }, [page, limit, regionFilter, areaFilter]);
};

export default useFetchCountries;