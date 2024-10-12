import React from 'react';
import '../compiled/curvedpatch.css'

const CurvedPatch = ({title, amount}) => {
  return (
        <div className='curvedpatch'>
            <p className='small_text'>{title}</p>
            <h3 className='large_text'>{amount}</h3>
        </div>
    )
}

export default CurvedPatch;