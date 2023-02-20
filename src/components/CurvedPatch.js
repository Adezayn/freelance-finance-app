import React from 'react';
import '../compiled/curvedpatch.css'

const CurvedPatch = ({title, amount}) => {
  return (
        <div className='curvedpatch'>
            <p className='small_text'>{title}</p>
            <p className='large_text'>{amount}</p>
        </div>
    )
}

export default CurvedPatch;