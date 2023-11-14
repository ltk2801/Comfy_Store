import { useLoaderData, useLocation, useNavigate } from "react-router-dom";
import {
  TbPlayerTrackPrevFilled,
  TbPlayerTrackNextFilled,
} from "react-icons/tb";

const PaginationContainer = () => {
  // Lấy ra meta trả về từ lazyLoader
  const { meta } = useLoaderData();

  // Lấy ra pageCount và page từ API
  const { pageCount, page } = meta.pagination;

  // Lấy ra số page tạo thành 1 mảng 1 2 3...
  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });
  // lấy ra pathname và search từ useLocation()
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  // Handler page change
  const handlePageChange = (pageNumber) => {
    // tạo thành 1 URL search Params mới
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        {page > 1 && (
          <button
            className="join-item btn btn-xs sm:btn-md mr-1  hover:btn-pagination-hover "
            onClick={() => {
              let prevPage = page - 1;
              handlePageChange(prevPage);
            }}
          >
            <TbPlayerTrackPrevFilled />
          </button>
        )}

        {pages.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`btn btn-xs md:btn-md border-none join-item  ${
              pageNumber === page
                ? "bg-primary border-primary hover:bg-primary hover:border-primary"
                : "hover:btn-pagination-hover"
            }`}
          >
            {pageNumber}
          </button>
        ))}
        {page < pageCount && (
          <button
            className="join-item btn btn-xs sm:btn-md ml-1 hover:bg-primary hover:border-primary hover:btn-pagination-hover"
            onClick={() => {
              let nextPage = page + 1;
              handlePageChange(nextPage);
            }}
          >
            <TbPlayerTrackNextFilled />
          </button>
        )}
      </div>
    </div>
  );
};

export default PaginationContainer;
