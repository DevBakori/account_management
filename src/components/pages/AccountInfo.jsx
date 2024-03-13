import React from 'react'

export default function AccountInfo(props) {
  return ( 
  
    <div className='recurring-card p-3'>
      <h4 className='mb-4'>{ props.name}</h4>
      <p className='m-0'>{ props.value}</p>
    </div>  
    

  )
}
