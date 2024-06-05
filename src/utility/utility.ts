import { Action }     from "redux";
import { Dispatch }   from "react";
import { 
  setCountries, 
  setCountriesCount, 
  setLoading 
}                     from "../reducers/countriesReducer";
import { Countries }  from "../types/types";
import data           from "./data";

const fetchData = async (url: string, timeout: number = 20000) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(url, {
      method:  'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    clearTimeout(timeoutId);
    if (response.ok) {
      return response.json()
    } else {
      const responseJson = await response.json()
      throw new Error(responseJson.message)
    }
}

const handleFilterToggle = async (
    isFilterSelected: boolean, 
    setFilterState:   (value: boolean) => void, 
    filterAction:     () => Action, 
    dispatch:         Dispatch<Action>,
    page:             number,
    limit:            number,
  ) => {
    if (!isFilterSelected) {
      dispatch(filterAction());
    } else {
      try {
        dispatch(setLoading(true));
        // todo change back
        // const res = await fetchData('https://restcountries.com/v2/all?fields=name,region,area');
        const paginatedResults  = paginate(data, page, limit)
        if(paginatedResults) dispatch(setCountries(paginatedResults))
        dispatch(setCountriesCount(data.length))
        dispatch(setLoading(false));
      } catch (error) {
        if (error instanceof Error) {
          alert('Failed to fetch data, please reload the page and try again');
        }
      }
    }
    setFilterState(!isFilterSelected);
};

const paginate = (array: Countries[],  page: number | null, limit: number | null) => {

  if(page && limit){
    return array.slice((page - 1) * limit, page * limit);
  }
}

export { fetchData, handleFilterToggle, paginate }