import { 
  setCountriesSmallerThanLithuania, 
  setOceanianCountries 
}                                   from "../../../reducers/countriesReducer"
import { useAppDispatch }           from "../../../store/hooks"

const ListFilters = () => {
  const dispatch = useAppDispatch()
  
  const filterOceanianCountries = () => {
    dispatch(setOceanianCountries())
  }

  const filterSmallerThanLithuania = () => {
    dispatch(setCountriesSmallerThanLithuania())
  }

  return (
    <div className='FilterButtonsContainer'>
      <button onClick={filterOceanianCountries} className='Button'>filter1</button>
      <button onClick={filterSmallerThanLithuania} className='Button'>filter2</button>
    </div>
  )
}

export default ListFilters