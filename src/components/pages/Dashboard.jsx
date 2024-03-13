// import React from 'react';
// import "../style/dashboard.css";
// import DataTable from './DataTable';
// import axios from 'axios';

// export default function Dashboard() {
//   const columns = React.useMemo(
//     () => [
//       {
//         Header: 'Users',
//         accessor: 'image',
//         Cell: ({ row }) => (
//           <img
//             style={{ borderRadius: "50% 50%", width: "50%" }}
//             src={`https://i.pravatar.cc/50?u=${row.original.id}`}
//             alt={`Profile ${row.original.name}`}
//           />
//         ),
//       },
//       {
//         Header: 'Name',
//         accessor: (row) => `${row.firstName} ${row.lastName}`,
//         cell: ({ cell }) => (
//           <div>{cell.value}</div>
//         )
//       },
//       {
//         Header: 'Email',
//         accessor:'email',
//       },
//       {
//         Header: 'Phone',
//         accessor: "phone",
//       },
//       {
//         Header: 'DOB',
//         accessor: 'birthDate',
//       },
//     ],
//     [],
//   );

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
//       <h2 className='text-center'>Dashboard</h2>
//       <DataTable columns={columns} fetchData={fetchData} />
//     </div>
//   );
// }




// import React, { useEffect, useState } from 'react';
// import "../style/dashboard.css";
// import DataTable from './DataTable';
// import axios from 'axios';

// export default function Dashboard() {
//   const [apiColumns, setApiColumns] = useState([]);
//   const [additionalColumns, setAdditionalColumns] = useState(['Email','Phone','Age']); // Add your additional columns here

//   useEffect(() => {
//     const fetchColumnNames = async () => {
//       try {
//         const response = await axios.get('https://your-api-endpoint/columns');
//         // Assuming the response.data.columns is an array of column names
//         setApiColumns(response.data.columns || []);
//       } catch (error) {
//         console.error('Error fetching column names:', error);
//         setApiColumns([]);
//       }
//     };

//     fetchColumnNames();
//   }, []);

//   const generateColumns = (columnNames) => {
//     const mergedColumns = [...columnNames, ...additionalColumns];
//     return mergedColumns.map((columnName) => ({
//       Header: columnName,
//       accessor: columnName.toLowerCase(), // Using column name as accessor (assuming it's lowercase)
//     }));
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
//       <h2 className='text-center'>Dashboard</h2>
//       <DataTable columns={columns} fetchData={fetchData} />
//     </div>
//   );
// }






// useEffect(() => {
//   const fetchColumnNames = async () => {
//     try {
//       const response = await axios.get('https://your-api-endpoint/columns');
//       setApiColumns(response.data.columns || []);
//     } catch (error) {
//       console.error('Error fetching column names:', error);
//       setApiColumns([]);
//     }
//   };

//   fetchColumnNames();
// }, []);

// const generateColumns = (columnNames) => {
//   const additionalColumns = ['UserName','Email','Height','Weight', 'Phone', 'Age'];
//   const Columns = [...columnNames, ...additionalColumns];
//   return Columns.map((columnName) => ({
//     Header: columnName,
//     accessor : columnName.toLowerCase(),

//   }));
// };

// import React, { useState } from 'react';
// import "../style/dashboard.css";
// import DataTable from './DataTable';
// import axios from 'axios';
// import {exportToExcel} from "react-easy-export";
// import { exportToPDF} from "react-easy-export";


// export default function Dashboard() {
//   const [apiColumns] = useState([]);


//   const generateColumns = (columnNames) => {
//     const additionalColumns = ['Id','Image', 'UserName', 'Email', 'Height', 'Weight', 'Age','Phone','vishad'];
//     const columnsToDisableSort=['Email',]
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
//           disableGlobalFilter: true,
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

//   const handleExportToExcel = () => {
//     exportToExcel(document.getElementById('dataTable'), 'data_table');
//   };

//   const handleDownloadAsPDF = () => {
//     exportToPDF(document.getElementById('dataTable'), 'data_table');
//   };



//   return (
//     <div className='dashboard'>
//       <h2 className='text-center'>Dashboard</h2>
//       <div className='mt-4 d-flex justify-content-center'>
//         <button className="" onClick={handleExportToExcel}>Export to Excel</button>
//         <button className='' onClick={handleDownloadAsPDF}>Download as PDF</button>
//       </div>
//       <DataTable id={"dataTable"} columns={columns} fetchData={fetchData} />
//     </div>
//   );
// }







// const generateColumns = (columnNames) => {
//   const additionalColumns = ['Id', 'Image', 'UserName', 'Email', 'Phone', 'BirthDate', 'Age', 'Gender'];
//   const columnsToDisableSort = ['Email', 'Id', 'Phone']
//   const Columns = [...columnNames, ...additionalColumns];
//   return Columns.map((columnName) => {
//     if (columnName === 'Image') {
//       return {
//         Header: 'Image',
//         accessor: 'image',
//         Cell: ({ row }) => (
//           <img
//             style={{ borderRadius: "50% 50%", width: "50%" }}
//             src={`https://i.pravatar.cc/50?u=${row.original.id}`}
//             alt={`Profile ${row.original.name}`}
//           />
//         ),
//       };
//     }
//     else if (columnName === 'userName') {
//       return {
//         Header: 'UserName',
//         accessor: (row) => `${row.firstName} ${row.lastName}`,
//       }
//     }
//     else if (columnsToDisableSort.includes(columnName)) {
//       return {
//         Header: columnName,
//         accessor: columnName.toLowerCase(),
//         disableSortBy: true,
//       }
//     }
//     else if (columnName === "birthDate") {
//       return {
//         Header: "birthDate",
//         accessor: "birthdate",
//       }
//     }
//     return {
//       Header: columnName,
//       accessor: columnName.toLowerCase(),
//     };
//   });
// };

import React, { useEffect, useState } from 'react';
import "../style/dashboard.css";
import DataTable from './DataTable';
import axios from 'axios';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import FilterModel from './FilterModel';



export default function Dashboard() {
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterOptions, setFilterOptions] = useState({});
  const [tableData, setTableData] = useState([])
  const [loading, setLoading] = useState(true);




  const columnsTable = [
    { Header: "Id", accessor: "id" },
    {
      Header: 'Image',
      accessor: 'image',
      Cell: ({ row }) => (
        <img
          style={{ borderRadius: "50% 50%", width: "30%" }}
          src={`https://i.pravatar.cc/50?u=${row.original.id}`}
          alt={`Profile ${row.original.name}`}
        />
      )
    },
    {
      Header: "Name",
      accessor: "userName",
      Cell: ({ row }) => (`${row.original.firstName} ${row.original.lastName}`),
    },
    { Header: "Email", accessor: "email" },
    { Header: "Gender", accessor: "gender" },
    { Header: "BirthDate", accessor: "birthDate" },
    { Header: "Age", accessor: "age" },

  ]

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      const userData = response.data.users || [];

      const filteredData = userData.filter(user => {
        return (!filterOptions.birthDate || user.birthDate === filterOptions.birthDate) &&
          (!filterOptions.nextbirthDate || user.nextbirthDate === filterOptions.nextbirthDate)&&
          (!filterOptions.gender || user.gender === filterOptions.gender);
      });

      setTableData(filteredData);
      setLoading(false)
    } catch (error) {
      console.error('Error fetching data:', error);
      setTableData([]);
      setLoading(false);
    }
  };
      
  useEffect(() => {
    fetchData();
  }, [filterOptions]);



  const handleFilter = () => {
    setLoading(true);
    fetchData();
    setShowFilterModal(false);
  };

  const handleBack = () => {
    setLoading(true);
    setFilterOptions({});
    fetchData();
  };


  const handleExportExcel = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      const userData = response.data.users || [];

      const formattedData = userData.map(user => ({
        Id: user.id,
        Image: `https://i.pravatar.cc/50?u=${user.id}`,
        UserName: `${user.firstName} ${user.lastName}`,
        Email: user.email,
        Phone: user.phone,
        Password: user.password,
        Age: user.age,
        Height: user.height,
        BirthDate: user.birthDate,
      }));

      const worksheet = XLSX.utils.json_to_sheet(formattedData);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'UsersData');
      XLSX.writeFile(workbook, 'DashboardData.xlsx');
    } catch (error) {
      console.error('Error exporting to Excel:', error);
    }
  };



  const handleDownloadPDF = (firstTableColumns, firstTableData) => {
    console.log(firstTableColumns, firstTableData);
    const pdfDoc = new jsPDF();
    const totalPages = "{total_pages_count_string}";
    pdfDoc.page = 1;
    pdfDoc.text("Report", 15, 10);


    const column = firstTableColumns.map(col => ({
      header: col.header,
      dataKey: col.datakey
    }));

    console.log(column);
    autoTable(pdfDoc, {
      theme: "grid",
      headStyles: { fontSize: 10 },
      bodyStyles: { fontSize: 8, fontStyle: "italic" },
      body: firstTableData,
      columns: column,
    });

    if (typeof pdfDoc.putTotalPages === "function") {
      pdfDoc.putTotalPages(totalPages);
    }

    pdfDoc.save("DashboardTable.pdf");
  };


  const handleDownloadPDFWithData = async () => {
    try {
      const firstTableColumns = [
        { header: 'Id', datakey: 'id' },
        { header: 'Image', datakey: 'image' },
        { header: 'UserName', datakey: 'userName' },
        { header: 'Email', datakey: 'email' },
        { header: 'Phone', datakey: 'phone' },
        { header: 'Password', datakey: 'password' },
        { header: 'Age', datakey: 'age' },
        { header: 'Height', datakey: 'height' },
        { header: 'BirthDate', datakey: 'birthDate' },
      ];

      const response = await axios.get('https://dummyjson.com/users');
      const userData = response.data.users || [];

      const firstTableData = userData.map(user => ({
        id: user.id,
        image: `https://i.pravatar.cc/50?u=${user.id}`,
        userName: `${user.firstName} ${user.lastName}`,
        email: user.email,
        phone: user.phone,
        password: user.password,
        age: user.age,
        height: user.height,
        birthDate: user.birthDate,
      }));
      console.log(firstTableData);

      handleDownloadPDF(firstTableColumns, firstTableData);
    } catch (error) {
      console.error('Error downloading to PDF:', error);
    }
  };



  return (
    <div className='dashboard container-fluid'>
      <h2 className='text-center'>Dashboard</h2>
      <div className='container'>
        <button className='btn btn-success btn-sm  ms-4' onClick={handleExportExcel}> Export excel </button>
        <button className='btn btn-success btn-sm ms-2' onClick={handleDownloadPDFWithData}>Download to PDF</button>
        <button className='btn btn-primary btn-sm  float-end me-4 ' onClick={handleBack}>Back</button>
        <button className='btn btn-primary btn-sm  float-end me-2' onClick={() => setShowFilterModal(true)}>Filter</button>
      </div>
      <FilterModel
        show={showFilterModal}
        onHide={() => setShowFilterModal(false)}
        onApplyFilter={handleFilter}
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
      />


      <DataTable
        columns={columnsTable}
        data={tableData}
        fetchData={() => fetchData(filterOptions)}
        loading={loading}
      />

    </div>
  );
}