import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "./ui/pagination";
  
  type Props = {
    page: number;
    pages: number;
    onPageChange: (page: number) => void;
  };
  
  const PaginationSelector = ({ page, pages, onPageChange }: Props) => {
    const pageNumbers = [];
    for (let i = 1; i <= pages; i++) {
      pageNumbers.push(i);
    }
  
    return (
      <Pagination>
        <PaginationContent>
          {page !== 1 && (
            <PaginationItem>
              <PaginationPrevious
                href="#"
                size="sm"
                onClick={() => onPageChange(page - 1)}
              />
            </PaginationItem>
          )}
  
          {pageNumbers.map((number) => (
            <PaginationItem>
              <PaginationLink
                href="#"
                size=""
                onClick={() => onPageChange(number)}
                isActive={page === number}
              >
                {number}
              </PaginationLink>
            </PaginationItem>
          ))}
  
          {page !== pageNumbers.length && (
            <PaginationItem>
              <PaginationNext href="#" size="sm" onClick={() => onPageChange(page + 1)} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    );
  };
  
  export default PaginationSelector;