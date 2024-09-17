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

interface ICwDataTablePaginationControllersProps extends IDataTablePaginationControllersProps {
  cwStyle: boolean;
}

function DataTablePaginationControllers({
  canPreviousPage,
  previousPage,
  canNextPage,
  nextPage,
  paginationNumbers,
  setPage,
  cwStyle,
}: ICwDataTablePaginationControllersProps) {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [previousPageNumber, setPreviousPageNumber] = useState<number>(0);

  const handlePageChange = useCallback(
    (page: number) => {
      setPage(page);
      setPreviousPageNumber(currentPage);
      setCurrentPage(page);
    },
    [currentPage, setPage]
  );

  const handleNextPage = () => {
    nextPage();
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    previousPage();
    setCurrentPage(currentPage - 1);
  };

  const conditionalClassName = useCallback((value: number | boolean) => {
    return value ? 'pointer-events-none opacity-50' : 'cursor-pointer';
  }, []);

  const { paginationOptions } = UsePaginationHook({ currentPage, paginationNumbers, previousPageNumber });

  return (
    <Pagination className={`${cwStyle ? 'cw-style' : ''}`}>
      <PaginationContent className="">
        <PaginationItem>
          <PaginationPrevious
            className={`page-prev ${conditionalClassName(!canPreviousPage)}`}
            onClick={() => handlePreviousPage()}
          />
        </PaginationItem>

        <PaginationItemLink
          key={0}
          pageNumber={1}
          onClick={() => handlePageChange(0)}
          isVisible={paginationNumbers.length > 1}
          className={`
            ${conditionalClassName(currentPage === 0)}
            ${currentPage === 0 && 'active'}
          `}
        />

        <EllipsisIndicator isVisible={currentPage > 2} />

        {paginationOptions.map((number) => (
          <div className="border-slate-600 border-solid border-1 ">
            <PaginationItemLink
              key={number}
              pageNumber={number + 1}
              isVisible={number !== 0 && number !== paginationNumbers.length - 1}
              onClick={() => handlePageChange(number)}
              className={`
                ${conditionalClassName(currentPage === number)}
                ${currentPage === number && 'active'}
              `}
            />
          </div>
        ))}

        <EllipsisIndicator isVisible={currentPage < paginationNumbers.length - 5} />

        <PaginationItemLink
          key={paginationNumbers.length}
          pageNumber={paginationNumbers.length}
          onClick={() => handlePageChange(paginationNumbers.length - 1)}
          isVisible={paginationNumbers.length > 1}
          className={`
            ${conditionalClassName(currentPage === paginationNumbers.length - 1)}
            ${currentPage === paginationNumbers.length - 1 && 'active'}
          `}
        />

        <PaginationItem>
          <PaginationNext
            className={`page-next ${conditionalClassName(!canNextPage)}`}
            onClick={() => handleNextPage()}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default DataTablePaginationControllers;
