import useGetUrlParams  from "../../../customHooks/useGetUrlParams";

const ListFilters = () => {
  const { limit, areaFilter, regionFilter, setSearchParams } = useGetUrlParams();

  const toggleRegionFilter = () => {
    let searchParams = `page=1&limit=${limit}&regionFilter=${regionFilter === 'true' ? 'false' : 'true'}`

    if (areaFilter === 'true') {
      searchParams += `&areaFilter=${areaFilter}`
    }
    
    setSearchParams(searchParams);
  };

  const toggleAreaFilter = () => {
    let searchParams = `page=1&limit=${limit}&areaFilter=${areaFilter === 'true' ? 'false' : 'true'}`
    
    if (regionFilter === 'true') {
      searchParams += `&regionFilter=${regionFilter}`
    } 
    
    setSearchParams(searchParams);
  };
  
  return (
    <div className='FilterButtonsContainer'>
      <button onClick={toggleRegionFilter} className='Button'>
        {regionFilter === 'true' ? 'All countries' : 'Oceanian region countries'}
      </button>
      <button onClick={toggleAreaFilter} className='Button'>
        {areaFilter === 'true' ? 'All countries' : 'Smaller than Lithuania by area '}
      </button>
    </div>
  );
};

export default ListFilters;