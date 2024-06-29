import React from 'react'

const TableSection = () => {
    return (
        <>
            <div className='overflow-x-auto mt-10'>
                <table className='min-w-full bg-white border rounded'>
                    <thead className='bg-blue-200'>
                        <tr>
                            <th className='py-2 px-4 border-sky-300 border-b border-e'></th>
                            <th className='py-2 px-4 border-sky-300 border-b border-e'>Due Date</th>
                            <th className='py-2 px-4 border-sky-300 border-b border-e'>Invoice Number</th>
                            <th className='py-2 px-4 border-sky-300 border-b border-e'>Invoice Amount</th>
                            <th className='py-2 px-4 border-sky-300 border-b border-e'>Amount Due</th>
                            <th className='py-2 px-4 border-sky-300 border-b border-e'>Bank Charges</th>
                            <th className='py-2 px-4 border-sky-300 border-b border-e'>Discount</th>
                            <th className='py-2 px-4 border-sky-300 border-b border-e'>Paid Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='py-2 px-4 border-sky-300 border-b border-e '>
                                <input type="checkbox" className='h-4 w-4' />
                            </td>
                            <td className='py-2 px-4 border-sky-300 border-b border-e'>29 June 2024</td>
                            <td className='py-2 px-4 border-sky-300 border-b border-e'>P0009</td>
                            <td className='py-2 px-4 border-sky-300 border-b border-e'>2,500.00</td>
                            <td className='py-2 px-4 border-sky-300 border-b border-e'>2,500.00</td>
                            <td className='py-2 px-4 border-sky-300 border-b border-e'>2,500.00</td>
                            <td className='py-2 px-4 border-sky-300 border-b border-e'>2,500.00</td>
                            <td className='py-2 px-4 border-sky-300 border-b border-e'>500.00</td>
                        </tr>
                        <tr>
                            <td className='py-2 px-4 border-sky-300 border-b border-e '>
                                <input type="checkbox" className='h-4 w-4' />
                            </td>
                            <td className='py-2 px-4 border-sky-300 border-b border-e'>29 June 2024</td>
                            <td className='py-2 px-4 border-sky-300 border-b border-e'>P0009</td>
                            <td className='py-2 px-4 border-sky-300 border-b border-e'>2,500.00</td>
                            <td className='py-2 px-4 border-sky-300 border-b border-e'>2,500.00</td>
                            <td className='py-2 px-4 border-sky-300 border-b border-e'>2,500.00</td>
                            <td className='py-2 px-4 border-sky-300 border-b border-e'>2,500.00</td>
                            <td className='py-2 px-4 border-sky-300 border-b border-e'>500.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableSection