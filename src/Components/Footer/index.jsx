import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#124574] p-8 flex flex-col items-center justify-center text-white'>
      <ul className="flex gap-8 flex-wrap">
        <li> Home</li>
        <li> Doctor's Appointment</li>
        <li> About Us</li>
        <li> Services</li>
        <li> Contact</li>
      </ul>
      <div className='my-3 text-center'>Copyright © 2023 All rights reserved - Medicque</div>
    </div>
  )
}

export default Footer
