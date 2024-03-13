import React, { useState } from 'react'
import "../style/recurring.css"
import Card from './Card';
import AccountInfo from './AccountInfo';
import accountInformation from './AccInfo';
import arrObject from './RecurringData'
import bankdata from '../../Records.json'
import Select from 'react-select';

export default function RecurringDeposite() {


    const option = [
        { label: 'SBI', value: 'SBI' },
        { label: 'KOTAK', value: 'KOTAK' },
        { label: 'BOB', value: 'BOB' },
    ];

    const [bankData, setBankData] = useState(bankdata[0].SBI)

    const handleSelect = (bank) => {
        setBankData(bankdata[0][bank.value]);

    };
    // console.log("Main Data", bankData)

    const handleChange = (info) => {
        setBankData(bankdata[0][info.value]);
    };
    console.log("Accounts info",bankdata)

    // useEffect(() => {
    //     setBankData(bankData);
    // }, [bankData])



    return (
        <div className='recurring d-grid'>
            <div className=" recurring-dropdown-section ">
                <div className='select'>
                    <Select placeholder="SBI"
                        onChange={handleSelect}
                        defaultValue={bankData[0]}
                        options={option} />

                </div>
                <h4 className="select-search  mt-1  ms-md-5">(select/search rd from dropdown)</h4>
            </div>
            {/* <div className="d-flex mt-3 mb-4">
                <div className=" sm-box ">
                    <ul className="list-unstyled m-0 ">
                        <li>
                            <span className="text-1"> Account Number:</span>
                            <span className="text-2">1330001</span>
                        </li>
                        <li>
                            <span className="text-1">Linked Bank Account:</span>
                            <span className="text-2">1330001</span>
                        </li>
                        <li>
                            <span className="text-1">Status:</span>
                            <span className="status-text">Closed</span>
                        </li>
                        <li>
                            <span className="text-1">Bank Code:</span>
                            <span className="text-2">S8I0045</span>
                        </li>
                        <li>
                            <span className="text-1">Bank Name:</span>
                            <span className="text-2">SBI</span>
                        </li>
                        <li>
                            <button className="updt-btn px-4 py-1 border-0 border">Update</button>
                        </li>
                    </ul>
                </div>
            </div> */}

            <div>
                {
                    accountInformation.map((obj, index) =>
                    (
                        <AccountInfo key={index} name={obj.name} value={bankData[obj.value]} />
                    )
                    )
                }
                <button className="updt-btn px-4 py-1 border-0 border" onClick={handleChange}>Update</button>
            </div>

            <div className="recurring-section">

                {
                    arrObject.map((obj, index) =>
                    (
                        <Card key={index} name={obj.name} value={bankData[obj.value]} />
                    )
                    )
                }
            </div>
        </div>
    )
}
