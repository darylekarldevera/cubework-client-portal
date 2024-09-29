import { useEffect, useState } from 'react';

interface IDataListPaginationProps {
  numberOfItems: number;
  currentPage: number;
  requestPageSize: string;
}

interface IDataListPaginationReturn {
  paginationNumbers: number[];
  canNextPage: boolean;
  canPreviousPage: boolean;
}

function useDataListPaginationV2({
  numberOfItems,
  currentPage,
  requestPageSize,
}: IDataListPaginationProps): IDataListPaginationReturn {
  const [paginationNumbers, setPaginationNumbers] = useState<number[]>([]);
  const [canNextPage, setCanNextPage] = useState<boolean>(true);
  const [canPreviousPage, setCanPreviousPage] = useState<boolean>(true);

  useEffect(() => {
    const arrayOfNumbers = Array(numberOfItems)
      .fill(0)
      .map((_, index) => index + 1);
    const changeToAppropriateName = Math.ceil(numberOfItems / 5 - 1);
    const paginationNumbers = [0, ...arrayOfNumbers.slice(0, changeToAppropriateName)];

    setPaginationNumbers(paginationNumbers);
  }, [numberOfItems, currentPage, requestPageSize]);

  useEffect(() => {
    if (currentPage === 0) {
      setCanPreviousPage(false);
    } else {
      setCanPreviousPage(true);
    }

    if (currentPage === paginationNumbers.length - 1) {
      setCanNextPage(false);
    } else {
      setCanNextPage(true);
    }
  }, [currentPage]);

  return { paginationNumbers, canNextPage, canPreviousPage };
}

export default useDataListPaginationV2;
