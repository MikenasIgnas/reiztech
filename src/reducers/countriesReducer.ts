import { 
  createSlice, 
  PayloadAction 
}                       from '@reduxjs/toolkit'
import { Countries }    from '../types/types'

interface countriesReducer {
  countries:      Countries[]
  loading:        boolean
  countriesCount: number
}

const initialState: countriesReducer = {
  countries:      [],
  loading:        false,
  countriesCount: 0
}

const countriesSlice = createSlice({
  name:     'countries',
  initialState,
  reducers: {
    setCountries(state, { payload }: PayloadAction<Countries[]>) {
      state.countries = payload
    },
    setCountriesCount(state, { payload }: PayloadAction<number>) {
      state.countriesCount = payload
    },
    setLoading(state, { payload } :PayloadAction<boolean>){
      state.loading = payload
    },
    setAscendingCountries(state) {
      state.countries = state.countries.sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    },
    setDescendingCountries(state) {
      state.countries = state.countries.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
    },
    setOceanianCountries(state){
      const filterOceanianCountries =  state.countries.filter((item) => item.region === 'Oceania') 
      state.countries = filterOceanianCountries
    },
    setCountriesSmallerThanLithuania(state){ 
      const lithuania = state.countries.find((item) => item.name === 'Lithuania')
      if(lithuania){
        state.countries = state.countries.filter((item) => item.area < lithuania.area)
      }
    },
  },
})

export const {
    setCountries,
    setCountriesCount,
    setLoading,
    setAscendingCountries,
    setDescendingCountries,
    setOceanianCountries,
    setCountriesSmallerThanLithuania,
} = countriesSlice.actions

export default countriesSlice.reducer