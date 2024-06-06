import { Countries }    from '../types/types'
import { 
  createSlice, 
  PayloadAction 
}                       from '@reduxjs/toolkit'

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
  },
})

export const {
    setCountries,
    setCountriesCount,
    setLoading,
    setAscendingCountries,
    setDescendingCountries,
} = countriesSlice.actions

export default countriesSlice.reducer