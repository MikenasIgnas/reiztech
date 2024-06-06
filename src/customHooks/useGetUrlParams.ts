import { useSearchParams }  from 'react-router-dom';

const useGetUrlParams = () => {
    const [searchParams, setSearchParams]   = useSearchParams();
    const pageString                        = searchParams.get('page');
    const limitString                       = searchParams.get('limit');
    const regionFilter                      = searchParams.get('regionFilter');
    const areaFilter                        = searchParams.get('areaFilter');
    const page                              = pageString ? parseInt(pageString, 10) : 1;
    const limit                             = limitString ? parseInt(limitString, 10) : 10;

    return { page, limit, regionFilter, areaFilter, searchParams, setSearchParams };
}

export default useGetUrlParams;