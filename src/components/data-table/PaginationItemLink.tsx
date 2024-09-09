import { PaginationItem, PaginationLink } from '../ui/pagination';

interface IPaginationItemLinkProps {
  key: number;
  pageNumber: number;
  onClick: () => void;
  isVisible: boolean;
  className: string;
}

function PaginationItemLink({ key, pageNumber, onClick, isVisible, className }: IPaginationItemLinkProps) {
  if (!isVisible) return null;
  return (
    <PaginationItem key={key}>
      <PaginationLink className={className} onClick={onClick}>
        {pageNumber}
      </PaginationLink>
    </PaginationItem>
  );
}

export default PaginationItemLink;
