import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { useCallback, useState } from 'react';
import PaginationItemLink from './PaginationItemLink';
import EllipsisIndicator from './EllipsisIndicator';
import UsePaginationHook from '@/customHook/usePaginationHook';

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
  const [previousPageNumber, setPreviousPageNumber] = useState<number>(0);

  const handlePageChange = useCallback((page: number) => {
    setPage(page);
    setPreviousPageNumber(currentPage);
    setCurrentPage(page);
  }, [currentPage, setPage]);
  
  const handleNextPage = () => {
    nextPage();
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    previousPage();
    setCurrentPage(currentPage - 1);
  }

  const conditionalClassName = useCallback((value: number | boolean) => {
    return value ? 'pointer-events-none opacity-50' : 'cursor-pointer';
  }, []);

  const { paginationOptions } = UsePaginationHook({ currentPage, paginationNumbers, previousPageNumber });

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious className={conditionalClassName(!canPreviousPage)} onClick={() => handlePreviousPage()} />
        </PaginationItem>

        <PaginationItemLink
          key={0}
          pageNumber={1}
          onClick={() => handlePageChange(0)}
          isVisible={paginationNumbers.length > 1}
          className={conditionalClassName(currentPage === 0)}
        />

        <EllipsisIndicator isVisible={currentPage > 2} />

        {paginationOptions.map((number) => (
          <PaginationItemLink
            key={number}
            pageNumber={number + 1}
            isVisible={number !== 0 && number !== paginationNumbers.length - 1}
            onClick={() => handlePageChange(number)}
            className={conditionalClassName(currentPage === number)}
          />
        ))}

        <EllipsisIndicator isVisible={currentPage < paginationNumbers.length - 5} />

        <PaginationItemLink
          key={paginationNumbers.length}
          pageNumber={paginationNumbers.length}
          onClick={() => handlePageChange(paginationNumbers.length - 1)}
          isVisible={paginationNumbers.length > 1}
          className={conditionalClassName(currentPage === paginationNumbers.length - 1)}
        />

        <PaginationItem>
          <PaginationNext className={conditionalClassName(!canNextPage)} onClick={() => handleNextPage()} />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default DataTablePaginationControllers;
