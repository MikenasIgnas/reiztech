import React            from "react";
import useGetUrlParams  from "../../../customHooks/useGetUrlParams";

const ListFilters = () => {
  const { page, limit, setSearchParams }                    = useGetUrlParams();
  const [isRegionFilterSelected, setIsRegionFilterSelected] = React.useState(false);
  const [isAreaFilterSelected, setIsAreaFilterSelected]     = React.useState(false);

  const toggleRegionFilter = () => {
    setSearchParams(`page=1&limit=${limit}&regionFilter=${!isRegionFilterSelected}`);
    setIsRegionFilterSelected(!isRegionFilterSelected);
  };

  const toggleAreaFilter = () => {
    setSearchParams(`page=1&limit=${limit}&areaFilter=${!isAreaFilterSelected}`);
    setIsAreaFilterSelected(!isAreaFilterSelected);
  };

  return (
    <div className='FilterButtonsContainer'>
      <button onClick={toggleRegionFilter} className='Button'>
        {isRegionFilterSelected ? 'All countries' : 'Oceanian region countries'}
      </button>
      <button onClick={toggleAreaFilter} className='Button'>
        {isAreaFilterSelected ? 'All countries' : 'Smaller than Lithuania by area '}
      </button>
    </div>
  );
};

export default ListFilters;