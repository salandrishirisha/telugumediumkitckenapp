import React from 'react'
import {useRouteError} from "react-router-dom";
import errImg from '../Images/error image.jpg';
function Error() {
    const err = useRouteError();

  return (
    <div className='error-main'>
        
        <h2 className='err-rsn'>{err.status + ":" + err.statusText}</h2>
        <img src={errImg}/>
    </div>
  )
}

export default Error