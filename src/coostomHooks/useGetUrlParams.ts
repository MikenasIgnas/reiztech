import { useSearchParams } from 'react-router-dom';

const useGetUrlParams = () => {
    const [searchParams, setSearchParams]   = useSearchParams();
    const pageString                        = searchParams.get('page');
    const limitString                       = searchParams.get('limit');
    const page                              = pageString ? parseInt(pageString, 10) : 1;
    const limit                             = limitString ? parseInt(limitString, 10) : 10;

    return { page, limit, searchParams, setSearchParams };
}

export default useGetUrlParams;