import React from 'react';
import { PaginationProps } from '../models/TableViewModel';


const PAGINATION_SIZE = 2;

const PAGINATION_BUTTON_LABELS = [
    'Previous',
    'Next'
]

const Pagination = ({ number, totalPages, handleChangePage }: PaginationProps) => {

    const renderPageItem = (page: number) => {

        const isActive = (number + 1) === page
        const isActiveStyle = `page-item ${isActive && 'active'}`

        const onClick = (eventHandler: any) => {
            !isActive && handleChangePage(page - 1)
        }

        return (
            <li onClick={onClick} key={`page-${page}`} className={isActiveStyle}>
                <a className="page-link" >
                    {page}
                </a>
            </li>
        )
    }


    const getPaginationButton = () => {
        const paginationButton = [];

        const start = (number + 1) - PAGINATION_SIZE;
        const end = (number + 1) + PAGINATION_SIZE;

        for (let i = start; i <= end; i++) {
            if (i > 0 && i <= totalPages) {
                paginationButton.push(renderPageItem(i));
            }
        }

        return paginationButton;
    }




    const isPreviousEnabled = number > 0;
    const isNextEnabled = number < totalPages - 1;


    const handleBigButtonPress = (isPrevious: boolean) => {
        const page = number + (isPrevious ? -1 : 1);
        handleChangePage(page);
    }

    const renderOtherButtons = (title: string, isEnabled: boolean) => {
        const isPrevious = title === PAGINATION_BUTTON_LABELS[0];
        return (
            <li
                onClick={() => isEnabled && handleBigButtonPress(isPrevious)}
                className={`page-item ${!isEnabled && 'disabled'}`}>

                <a className="page-link" >{title}</a>
            </li>

        )
    }



    return (
        <nav>
            <ul className="pagination justify-content-end">
                {renderOtherButtons(PAGINATION_BUTTON_LABELS[0], isPreviousEnabled)}
                {getPaginationButton()}
                {renderOtherButtons(PAGINATION_BUTTON_LABELS[1], isNextEnabled)}
            </ul>
        </nav>
    );
}


export default Pagination;