import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../config/Api';
import { useMemo } from 'react';

export const useHomeData = () => {
    const data = useQuery({
        queryKey: ['home', 'products'],
        queryFn: () => getProducts(),
        retry: 0,
    });
    const memoizedData = useMemo(() => data, [data]);
    return memoizedData;
};
