import React, { useState } from 'react';

import Pagination from './Pagination';

import { TableViewModel, } from '../models/TableViewModel';

const TableView = ({ items, pagination, headers }: TableViewModel) => {

  const [sortType, setSortType] = useState({ index: 0, isAscending: true });

  const handleSort = (index: number) => {
    setSortType({
      index,
      isAscending: sortType.index === index ?
        !sortType.isAscending
        :
        true
    })
  }


  const renderHeaders = () =>
    <thead>
      <tr>
        {
          ['#', ...headers].map((item, index) => {
            const sortCharacterType = sortType.isAscending ? '▲' : '▼';
            const isEqualIndex = sortType.index === index;

            return (
              <th
                onClick={() => handleSort(index)}
                scope="col"
                key={`header-${index}`}>
                {item} {isEqualIndex && sortCharacterType}
              </th>
            )
          }
          )
        }
      </tr>
    </thead>



  const sortedItems = items.map((item, index) => {

    const currentIndex = (pagination.number) * pagination.size + index + 1;
    return [
      currentIndex,
      ...item
    ]
  }).sort((a, b) => {
    return (
      sortType.isAscending ?
        a[sortType.index] > b[sortType.index]
        :
        a[sortType.index] < b[sortType.index]
    ) ? 1 : -1
  });

  const renderBody = () =>
    <tbody>
      {
        sortedItems.map((item, index) =>
          <tr key={`row-${index}`}>
            {
              item.map((cell, cellIndex) =>
                <td key={`cell-${cellIndex}`}>
                  {cell}
                </td>
              )
            }
          </tr>
        )
      }
    </tbody>


  return (
    <>

      <table className="table table-striped">
        {renderHeaders()}
        {renderBody()}
      </table>

      <Pagination {...pagination} />

    </>
  );
}

export default TableView;
