// // import React from 'react'
// // import '../style/bank.css'
// // import DataTable from './DataTable'

// // export default function Bank() {
// //   const columnsToShow = ['Users', 'Name', 'Email'];
// //   const columnsWithSortingDisabled = ['Name','Email'];
// //   return (
// //     <div className='bank mb-5'>
// //       <h2 className='text-center'>Banks</h2>
// //       <DataTable columnsToShow={columnsToShow}  disableSortBy={columnsWithSortingDisabled}  />
// //     </div>
// //   )
// // }




//   // useEffect(() => {
//   //   const fetchColumnNames = async () => {
//   //     try {
//   //       const response = await axios.get('https://your-api-endpoint/columns');
//   //       setApiColumns(response.data.columns || []);
//   //     } catch (error) {
//   //       console.error('Error fetching column names:', error);
//   //       setApiColumns([]);
//   //     }
//   //   };

//   //   fetchColumnNames();
//   // }, []);

//   // const generateColumns = (columnNames) => {
//   //   const additionalColumns = ['UserName','Email','Height','Weight', 'Phone', 'Age'];
//   //   const Columns = [...columnNames, ...additionalColumns];
//   //   return Columns.map((columnName) => ({
//   //     Header: columnName,
//   //     accessor : columnName.toLowerCase(),

//   //   }));
// // };
  
// import React, { useState } from 'react';
// import "../style/dashboard.css";
// import DataTable from './DataTable';
// import axios from 'axios';

// export default function Dashboard() {
//   const [apiColumns] = useState([]);


//   const generateColumns = (columnNames) => {
//     const additionalColumns = ['Id','Image', 'UserName', 'Email','Domain','Phone', 'Weight', 'Age'];
//     const columnsToDisableSort = ['Email','Id'];
//     const Columns = [...columnNames, ...additionalColumns];
//     return Columns.map((columnName) => {
//       if (columnName === 'Image') {
//         return {
//           Header: 'Image',
//           accessor: 'image',
//           Cell: ({ row }) => (
//             <img
//               style={{ borderRadius: "50% 50%", width: "50%" }}
//               src={`https://i.pravatar.cc/50?u=${row.original.id}`}
//               alt={`Profile ${row.original.name}`}
//             />
//           ),
//         };
//       }
//       else if (columnName === 'UserName') {
//         return {
//           Header: 'UserName',
//           accessor: (row) => `${row.firstName} ${row.lastName}`,
//         }
//       }
//       else if (columnsToDisableSort.includes(columnName)) {
//         return {
//           Header: columnName,
//           accessor: columnName.toLowerCase(),
//           disableSortBy: true,
//         }
//       }
//       return {
//         Header: columnName,
//         accessor: columnName.toLowerCase(),
//       };

//     });
//   };

//   const columns = React.useMemo(() => generateColumns(apiColumns), [apiColumns]);

//   const fetchData = async () => {
//     try {
//       const response = await axios.get('https://dummyjson.com/users');
//       return response.data.users || [];
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       return [];
//     }
//   };

//   return (
//     <div className='dashboard'>
//       <h2 className='text-center'>Bank</h2>
//       <DataTable columns={columns} fetchData={fetchData} />
//     </div>
//   );
// }

import React from 'react'

export default function UploadStatements() {
  return (
    <div className='bankaccounts'>  
    {/* change class name */}
      <h2 className='text-center'>Bank</h2>
    </div>
  )
}
