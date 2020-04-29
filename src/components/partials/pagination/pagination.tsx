import React, {useEffect, useState, MouseEvent} from "react";
import "./pagination.scss";
import {useDispatch, useSelector} from "react-redux";
import {IRootState} from "../../../store";
import {changeCurrentPage} from "../../../store/pagination/actions";

const Pagination = () => {
    const dispatch = useDispatch();
    const {currentPage, limit} = useSelector(({pagination}: IRootState) => pagination);
    const {products, loading, error} = useSelector(({products}: IRootState) => products);
    const [pages, setPages] = useState<number[]>([]);

    useEffect(() => {
        if (!products.length) return;

        const allPages = [];
        const ceilingPages = Math.ceil(products.length / limit);
        for (let i = 1; i <= ceilingPages; i++) allPages.push(i);

        setPages(allPages);
    }, [products.length, limit]);

    const setCurrentPage = (e: MouseEvent, page: number) => {
        e.preventDefault();

        if (page === currentPage) return;
        if (currentPage > page && currentPage === 1) return;
        if (page > currentPage && currentPage === pages.length) return;

        dispatch(changeCurrentPage(page));
    };

    if (loading || error) return null;
    if (pages && pages.length === 1) return null;

    return (
        <ul className="pagination">
            {
                pages && (
                    <>
                        <li className={currentPage === 1 ? 'disabled waves-effect' : 'waves-effect'}>
                            <a href="#!"
                               onClick={(e) => setCurrentPage(e, currentPage - 1)}>
                                <i className="material-icons">chevron_left</i>
                            </a>
                        </li>
                        {
                            pages.map(item =>
                                <li className={currentPage === item ? 'active' : ''}
                                    key={item}
                                    onClick={(e) => setCurrentPage(e, item)}>
                                    <a href="#!">{item}</a>
                                </li>
                            )
                        }
                        <li className={currentPage === pages.length ? 'disabled waves-effect' : 'waves-effect'}>
                            <a href="#!"
                               onClick={(e) => setCurrentPage(e, currentPage + 1)}>
                                <i className="material-icons">chevron_right</i>
                            </a>
                        </li>
                    </>
                )
            }
        </ul>
    )
};

export default Pagination;