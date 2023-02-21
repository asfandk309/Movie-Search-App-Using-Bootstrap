import { useState } from "react";

const Pagination = ({ setPage, pages }) => {
    const [page, setCurrentPage] = useState(1);
    // const gen_pages = Array.from({ length: pages }, (_, i) => i + 1);
    const handlePageChange = (x) => {
        setCurrentPage(x);
        setPage(x);
    }
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-end">
                {<li className={`page-item ${page === 1 ? "disabled":" "}`} onClick={() => handlePageChange(1)}>
                    <a className="page-link">{"<<"}</a>
                </li>
                }
                {<li className={`page-item ${page === 1 ? "disabled":" "}`} onClick={() => handlePageChange(page - 1)}>
                    <a className="page-link">{"<"}</a>
                </li>
                }
                {page !== 1 && <li className="page-item" onClick={() => handlePageChange(page - 1)}>
                    <a className="page-link">{page - 1}</a>
                </li>
                }
                <li className="page-item active" onClick={() => handlePageChange(page)}>
                    <a className="page-link">{page}</a>
                </li>
                {page !== pages && <li className="page-item" onClick={() => handlePageChange(page + 1)}>
                    <a className="page-link">{page + 1}</a>
                </li>}
                {<li className={`page-item ${page === pages ? "disabled":" "}`} onClick={() => handlePageChange(page + 1)}>
                    <a className="page-link">{">"}</a>
                </li>}
                {<li className={`page-item ${page === pages ? "disabled":" "}`} onClick={() => handlePageChange(pages)}>
                    <a className="page-link">{">>"}</a>
                </li>}
            </ul>
        </nav>
    );
};

export default Pagination;
