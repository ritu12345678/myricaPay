import React from 'react'
import mail from "../assets/mail.png"
const CustomCard = ({title,value,content,type,rightcontent}) => {
  return (
    <div>
     <div className="user_card card position-relative card-shadow py-1 px-3">
  <div>
    <h6 className='text-darkgrey fs-16 fw-500 mb-0'>{title}</h6>
    <h2 className='heading_black-30 mb-1'>{value}</h2>
    <h6 className='text-darkgrey fs-14 fw-400 mb-0'>{content}</h6>
  </div>

  <div className="position-absolute top-0 end-0 p-1">
    {rightcontent}
  </div>
</div>

    </div>
  );
};




export default CustomCard
