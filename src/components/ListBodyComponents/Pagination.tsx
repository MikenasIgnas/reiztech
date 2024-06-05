import useGetUrlParams      from '../../coostomHooks/useGetUrlParams'
import { useAppSelector }   from '../../store/hooks'

const Pagination = () => {
    const { page, limit, setSearchParams }  = useGetUrlParams()
    const countriesCount                    = useAppSelector((state) => state.countries.countriesCount)
    const pagesCount                        = countriesCount / limit

    const handlePageChange  = (page: number) => {
        setSearchParams(`?page=${page}&limit=${limit}`)
    }
    
    const handlePreviousPageChange = () => {
        if(page === 1) return
        setSearchParams(`?page=${page - 1}&limit=${limit}`)
    }
    
    const handleNextsPageChange = () => {
        if(page === pagesCount) return
        setSearchParams(`?page=${page + 1}&limit=${limit}`)
    }
    
    const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchParams(`?page=${page}&limit=${e.target.value}`)
    }

    const renderPaginationButtons = () => {
        const buttons = [];
        for (let i = 1; i <= pagesCount; i++) {
            buttons.push(
                <button key={i} onClick={() => handlePageChange(i)} disabled={i === page}>
                    {i}
                </button>
            );
        }
        return buttons;
    };

    return (
    <div className='PaginationContainer'>
        <button onClick={handlePreviousPageChange}>-</button>
        {renderPaginationButtons()}
        <label htmlFor="limit">Limit</label>
        <select name="limit" id="limi" onChange={(e) => handleLimitChange(e)}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={countriesCount}>{countriesCount}</option>
        </select>
        <button onClick={handleNextsPageChange}>+</button>
    </div>
  )
}

export default Pagination