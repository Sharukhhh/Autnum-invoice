import React from 'react'
import InputField from '../../fields/InputField'

const InputGroups = ({isApproval}) => {
    return (
        <>
            <div className={`grid gap-4 ${!isApproval ? 'md:grid-cols-4' : 'grid-cols-1'}`}>
                {!isApproval ? (
                    <>
                        <InputField type={'number'} 
                        label={'Bank account'}
                        />
                        <InputField type={'text'} 
                        label={'Transaction number'}
                        />
                        <InputField type={'number'} 
                        label={'Payment mode'}
                        />
                        <InputField type={'date'} 
                        label={'Payment date'}
                        />
                        <InputField type={'text'} 
                        label={'Description'}
                        />
                    </>
                ) : (
                    <>  
                        <InputField type={'text'} 
                        label={'Approver'}
                        />
                        <div>
                            <label htmlFor="note">Note</label>
                            <textarea name="note" id="" rows={3} className='p-2 border rounded w-full resize-none'/>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default InputGroups