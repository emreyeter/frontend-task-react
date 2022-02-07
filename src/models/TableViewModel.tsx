export interface TableViewModel {
    items: string[][];
    headers: string[];
    pagination : PaginationProps;
}


export interface PaginationProps {
    size: number;
    totalPages: number;
    number: number;
    handleChangePage: (number: number) => void;
}

