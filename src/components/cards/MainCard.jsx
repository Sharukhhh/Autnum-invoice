import React from 'react'
import Cardtitle from './Cardtitle'
import InputGroups from './card-contents/InputGroups'
import TableSection from './card-contents/TableSection'
import SecondaryTitle from './SecondaryTitle'
import CardTotal from './card-contents/CardTotal'

const MainCard = ({mainTitle , hasTable , isApprovals}) => {
    return (
        <>
            <div className='bg-gray-100 p-4 rounded shadow-lg mb-12'>
                {hasTable ? (
                    <Cardtitle title={mainTitle} isApporval={isApprovals} />
                ) : (
                    <SecondaryTitle title={mainTitle}/>
                )}
                <InputGroups isApproval={isApprovals}/>
                {hasTable && (
                    <>
                        <TableSection/>
                        <CardTotal title={mainTitle}/>
                    </>
                )}
            </div>
        </>
    )
}

export default MainCard