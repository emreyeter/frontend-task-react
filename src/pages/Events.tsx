import React, { useState, useEffect, useMemo } from 'react';

import { Search, TableView } from '../components';

import { getDiscoveryEvent } from '../commons/api';

import { PaginationProps } from '../models/TableViewModel';
import { Link } from 'react-router-dom';


const ITEM_FETCH_SIZES = '8'

const HEADER_ITEMS = [
    'Name',
    'Date',
    'Actions'
]

var searchKey = ''

export default () => {


    const [data, setData] = useState(null)

    const handleApiCall = async (keyword = '', page = '0') => {
        const response = await getDiscoveryEvent({
            size: ITEM_FETCH_SIZES,
            keyword,
            page
        })
        searchKey = keyword
        setData(response.data)
    }

    useEffect(() => {
        handleApiCall()
    }, []);



    const renderActions = (event: any, id: string) =>
        <Link 
            className='btn btn-secondary'
            state={event}
            to={`event/${id}`}>

            Details
        </Link>



    const getRequiredFields = (event) => {
        // get required fields from fetched data
        return [
            event.name,
            event.dates.start.localDate,
            renderActions(event, event.id)
        ]
    }


    const handleChangePage = (page: number) => {
        handleApiCall(searchKey, page.toString())
    }

    const mappedPagination: PaginationProps = {
        ...data?.page,
        handleChangePage
    }

    const mapped = useMemo(() => {
        return data?._embedded?.events?.map((event) => {
            return getRequiredFields(event)
        }) ?? [];
    }, [data])

    return (
        <div className="container" >
            

            <div className='d-flex justify-content-center m-4' >
                <img src="https://tarfin.com/img/logo.svg" alt="Tarfin Logo" />
            </div>

            <Search
                onSearch={handleApiCall}
            />
            <TableView
                pagination={mappedPagination}
                items={mapped}
                headers={HEADER_ITEMS}

            />
        </div>
    );
}

