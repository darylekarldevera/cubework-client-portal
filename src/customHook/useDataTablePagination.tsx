import { useEffect, useState } from 'react'

interface IDataTablePagination {
  currentPage: number;
  paginationNumbers: number[];
  previousPageNumber: number;
}

interface IDataTablePaginationReturn {
  paginationOptions: number[];
}

function useDataTablePagination({
  currentPage,
  paginationNumbers,
  previousPageNumber,
}: IDataTablePagination): IDataTablePaginationReturn {
  const [paginationOptions, setPaginationOptions] = useState<number[]>([]);

  useEffect(() => {
    const paginationNumbersLength = paginationNumbers.length;
    const visiblePageCount = 3;
    const paginationWindowSize = 5;

    const decrementValue = 1;
    const initialValue = 0;

    const offsetPageNumber = previousPageNumber - currentPage;
    const previousPageIndex = currentPage - decrementValue;
    const isOffsetNegative = offsetPageNumber < initialValue;

    const endPageNumber = currentPage + visiblePageCount;
    const maxStartPageNumber = paginationNumbersLength - paginationWindowSize;

    const adjustedStartPageNumber = isOffsetNegative ? previousPageIndex : currentPage;
    const isMaxStartPageExceeded = maxStartPageNumber < currentPage;
    const startPageNumber = isMaxStartPageExceeded ? maxStartPageNumber : adjustedStartPageNumber;

    const visiblePageNumbers = paginationNumbers?.slice(startPageNumber, endPageNumber);
    setPaginationOptions(visiblePageNumbers);
  }, [currentPage, paginationNumbers, previousPageNumber]);

  return { paginationOptions };
}

export default useDataTablePagination;
