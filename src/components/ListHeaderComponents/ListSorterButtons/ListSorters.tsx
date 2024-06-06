import React                from 'react'
import { 
  setAscendingCountries, 
  setDescendingCountries 
}                           from "../../../reducers/countriesReducer"
import { 
  useAppDispatch, 
  useAppSelector 
}                           from "../../../store/hooks"

const ListSorters = () => {
  const dispatch                            = useAppDispatch()
  const [orderAscending, setOrderAscending] = React.useState(false)
  const countries                           = useAppSelector((state) => state.countries.countries)
  
  const sortCountries = () => {
    if (orderAscending) {
      dispatch(setAscendingCountries(countries))
    } else {
      dispatch(setDescendingCountries(countries))
    }
    
    setOrderAscending(!orderAscending);
  }

  return (
    <button onClick={sortCountries} className='Button'>{orderAscending ? 'Accending' : 'Decending'}</button>
  )
}

export default ListSorters
