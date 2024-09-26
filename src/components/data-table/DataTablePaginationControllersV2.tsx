import { useCallback, useState } from 'react';

import useDataTablePagination from '@/customHook/useDataTablePagination';

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import PaginationItemLink from './PaginationItemLink';
import EllipsisIndicator from './EllipsisIndicator';
import { useLocation } from 'react-router-dom';

interface IDataTablePaginationControllersV2Props {
  requestPageSize: string;
  canNextPage: boolean;
  currentPage: number;
  canPreviousPage: boolean;
  paginationNumbers: number[];
  setPage: (page: number) => void;
  nextPage: () => void;
  previousPage: () => void;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setRequestPageSize: React.Dispatch<React.SetStateAction<string>>;
}

interface ICwDataTablePaginationControllersV2Props extends IDataTablePaginationControllersV2Props {
  cwStyle: boolean;
}

function DataTablePaginationControllersV2({
  requestPageSize,
  cwStyle,
  canNextPage,
  currentPage,
  canPreviousPage,
  paginationNumbers,
  setPage,
  nextPage,
  setRequestPageSize,
  previousPage,
  setCurrentPage,
}: ICwDataTablePaginationControllersV2Props) {
  const { pathname } = useLocation();
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

  const { paginationOptions } = useDataTablePagination({ currentPage, paginationNumbers, previousPageNumber });

  return (
    <div className="h-auto relative">
      <Pagination className={`${cwStyle ? 'cw-style' : ''} mt-auto`}>
        <PaginationContent key="pagination-content">
          <PaginationItem>
            <PaginationPrevious
              className={`page-prev ${conditionalClassName(!canPreviousPage)}`}
              onClick={handlePreviousPage}
            />
          </PaginationItem>

          <PaginationItemLink
            key="first-page-link"
            pageNumber={1}
            onClick={() => handlePageChange(0)}
            isVisible={paginationNumbers?.length > 1}
            className={`
            ${conditionalClassName(currentPage === 0)}
            ${currentPage === 0 && 'active'}
          `}
          />

          <EllipsisIndicator key="ellipsis-start" isVisible={currentPage > 2} />

          {paginationOptions.map((number, index) => (
            <div className="border-slate-600 border-solid border-1 " key={`pagination-item-${number}`}>
              <PaginationItemLink
                key={`page-link-${number}-${index}`}
                pageNumber={number + 1}
                isVisible={number !== 0 && number !== paginationNumbers?.length - 1}
                onClick={() => handlePageChange(number)}
                className={`
                ${conditionalClassName(currentPage === number)}
                ${currentPage === number && 'active'}
              `}
              />
            </div>
          ))}

          <EllipsisIndicator key="ellipsis-end" isVisible={currentPage < paginationNumbers?.length - 5} />

          <PaginationItemLink
            key="last-page-link"
            pageNumber={paginationNumbers?.length}
            onClick={() => handlePageChange(paginationNumbers?.length - 1)}
            isVisible={paginationNumbers?.length > 1}
            className={`
            ${conditionalClassName(currentPage === paginationNumbers?.length - 1)}
            ${currentPage === paginationNumbers?.length - 1 && 'active'}
          `}
          />

          <PaginationItem>
            <PaginationNext className={`page-next ${conditionalClassName(!canNextPage)}`} onClick={handleNextPage} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      {pathname === '/home' ? (
        <button
          className="absolute bottom-0 right-0 p-2 w-20 mr-2 text-xs bg-cw-green text-white rounded-lg"
          onClick={() => setRequestPageSize((prev) => (prev === 'minimum' ? 'bulk' : 'minimum'))}
        >
          {requestPageSize === 'minimum' ? 'Bulk' : 'Minimum'}
        </button>
      ) : null}
    </div>
  );
}

export default DataTablePaginationControllersV2;
