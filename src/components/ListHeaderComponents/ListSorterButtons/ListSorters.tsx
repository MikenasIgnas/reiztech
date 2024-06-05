import React                from 'react'
import { 
  setAscendingCountries, 
  setDescendingCountries 
}                           from "../../../reducers/countriesReducer"
import { useAppDispatch }   from "../../../store/hooks"

const ListSorters = () => {
  const dispatch                            = useAppDispatch()
  const [orderAscending, setOrderAscending] = React.useState(false)
  
  const sortCountries = () => {
    if(orderAscending){
      dispatch(setAscendingCountries())
    }else{
      dispatch(setDescendingCountries())
    }
    setOrderAscending(!orderAscending);
  }

  return (
    <>
    <button onClick={sortCountries} className='Button'>{orderAscending ? 'Accending' : 'Decending'}</button>
    </>
  )
}

export default ListSorters
