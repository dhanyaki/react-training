import React from 'react'

function BasicBootstrap() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6 bg-warning text-white'> first column</div>
            <div className='col-6 bg-danger text-white'>second column</div>
        </div>
    </div>
  )
}

export default BasicBootstrap