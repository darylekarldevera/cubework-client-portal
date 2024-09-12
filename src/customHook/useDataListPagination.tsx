
import { IDocument } from '@/types/invoiceDocuments';
import { useEffect, useState } from 'react'

interface IDataListPaginationProps {
  data: IDocument[];
  currentPage: number;
}

function useDataListPagination({ data, currentPage, }: IDataListPaginationProps) {
  const [paginationNumbers, setPaginationNumbers] = useState<number[]>([]);
  const [canNextPage, setCanNextPage] = useState<boolean>(true);
  const [canPreviousPage, setCanPreviousPage] = useState<boolean>(true);

  useEffect(() => {
    const numberOfItems = Array(data.length)
      .fill(0)
      .map((_, index) => index + 1);
    const changeToAppropriateName = Math.ceil(data.length / 5 - 1);
    const paginationNumbers = [0, ...numberOfItems.slice(0, changeToAppropriateName)];

    setPaginationNumbers(paginationNumbers);
  }, [data.length, currentPage]);

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return { paginationNumbers, canNextPage, canPreviousPage };
}

export default useDataListPagination
