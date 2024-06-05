import { Action }   from "redux";
import { Dispatch } from "react";
import { 
  setCountries, 
  setLoading 
}                   from "../reducers/countriesReducer";

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
    dispatch:         Dispatch<Action>
  ) => {
    if (!isFilterSelected) {
      dispatch(filterAction());
    } else {
      try {
        dispatch(setLoading(true));
        const res = await fetchData('https://restcountries.com/v2/all?fields=name,region,area');
        dispatch(setCountries(res));
        dispatch(setLoading(false));
      } catch (error) {
        if (error instanceof Error) {
          alert('Failed to fetch data, please reload the page and try again');
        }
      }
    }
    setFilterState(!isFilterSelected);
};


export { fetchData, handleFilterToggle }