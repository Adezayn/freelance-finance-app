import React from 'react'
import { VscBell, VscBellDot } from "react-icons/vsc";

const Notification = () => {
  return (
    <div className='notification_container'>
      <VscBell color="blue"/>
      <VscBellDot color="red"/>
    </div>
  )
}

export default Notification;