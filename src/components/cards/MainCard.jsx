import React from 'react'
import Cardtitle from './Cardtitle'
import InputGroups from './card-contents/InputGroups'
import TableSection from './card-contents/TableSection'
import SecondaryTitle from './SecondaryTitle'
import CardTotal from './card-contents/CardTotal'
import Button from '../buttons/Button'

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
                {!hasTable && !isApprovals && (
                    <div className='flex justify-end mb-2'>
                        <Button text={'Apply to all'}/>
                    </div>
                )}
            </div>
        </>
    )
}

export default MainCard