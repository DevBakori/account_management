// import React from 'react';
// import "../style/ppf.css"

// const WorkingHourTable = ({ tableData }) => {
//   const daysOfWeek = Object.keys(tableData);

//   // Transpose the data to display days as columns
//   const transposedData = daysOfWeek.reduce((acc, day) => {
//     const { startTime, endTime } = tableData[day];
//     acc.startTime.push(startTime);
//     acc.endTime.push(endTime);
//     return acc;
//   }, { startTime: [], endTime: [] });

//   return (
//     <div className="ppf">
//       <hr/>
//       {/* <h4 className='ms-3'><u>Working Hours Table</u></h4> */}
//       <table className="table mt-2 text-center ">
//         <thead>
//           <tr>
//             <th>Id</th>
//             {daysOfWeek.map((day) => (
//               <th key={day}>{day}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Start Time</td>
//             {transposedData.startTime.map((time, index) => (
//               <td key={index}>{time}</td>
//             ))}
//           </tr>
//           <tr>
//             <td>End Time</td>
//             {transposedData.endTime.map((time, index) => (
//               <td key={index}>{time}</td>
//             ))}
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default WorkingHourTable;











 // const handleEdit = (index) => {
  //   const selectedRowData = tableData[index];
    
  //   const updatedFormData = {
  //     sunday: { ...selectedRowData[0] },
  //     monday: { ...selectedRowData[1] },
  //     tuesday: { ...selectedRowData[2] },
  //     wednesday: { ...selectedRowData[3] },
  //     thursday: { ...selectedRowData[4] },
  //     friday: { ...selectedRowData[5] },
  //     saturday: { ...selectedRowData[6] },
  //   };


  //   const newFormData = { ...formData, workingHours: updatedFormData };
  //   setFormData(newFormData);

  

    
  //   setFormData((prevFormData) => ({
  //     ...prevFormData,
  //     workingHours: updatedFormData,
  //   }));
    
  //   onEdit(index);
  //   if (typeof onSubmit === 'function') {
  //     onSubmit(formData, index);
  //   } else {
  //     console.error('onSubmit is not a function');
  //   }
  // };

  // const handleEdit = (index) => {
  //   onEdit(index);
  //   if (typeof handleEdit === 'function')
  //   {
  //     handleEdit(formData, index);
  //   } else {
  //     console.error('error');
  //   }
  // };

import React from 'react';

const WorkingHourTable = ({ tableData, onDelete, onEdit,formData, setFormData }) => {

  const handleDelete = (index) => {
    onDelete(index);
  };
  

  // const handleEdit = (index) => {
  //   onEdit(index);
  // };
  const handleEdit = (index) => {
    onEdit(index);
    if (typeof setFormData === 'function') {
      setFormData({
        workingHours: {
          sunday: { ...formData.workingHours.sunday, ...tableData[index][0] },
          monday: { ...formData.workingHours.monday, ...tableData[index][1] },
          tuesday: { ...formData.workingHours.tuesday, ...tableData[index][2] },
          wednesday: { ...formData.workingHours.wednesday, ...tableData[index][3] },
          thursday: { ...formData.workingHours.thursday, ...tableData[index][4] },
          friday: { ...formData.workingHours.friday, ...tableData[index][5] },
          saturday: { ...formData.workingHours.saturday, ...tableData[index][6] },
        },
      });
    }
  };


  return (
    <div className='working-hour-table mt-4'>
      <h4 className='ms-3'><u>Working Hour Table</u></h4>
      <table className='table table-bordered text-center mt-3'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Sun</th>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {Object.keys(data).map((day) => (
                <td key={day}>
                  {data[day].selected
                    ? `${data[day].startTime || "00:00"} - ${data[day].endTime ||"00:00"}`
                    : 'Closed'}
                </td>
              ))}
              <td>
              <button type='button' className="btn btn-warning btn-sm"
                  onClick={() => handleEdit(index)}>
                  Edit
                </button>&nbsp;
                <button type="button" className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(index)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default WorkingHourTable;





