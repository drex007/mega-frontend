import React from 'react'

const AdminDashBoardCard = ({title, value}) => {
    return (
        <div className='bg-white shadow-lg min-w-[250px] 2xl:min-w-[400px] max-h-[150px] rounded-lg p-4 font-spacegrotesk'>
            <p className='text-black text-[14px] font-semibold'>{title}</p>
            <p className='my-1 font-poppins text-black text-[12px]'>{value}</p>

        </div>
    )
}

export default AdminDashBoardCard