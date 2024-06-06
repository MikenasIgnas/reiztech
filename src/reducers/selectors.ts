import { createSelector }         from '@reduxjs/toolkit'
import { paginate }               from '../utility/utility';
import { Countries, RootState }   from '../types/types';

const selectCountries = (state: RootState) => state.countries.countries

const filterPages = (countries: Countries[], page: number | null, limit: number | null, regionFilter: string | null, areaFilter: string | null  ) => {
    let filteredData = countries;
    if (regionFilter && regionFilter === 'true' &&  areaFilter && areaFilter === 'true') {
      const findLithuania = countries.find((item) => item.name === 'Lithuania');

      if (findLithuania) {
        filteredData = filteredData.filter((item) => findLithuania.area && item.area && item.area < findLithuania.area && item.region === 'Oceania');
      }
      
    }else if (regionFilter && regionFilter === 'true') {
      filteredData = filteredData.filter((item) => item.region === 'Oceania');
    }else if (areaFilter && areaFilter === 'true') {
      const findLithuania = countries.find((item) => item.name === 'Lithuania');
      if (findLithuania) {
        filteredData = filteredData.filter((item) => findLithuania.area && item.area && item.area < findLithuania.area);
      }
    }

    const paginatedData       = paginate(filteredData, page, limit);
    const paginatedDataCount  = filteredData?.length
    
    return { paginatedData, paginatedDataCount }
}

export const selectPages = createSelector(
    [
        selectCountries, 
        (_: RootState, page: number | null) => page, 
        (_: RootState, __:number | null, limit: number | null) => limit,
        (_: RootState, __:number | null, ___:number | null,areaFilter: string | null) => areaFilter,
        (_: RootState, __:number | null, ___:number | null,____:string | null, regionFilter: string | null) => regionFilter,
    ], 
        filterPages
)