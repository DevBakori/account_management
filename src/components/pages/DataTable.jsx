// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
// import "../style/dashboard.css";


// function Datatable({ columnsToShow, disableSortBy }) {
//     const [data, setData] = useState([]);

//     const columns = React.useMemo(
//         () => {
//             const allColumns = [
//                 {
//                     Header: 'Users',
//                     accessor: 'image',
//                     Cell: ({ row }) => (
//                         <img
//                             style={{ borderRadius: "50% 50%", width: "50%" }}
//                             src={`https://i.pravatar.cc/50?u=${row.original.id}`}
//                             alt={`Profile ${row.original.name}`}
//                         />
//                     ),
//                     disableSortBy: disableSortBy.includes('Users'),

//                 },
//                 {
//                     Header: 'Name',
//                     accessor: (row) => `${row.firstName} ${row.lastName}`,
//                     Cell: ({ cell }) => (
//                         <div>
//                             {cell.value}
//                         </div>
//                     ),
//                     disableSortBy: disableSortBy.includes('Name'),
//                 },
//                 {
//                     Header: 'Email',
//                     accessor: 'email',
//                     disableSortBy: disableSortBy.includes('Email'),
//                 },
//                 {
//                     Header: 'DOB',
//                     accessor: 'birthDate',
//                     disableSortBy: disableSortBy.includes('DOB'),
//                 },
//                 {
//                     Header: 'Gender',
//                     accessor: 'gender',
//                     disableSortBy: disableSortBy.includes('Gender'),
//                 },
//                 {
//                     Header: 'Age',
//                     accessor: 'age',
//                     disableSortBy: disableSortBy.includes('Age'),
//                 },
//                 {
//                     Header: 'City',
//                     accessor: 'address.city',
//                     disableSortBy: disableSortBy.includes('City'),
//                 },
//                 {
//                     Header: 'Password',
//                     accessor: 'password',
//                     disableSortBy: disableSortBy.includes('Password'),
//                 },
//                 {
//                     Header: 'Domain',
//                     accessor: 'domain',
//                     disableSortBy: disableSortBy.includes('Domain'),
//                 },
//                 {
//                     Header: 'State',
//                     accessor: 'company.address.state',
//                     disableSortBy: disableSortBy.includes('State'),
//                 },
//                 {
//                     Header: 'Phone',
//                     accessor: 'phone',
//                     disableSortBy: disableSortBy.includes('Phone'),
//                 },

//             ];
//             return allColumns.filter(column => columnsToShow.includes(column.Header))
//         },
//         [columnsToShow, disableSortBy]);

//     useEffect(() => {
//         axios.get('https://dummyjson.com/users')
//             .then((response) => {
//                 const userData = response.data.users || [];
//                 const userDataWithColumns = userData.map(user => ({
//                     ...user
//                 }));
//                 setData(userDataWithColumns);
//             });
//     }, []);


//     const {
//         getTableProps,
//         getTableBodyProps,
//         headerGroups,
//         prepareRow,
//         state,
//         setGlobalFilter,
//         page,
//         gotoPage,
//         nextPage,
//         previousPage,
//         pageCount,
//         canNextPage,
//         canPreviousPage,
//         state: { pageIndex, pageSize },
//         setPageSize,
//     } = useTable(
//         {
//             columns,
//             data,
//             initialState: { pageIndex: 0, pageSize: 10 },
//         },
//         useGlobalFilter,
//         useSortBy,
//         usePagination,
//     );


//     return (
//         <div className="dashboard" style={{ padding: '10px 2%', margin: '1%', height: '180vh' }}>
//             <div>
//                 <input
//                     type="text"
//                     value={state.globalFilter || ''}
//                     onChange={(e) => setGlobalFilter(e.target.value)}
//                     placeholder="Search User Data..."
//                 />
//             </div>
//             <div>
//                 <table {...getTableProps()} className="table  table-sm table-warning border border-warning mt-3 me-5 " style={{ color: "white" }}>
//                     <thead>
//                         {headerGroups.map((headerGroup) => (
//                             <tr {...headerGroup.getHeaderGroupProps()}>
//                                 {headerGroup.headers.map((column) => (
//                                     <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                                         {column.render('Header')}
//                                         <span>
//                                             {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
//                                         </span>
//                                     </th>
//                                 ))}
//                             </tr>
//                         ))}
//                     </thead>
//                     <tbody {...getTableBodyProps()}>
//                         {page.map((row, i) => {
//                             prepareRow(row);
//                             return (
//                                 <tr {...row.getRowProps()} key={i}>
//                                     {row.cells.map((cell) => {
//                                         return (
//                                             <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                                         );
//                                     })}
//                                 </tr>
//                             );
//                         })}

//                     </tbody>
//                 </table>
//             </div>

//             <div>
//                 <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
//                     {'<<'}
//                 </button>{' '}
//                 <button onClick={() => previousPage()} disabled={!canPreviousPage}>
//                     {'<'}
//                 </button>{' '}
//                 <button onClick={() => nextPage()} disabled={!canNextPage}>
//                     {'>'}
//                 </button>{' '}
//                 <button onClick={() => gotoPage(pageCount - 1)}>
//                     {'>>'}
//                 </button>{' '}
//                 <span>
//                     Page{' '}
//                     <strong>
//                         {pageIndex + 1} of {pageCount}
//                     </strong>{' '}
//                 </span>
//                 <select
//                     value={pageSize}
//                     onChange={(e) => {
//                         setPageSize(Number(e.target.value));
//                     }}
//                 >
//                     {[5, 10, 15].map((pageSize) => (
//                         <option key={pageSize} value={pageSize}>
//                             Show {pageSize}
//                         </option>
//                     ))}
//                 </select>
//             </div>
//         </div>
//     );
// }
// export default Datatable;



import React from 'react';
import { useTable, useGlobalFilter, useSortBy, usePagination } from 'react-table';

function DataTable({ columns, data , loading }) {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        state,
        setGlobalFilter,
        page,
        gotoPage,
        nextPage,
        previousPage,
        pageCount,
        canNextPage,
        canPreviousPage,
        state: { pageIndex, pageSize },
        setPageSize,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0, pageSize: 5},
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
        );
        if (loading) {
            return <div className='text-center'>Loading...</div>;
          }



    return (

        <div className="dashboard" style={{ padding: '10px 2%', margin: '1%', height: '120vh' }}>
            <div className='text-center'>
                <input
                    type="text"
                    value={state.globalFilter || ''}
                    onChange={(e) => setGlobalFilter(e.target.value)}
                    placeholder="Search Users..."
                />
            </div>
            <div>
                <table {...getTableProps()} className="table table-sm table-warning border border-warning mt-3 me-5 " style={{ color: "white" }}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                        {column.render('Header')}
                                        <span>
                                            {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                        </span>
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row, i) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} key={i}>
                                    {row.cells.map((cell) => {
                                        return (
                                            <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        );
                                    })}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <div>
                <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                </button>{' '}
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                </button>{' '}
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                </button>{' '}
                <button onClick={() => gotoPage(pageCount - 1)}>
                    {'>>'}
                </button>{' '}
                <span>
                    <strong>
                        Page{' '}
                        {pageIndex + 1} of {pageCount}
                    </strong>{' '}
                </span>
                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}
                >
                    {[5, 8, 10].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
            </div>
           
        </div>
    );
}

export default DataTable;