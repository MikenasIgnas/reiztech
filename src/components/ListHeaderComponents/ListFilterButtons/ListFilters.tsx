import React                        from "react"
import { 
  setCountriesSmallerThanLithuania, 
  setOceanianCountries 
}                                   from "../../../reducers/countriesReducer"
import { useAppDispatch }           from "../../../store/hooks"
import { handleFilterToggle }       from "../../../utility/utility"

const ListFilters = () => {
  const dispatch                                            = useAppDispatch()
  const [isRegionFilterSelected, setIsRegionFilterSelected] = React.useState(false)
  const [isAreaFilterSelected, setIsAreaFilterSelected]     = React.useState(false)
  
  const filterOceanianCountries = () => {
    handleFilterToggle(
      isRegionFilterSelected,
      setIsRegionFilterSelected,
      setOceanianCountries,
      dispatch
    );
  };

  const filterCountriesSmallerThanLithuania = () => {
    handleFilterToggle(
      isAreaFilterSelected,
      setIsAreaFilterSelected,
      setCountriesSmallerThanLithuania,
      dispatch
    );
  };

  return (
    <div className='FilterButtonsContainer'>
      <button onClick={filterOceanianCountries} className='Button'>
        {isRegionFilterSelected ? 'All countries' : 'Oceanian region countries'}
      </button>
      <button onClick={filterCountriesSmallerThanLithuania} className='Button'>
        {isAreaFilterSelected ? 'All countries' : 'Smaller than Lithuania by area '}
      </button>
    </div>
  )
}

export default ListFilters