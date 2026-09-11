type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({ page, totalPages, onPageChange }: PaginationProps) => {
  return (
    <div>
      <button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        Previous
      </button>
      <button onClick={() => onPageChange(1)}>1</button>
      <button onClick={() => onPageChange(2)}>2</button>
      <button onClick={() => onPageChange(3)}>3</button>
      {/* <span>
        Page {page} of {totalPages}
      </span> */}
      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
