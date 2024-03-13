// import React from 'react'
// import ppf from '../style/ppf.css'

// export default function Ppf() {
//   return (
//     <div className='ppf'>
//       <h2 className='text-center'>Ppf Account</h2>
//     </div>
//   )
// }

// import React, { useState } from "react";
// import "../style/ppf.css";

// const WorkingHoursForm = () => {
//   const [workingHours, setWorkingHours] = useState({
//     start: "",
//     end: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setWorkingHours({ ...workingHours, [name]: value });

//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("WorkingHourStart:" + workingHours.start , "WorkingHourEnd:" + workingHours.end);


//   };

//   return (
//     <div className="ppf ms-5 mt-5">
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="start">Start Time:</label>
//       <input
//         type="time"
//         id="start"
//         name="start"
//         value={workingHours.start}
//         onChange={handleChange}
//       />
//       <label htmlFor="end">End Time:</label>
//       <input
//         type="time"
//         id="end"
//         name="end"
//         value={workingHours.end}
//           onChange={handleChange}
//           />
//       <br />
//         <button type="submit">Submit</button>
//       </form>
//       </div>
//   );
// };

// export default WorkingHoursForm;






// {/* <form onSubmit={handleSubmit}>
//       <section className='mt-2'>
//         <h4 className='ms-4'>Working Hours</h4>


//         <div className='container mt-2'>
//           <div className='row align-items-center'>
//             <div className='col-sm'>
//               <label>sunday &nbsp;</label>
//               <input
//                 type="time"
//                 onChange={(e) => handleWorkingHoursChange('sunday', 'startTime', e.target.value)}
//               />
//               <input
//                 type="time"
//                 onChange={(e) => handleWorkingHoursChange('sunday', 'endTime', e.target.value)}
//               />
//             </div>
//             <div className='col-sm'>
//               <label className=''>Monday &nbsp;</label>
//               <input
//                 type="time"
//                 onChange={(e) => handleWorkingHoursChange('monday', 'startTime', e.target.value)}
//               />
//               <input
//                 type="time"
//                 onChange={(e) => handleWorkingHoursChange('monday', 'endTime', e.target.value)}
//               />
//             </div>
//             <div className='col-sm'>
//               <label>tuesday &nbsp;</label>
//               <input
//                 type="time"
//                 onChange={(e) => handleWorkingHoursChange('tuesday', 'startTime', e.target.value)}
//               />
//               <input
//                 type="time"
//                 onChange={(e) => handleWorkingHoursChange('tuesday', 'endTime', e.target.value)}
//               />
//             </div>
//             <div className='col-sm'>
//               <label>wednesday &nbsp;</label>
//               <input
//                 type="time"
//                 onChange={(e) => handleWorkingHoursChange('wednesday', 'startTime', e.target.value)}
//               />
//               <input
//                 type="time"
//                 onChange={(e) => handleWorkingHoursChange('wednesday', 'endTime', e.target.value)}
//               />
//             </div>
//           </div>


//           <div className='row mt-3 align-items-center'>
//             <div className='col-sm'>
//               <label>thuesday &nbsp;</label>
//               <input
//                 type="time"
//                 onChange={(e) => handleWorkingHoursChange('thuesday', 'startTime', e.target.value)}
//               />
//               <input
//                 type="time"
//                 onChange={(e) => handleWorkingHoursChange('thuesday', 'endTime', e.target.value)}
//               />
//             </div>
//             <div className='col-sm'>
//               <label>friday &nbsp;</label>
//               <input
//                 type="time"
//                 onChange={(e) => handleWorkingHoursChange('friday', 'startTime', e.target.value)}
//               />
//               <input
//                 type="time"
//                 onChange={(e) => handleWorkingHoursChange('friday', 'endTime', e.target.value)}
//               />
//             </div>
//             <div className='col-sm'>
//               <label>saturday &nbsp;</label>
//               <input
//                 type="time"
//                 onChange={(e) => handleWorkingHoursChange('saturday', 'startTime', e.target.value)}
//               />
//               <input
//                 type="time"
//                 onChange={(e) => handleWorkingHoursChange('saturday', 'endTime', e.target.value)}
//               />
//             </div>
//           </div>
//         </div>
//         <div className='buttons ms-4 mt-4 '>
//           <button type="submit" onClick={handleSubmit} className='btn btn-primary'>Submit</button> &nbsp;
//           <button type="reset" onClick={handleReset} className='btn btn-primary'>Reset</button>
//         </div>
//       </section>
//     </form> */}

// import React, { useState } from 'react';
// import "../style/ppf.css";
// import WorkingHourTable from "./WorkingHourTable"

// const Form = () => {

//   const [formData, setFormData] = useState({
//     workingHours: {
//       sunday: { startTime: '00:00', endTime: '00:00', selected: false },
//       monday: { startTime: '00:00', endTime: '00:00', selected: false },
//       tuesday: { startTime: '00:00', endTime: '00:00', selected: false },
//       wednesday: { startTime: '00:00', endTime: '00:00', selected: false },
//       thursday: { startTime: '00:00', endTime: '00:00', selected: false },
//       friday: { startTime: '00:00', endTime: '00:00', selected: false },
//       saturday: { startTime: '00:00', endTime: '00:00', selected: false },
//     },
//   });

//   const [tableData, setTableData] = useState(null);


//   const handleCheck = (day) => (event) => {
//     const { checked } = event.target;
//     setFormData({
//       ...formData,
//       workingHours: {
//         ...formData.workingHours,
//         [day]: {
//           ...formData.workingHours[day],
//           selected: checked,
//         },
//       },
//     });
//   };

//   const handleWorkingHoursChange = (day, timeType, value) => {
//     setFormData({
//       ...formData,
//       workingHours: {
//         ...formData.workingHours,
//         [day]: {
//           ...formData.workingHours[day],
//           [timeType]: value,
//         },
//       },
//     });
//   };


//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const newTableData = Object.values(formData.workingHours);

//     setTableData((prevTableData) => {
//       if (Array.isArray(prevTableData)) {
//         return [...prevTableData, newTableData];
//       } else {
//         return [newTableData];
//       }
//     });
//   setFormData({
//     workingHours: {
//       sunday: { startTime: '00:00', endTime: '00:00', selected: false },
//       monday: { startTime: '00:00', endTime: '00:00', selected: false },
//       tuesday: { startTime: '00:00', endTime: '00:00', selected: false },
//       wednesday: { startTime: '00:00', endTime: '00:00', selected: false },
//       thursday: { startTime: '00:00', endTime: '00:00', selected: false },
//       friday: { startTime: '00:00', endTime: '00:00', selected: false },
//       saturday: { startTime: '00:00', endTime: '00:00', selected: false },
//     },
//   });
//      console.log(formData);
// };

//   const handleReset = () => {
//     const confirmed = window.confirm('Are you sure you want to reset?');

//     if (confirmed) {
//       setFormData({
//         workingHours: {
//           sunday: { startTime: '00:00', endTime: '00:00', selected: false },
//           monday: { startTime: '00:00', endTime: '00:00', selected: false },
//           tuesday: { startTime: '00:00', endTime: '00:00', selected: false },
//           wednesday: { startTime: '00:00', endTime: '00:00', selected: false },
//           thursday: { startTime: '00:00', endTime: '00:00', selected: false },
//           friday: { startTime: '00:00', endTime: '00:00', selected: false },
//           saturday: { startTime: '00:00', endTime: '00:00', selected: false },
//         },
//       });
//     }
//   };

//   const handleDelete = (index) => {
//     const updatedData = [...tableData.slice(0, index), ...tableData.slice(index + 1)];
//     setTableData(updatedData);
//   };

//   const handleEdit = (index) => {
//     const selectedRowData = tableData[index];
//     setFormData({
//       workingHours: {
//         sunday: { ...selectedRowData[0] },
//         monday: { ...selectedRowData[1] },
//         tuesday: { ...selectedRowData[2] },
//         wednesday: { ...selectedRowData[3] },
//         thuesday: { ...selectedRowData[4] },
//         friday: { ...selectedRowData[5] },
//         saturday: { ...selectedRowData[6] },
//       },
//     });
//   };


//   return (
//     <div className='ppf'>
//       <form onSubmit={handleSubmit}>
//         <section className='form-section'>
//           <h4 className='ms-3 mb-3  mt-2'><u>Working Hours </u></h4>
//           <div className='container mt-2'>
//             <div className='mb-5 ms-4 row'>
//               {Object.keys(formData.workingHours).map((day) => (
//                 <div className='col-sm' key={day}>
//                   <label>
//                     <input
//                       type="checkbox"
//                       checked={formData.workingHours[day].selected}
//                       onChange={handleCheck(day)}
//                     />
//                     {day.charAt(0).toUpperCase() + day.slice(1)}
//                   </label>
//                   {formData.workingHours[day].selected && (
//                     <>
//                       <input
//                         type="time"
//                         value={formData.workingHours[day].startTime || ''}
//                         onChange={(e) => handleWorkingHoursChange(day, 'startTime', e.target.value)}
//                       />
//                       <input
//                         type="time"
//                         value={formData.workingHours[day].endTime || ''}
//                         onChange={(e) => handleWorkingHoursChange(day, 'endTime', e.target.value)}
//                       />
//                     </>
//                   )}
//                 </div>
//               ))}
//             </div>
//             <div className='buttons ms-4 mt-4'>
//               <button type="submit" onClick={handleSubmit} className='btn btn-primary'>Submit</button>&nbsp;
//                <button type="reset" onClick={handleReset} className='btn btn-primary'>Reset</button>
//             </div>
//           </div>
//           {tableData && <WorkingHourTable
//             tableData={tableData}
//             onDelete={handleDelete}
//             onEdit={handleEdit} />}
//         </section>
//       </form>

//     </div>
//   );
// };

// export default Form;



// const handleEdit = (index) => {
//   const selectedRowData = tableData[index];
//   setFormData({
//     workingHours: {
//       sunday: { ...selectedRowData[0] },
//       monday: { ...selectedRowData[1] },
//       tuesday: { ...selectedRowData[2] },
//       wednesday: { ...selectedRowData[3] },
//       thursday: { ...selectedRowData[4] },
//       friday: { ...selectedRowData[5] },
//       saturday: { ...selectedRowData[6] },
//     },
//   });
// };


// const handleEdit = (index) => {
//   const selectedRowData = tableData[index];
//   setFormData((prevFormData) => ({
//     workingHours: {
//       sunday: { ...prevFormData.workingHours.sunday, ...selectedRowData[0] },
//       monday: { ...prevFormData.workingHours.monday, ...selectedRowData[1] },
//       tuesday: { ...prevFormData.workingHours.tuesday, ...selectedRowData[2] },
//       wednesday: { ...prevFormData.workingHours.wednesday, ...selectedRowData[3] },
//       thursday: { ...prevFormData.workingHours.thursday, ...selectedRowData[4] },
//       friday: { ...prevFormData.workingHours.friday, ...selectedRowData[5] },
//       saturday: { ...prevFormData.workingHours.saturday, ...selectedRowData[6] },
//     },
//   }));
// };




import React, { useState } from 'react';
import '../style/ppf.css';
import WorkingHourTable from './WorkingHourTable';

const Form = () => {
  const initialFormData = {
    sunday: { startTime: '00:00', endTime: '00:00', selected: false },
    monday: { startTime: '00:00', endTime: '00:00', selected: false },
    tuesday: { startTime: '00:00', endTime: '00:00', selected: false },
    wednesday: { startTime: '00:00', endTime: '00:00', selected: false },
    thursday: { startTime: '00:00', endTime: '00:00', selected: false },
    friday: { startTime: '00:00', endTime: '00:00', selected: false },
    saturday: { startTime: '00:00', endTime: '00:00', selected: false },
  };

  const [formData, setFormData] = useState({ workingHours: initialFormData });
  const [tableData, setTableData] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const handleCheck = (day) => (event) => {
    const { checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      workingHours: {
        ...prevFormData.workingHours,
        [day]: {
          ...prevFormData.workingHours[day],
          selected: checked,
        },
      },
    }));
  };

  const handleWorkingHoursChange = (day, timeType, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      workingHours: {
        ...prevFormData.workingHours,
        [day]: {
          ...prevFormData.workingHours[day],
          [timeType]: value,
        },
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTableData = Object.values(formData.workingHours);
    setTableData((prevTableData) => [...prevTableData, newTableData]);
    setFormData({ workingHours: initialFormData });
    console.log(formData);
  };



  const handleReset = () => {
    const confirmed = window.confirm('Are you sure you want to reset?');
    if (confirmed) {
      setFormData({ workingHours: initialFormData });
      // setTableData([]); // Reset tableData
      setEditIndex(null); // Reset editIndex
    }
  };

  const handleDelete = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
  };



  const handleEdit = (index) => {
    const selectedRowData = tableData[index];
    setFormData({
      workingHours: {
        sunday: { ...formData.workingHours.sunday, ...selectedRowData[0] },
        monday: { ...formData.workingHours.monday, ...selectedRowData[1] },
        tuesday: { ...formData.workingHours.tuesday, ...selectedRowData[2] },
        wednesday: { ...formData.workingHours.wednesday, ...selectedRowData[3] },
        thursday: { ...formData.workingHours.thursday, ...selectedRowData[4] },
        friday: { ...formData.workingHours.friday, ...selectedRowData[5] },
        saturday: { ...formData.workingHours.saturday, ...selectedRowData[6] },
      },
    });
    setEditIndex(index);
  };

  const handleUpdate = () => {
    setTableData((prevTableData) => {
      const updatedData = [...prevTableData];
      updatedData[editIndex] = Object.values(formData.workingHours);
      return updatedData;
    });
    // setFormData({ workingHours: initialFormData });
    // setEditIndex(null);
  };
  const renderSubmitButton = () => {
    if (editIndex !== null) {
      return (
        <button type="button" onClick={handleUpdate} className="btn btn-success">
          Update
        </button>
      );
    }
    return (
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    );
  };



  return (
    <div className="ppf">
      <form onSubmit={handleSubmit}>
        <section className="form-section">
          <h4 className="ms-3 mb-3 mt-2">
            <u>Working Hours </u>
          </h4>
          <div className="container mt-2">
            <div className="mb-5 ms-4 row">
              {Object.keys(formData.workingHours).map((day) => (
                <div className="col-sm" key={day}>
                  <label>
                    <input
                      type="checkbox"
                      checked={formData.workingHours[day].selected}
                      onChange={handleCheck(day)}
                    />
                    {day.charAt(0).toUpperCase() + day.slice(1)}
                  </label>
                  {formData.workingHours[day].selected && (
                    <>
                      <input
                        type="time"
                        value={formData.workingHours[day].startTime || "00:00"}
                        onChange={(e) => handleWorkingHoursChange(day, 'startTime', e.target.value)}
                      />
                      <input
                        type="time"
                        value={formData.workingHours[day].endTime || "00:00"}
                        onChange={(e) => handleWorkingHoursChange(day, 'endTime', e.target.value)}
                      />
                    </>
                  )}
                </div>
              ))}
            </div>
            <div className="buttons ms-4 mt-4">
            {renderSubmitButton()}&nbsp;
              {/* <button type="submit" onClick={handleSubmit} className="btn btn-primary">
                Submit
              </button>&nbsp; */}
              <button type="button" onClick={handleReset} className="btn btn-primary">
                Reset
              </button>
            </div>
          </div>
          {tableData.length > 0 && (
            <WorkingHourTable
              tableData={tableData}
              onDelete={handleDelete}
              onEdit={handleEdit}
              onSubmit={handleSubmit}
              formData={formData}
            />
          )}
        </section>
      </form>
    </div>
  );
};

export default Form;