import { Countries }    from '../types/types'
import { 
  createSlice, 
  PayloadAction 
}                       from '@reduxjs/toolkit'

interface countriesReducer {
  countries:      Countries[]
  loading:        boolean
}

const initialState: countriesReducer = {
  countries:      [],
  loading:        false,
}

const countriesSlice = createSlice({
  name:     'countries',
  initialState,
  reducers: {
    setCountries(state, { payload }: PayloadAction<Countries[]>) {
      state.countries = payload
    },
    setLoading(state, { payload } :PayloadAction<boolean>){
      state.loading = payload
    },
    setAscendingCountries(state, { payload }: PayloadAction<Countries[]>) {
      state.countries = [...payload].sort((a, b) => {
        if (a.name < b.name) return -1;
        if (a.name > b.name) return 1;
        return 0;
      });
    },
    setDescendingCountries(state, { payload }: PayloadAction<Countries[]>) {
      state.countries = [...payload].sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
    },
  },
})

export const {
    setCountries,
    setLoading,
    setAscendingCountries,
    setDescendingCountries,
} = countriesSlice.actions

export default countriesSlice.reducer