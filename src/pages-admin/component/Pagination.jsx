export default function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <nav>
      <ul className="justify-end flex flex-row gap-4 text-base text-maintext">
        <li className="">
          <a className="" onClick={goToPrevPage} href="#">
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`${currentPage == pgNumber ? "active" : ""} `}
          >
            <a onClick={() => setCurrentPage(pgNumber)} className="" href="#">
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="">
          <a className="" onClick={goToNextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}
