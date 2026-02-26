import React, { useState } from 'react'
import { Button } from "flowbite-react";
import { Card } from "flowbite-react";
import { RiResetLeftFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByValue, reset } from './redux/slice';
import { IoIosAdd } from "react-icons/io";
import { FiMinus } from "react-icons/fi";

function Counter() {
    const [val, setVal] = useState(0)
    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter)

    const getData = () => {
        if (val) {
            dispatch(incrementByValue(+val))
        }
        else {
            alert("Please enter a value")
        }
    }
    return (
        <div className='bg-[#F0F4F8] min-h-screen'>
            <div className="flex flex-col justify-center items-center min-h-screen">

                <h2 className='text-2xl font-bold text-gray-700'>Counter App</h2>

                <Card className="max-w-sm !bg-white shadow-md border !border-gray-200 p-1 mt-4 rounded-2xl">

                    <h3 className='bg-[#FFE4E6] text-[#BE123C] p-20 rounded-xl font-bold text-4xl text-center shadow-sm'>
                        {count}
                    </h3>

                    <div className="flex gap-2 mt-3">

                        <Button className='flex-1 text-[#BE123C] !bg-[#FFE4E6] hover:bg-[#fecdd3] shadow-sm text-xl' onClick={() => dispatch(increment())}>
                            <IoIosAdd />
                        </Button>

                        <Button className='flex-1 text-[#BE123C] !bg-[#FFE4E6] hover:bg-[#fecdd3] shadow-sm text-lg text-center' onClick={() => dispatch(decrement())}>
                            <FiMinus />
                        </Button>

                        <Button className='flex-1 text-[#BE123C] !bg-[#FFE4E6] hover:bg-[#fecdd3] shadow-sm ' onClick={() => dispatch(reset())}>
                            <RiResetLeftFill />
                        </Button>

                    </div>
                    <div className="flex">
                        <input type="text" onChange={(e) => setVal(e.target.value)} placeholder="value" className="px-3 py-2 w-40 border border-gray-300 shadow-sm rounded-l-lg rounded-r-none focus:outline-none focus:ring-2 focus:ring-[#fecdd3] placeholder:text-gray-500" />

                        <button
                            onClick={getData}
                            className="px-4 text-xl font-bold bg-[#FFE4E6] hover:bg-[#fecdd3] text-[#BE123C] border border-l-0 border-gray-300 rounded-r-lg rounded-l-none">
                            <IoIosAdd />
                        </button>
                    </div>

                </Card>

            </div>
        </div>
    )
}

export default Counter