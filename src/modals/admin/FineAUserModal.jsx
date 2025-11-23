import React, { useContext, useState } from 'react'
import { AppContext } from '../../ContextAPI'
import { useDispatch } from 'react-redux'
import { fineAUserAction } from '../../Api/admin/admin.api'


const FineAUserModal = () => {
    const { modalConfig, setModalConfig,setCurrentUser,currentUser } = useContext(AppContext)
    const dispatch = useDispatch()
    const [formdata, setFormdata] = useState({
        amount: 0
    })


    const handleChange = (e) => {

        setFormdata({ ...formdata, [e.target.name]: e.target.value })
    }
    return (
        <div className='fixed grid h-[100%] z-20 bg-modal-bg place-items-center w-full backdrop-blur-sm lg:px-0 px-4 top-0 font-spacegrotesk'>
            <div className='bg-white shadow-2xl min-h-[200px] rounded-md w-2/6 p-4'>
                <p className='font-spacegrotesk my-3 '>Fine a user || {currentUser?.first_name} {currentUser?.last_name}</p>

                <p className='text-black text-[12px]'>Amount</p>
                <div className='w-full flex border border-gray-400 p-2 my-2 rounded-md'>
                    <input type="number" name="amount" id="" className='outline-none  w-full text-[12px]' placeholder='Enter amount'  onChange={(e) => handleChange(e)}/>
                </div>


                <div className='flex justify-end     space-x-2 my-3'>
                    <button className='font-african text-black border border-green-500  text-[10px] bg-white p-2 rounded-sm capitalize' onClick={() => setModalConfig(null)}>Cancel</button>
                    <button className='font-african text-white text-[10px] bg-green-500 p-2 rounded-sm capitalize' onClick={() => {
                      
                        dispatch(fineAUserAction({id:currentUser?.user_id, formdata:formdata}))
                    }} >Deduct</button>
                </div>

            </div>


        </div>
    )
}

export default FineAUserModal