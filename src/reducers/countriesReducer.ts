import { 
    createSlice, 
    PayloadAction 
}                       from '@reduxjs/toolkit'
import { Countries }    from '../types/types'

interface countriesReducer {
    countries: Countries[]
}

const initialState: countriesReducer = {
  countries: [],
}
const countriesSlice = createSlice({
  name:     'countries',
  initialState,
  reducers: {
    setCountries(state, { payload }: PayloadAction<Countries[]>) {
      state.countries = payload
    },
  },
})

export const {
    setCountries,
} = countriesSlice.actions

export default countriesSlice.reducer