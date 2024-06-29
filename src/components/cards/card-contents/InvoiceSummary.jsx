import React from 'react'
import TotalBox from '../../boxes/TotalBox'
import { AiFillCloseCircle } from "react-icons/ai";

const InvoiceSummary = () => {
    return (
        <>
            <div className='flex items- space-x-2'>
                <TotalBox
                amount={'50,000,400.00'}
                text={'total Amount Due'}
                isBalance={false}
                />
                <span className='text-blue-400 mx-2 text-xl font-semibold'>-</span>
                <TotalBox
                amount={'10,000,080.00'}
                text={'Total Paid Amount'}
                isBalance={false}
                />
                <span className='text-blue-400 mx-2 text-xl font-semibold'>=</span>
                <TotalBox
                amount={'60,000,080.00'}
                text={'Balance'}
                isBalance={true}
                />
                {/* <div className='flex items-center justify-end'>
                    <AiFillCloseCircle/>
                </div>       */}
            </div>
        </>
    )
}

export default InvoiceSummary