import { PaginationItem, PaginationLink } from '../ui/pagination';

interface IPaginationItemLinkProps {
  pageNumber: number;
  onClick: () => void;
  isVisible: boolean;
  className: string;
}

function PaginationItemLink({ pageNumber, onClick, isVisible, className }: IPaginationItemLinkProps) {
  if (!isVisible) return null;
  return (
    <PaginationItem>
      <PaginationLink className={className} onClick={onClick}>
        {pageNumber}
      </PaginationLink>
    </PaginationItem>
  );
}

export default PaginationItemLink;
