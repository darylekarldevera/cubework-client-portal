import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useCallback, useEffect, useState } from 'react';

interface IDataTablePaginationControllersProps {
  canPreviousPage: boolean;
  previousPage: () => void;
  canNextPage: boolean;
  nextPage: () => void;
  paginationNumbers: number[];
  setPage: (page: number) => void;
}

function DataTablePaginationControllers({
  canPreviousPage,
  previousPage,
  canNextPage,
  nextPage,
  paginationNumbers,
  setPage,
}: IDataTablePaginationControllersProps) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [paginationOptions, setPaginationOptions] = useState<number[]>([]);

  const handlePageChange = (index: number) => {
    setCurrentPage(index);
    setPage(index);
  };

  const conditionalClassName = useCallback((value: number | boolean) => {
    return value ? 'pointer-events-none opacity-50' : 'cursor-pointer';
  }, []);

  useEffect(() => {
    const endPageNumber = currentPage + 4;
    const maxStartPageNumber = paginationNumbers.length - 5;
    const startPageNumber = maxStartPageNumber < currentPage ? maxStartPageNumber : currentPage;
    const visiblePaginationNumbers = paginationNumbers?.slice(startPageNumber, endPageNumber);
    setPaginationOptions(visiblePaginationNumbers);
  }, [currentPage, paginationNumbers]);

  useEffect(() => {

  }, []);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={conditionalClassName(!canPreviousPage)}
            onClick={() => {
              previousPage();
              setCurrentPage(currentPage - 1);
            }}
          />
        </PaginationItem>

        {paginationNumbers.length ? (
          <PaginationItem>
            <PaginationLink className={conditionalClassName(currentPage === 0)} onClick={() => handlePageChange(0)}>
              1
            </PaginationLink>
          </PaginationItem>
        ) : null}

        {paginationOptions.map((number) => {
          if (number === 0 || number === paginationNumbers.length - 1) return null;
          return (
            <PaginationItem key={number}>
              <PaginationLink
                className={conditionalClassName(currentPage === number)}
                onClick={() => handlePageChange(number)}
              >
                {number + 1}
              </PaginationLink>
            </PaginationItem>
          );
        })}

        {paginationNumbers.length ? (
          <PaginationItem>
            <PaginationLink
              className={conditionalClassName(currentPage === paginationNumbers.length - 1)}
              onClick={() => handlePageChange(paginationNumbers.length - 1)}
            >
              {paginationNumbers.length}
            </PaginationLink>
          </PaginationItem>
        ) : null}

        <PaginationItem>
          <PaginationNext
            className={conditionalClassName(!canNextPage)}
            onClick={() => {
              nextPage();
              setCurrentPage(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default DataTablePaginationControllers;
