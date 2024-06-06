import useGetUrlParams      from '../../customHooks/useGetUrlParams'

interface PaginationProps {
    paginatedDataCount: number | undefined
}

const Pagination = ({ paginatedDataCount }: PaginationProps) => {
    const { 
        page, 
        limit,
        regionFilter, 
        areaFilter, 
        setSearchParams 
    }                       = useGetUrlParams()
    const pagesCount        = paginatedDataCount && Math.ceil(paginatedDataCount / limit)

    const handlePreviousPageChange = () => {
        if(page === 1) return
        setSearchParams(`?page=${page - 1}&limit=${limit}&regionFilter=${regionFilter}&areaFilter=${areaFilter}`)
    }
    
    const handlePageChange  = (page: number) => {
        setSearchParams(`?page=${page}&limit=${limit}&regionFilter=${regionFilter}&areaFilter=${areaFilter}`)
    }
    
    const handleNextsPageChange = () => {
        if(page === pagesCount) return
        setSearchParams(`?page=${page + 1}&limit=${limit}&regionFilter=${regionFilter}&areaFilter=${areaFilter}`)
    }
    
    const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSearchParams(`?page=1&limit=${e.target.value}&regionFilter=${regionFilter}&areaFilter=${areaFilter}`)
    }

    const renderPaginationButtons = () => {
        const buttons = [];
        if (pagesCount) {
                for (let i = 1; i <= pagesCount; i++) {
                    buttons.push(
                        <button 
                        style={{ backgroundColor: i === page ? '#31ef31' : '#8fff8f' }} 
                        className='PageButton' 
                        key={i} onClick={() => handlePageChange(i)} 
                        disabled={i === page}
                        >
                        {i}
                    </button>
                );
            }
            return buttons;
        }
    };

    return (
    <div className='PaginationContainer'>
        <button className='PageButton' onClick={handlePreviousPageChange}>{'<'}</button>
        {renderPaginationButtons()}
        <select name="limit" id="limi" onChange={(e) => handleLimitChange(e)}>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
            <option value={paginatedDataCount}>{paginatedDataCount}</option>
        </select>
        <button className='PageButton' onClick={handleNextsPageChange}>{'>'}</button>
    </div>
  )
}

export default Pagination