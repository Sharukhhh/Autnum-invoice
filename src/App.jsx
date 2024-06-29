import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/sidebar/Sidebar'
import Navbar from './components/navbar/Navbar'
import Button from './components/buttons/Button'
import MainCard from './components/cards/MainCard'
import InvoiceSummary from './components/cards/card-contents/InvoiceSummary'

function App() {

  return (
    <>
        <div className='flex'>
        <Sidebar/>
          <div className='flex flex-col flex-grow ml-16'>
            <Navbar/>
            <div className='p-4'>
              <div className='flex justify-end space-x-4 mb-6'>
                <Button text={'Close'}/>
                <Button text={'Save'}/>
              </div>
              <MainCard mainTitle={'Apply to all payments'} 
              hasTable={false}
              isApprovals={false}
              />
              <MainCard mainTitle={'Apple'} 
              hasTable={true}
              isApprovals={false}
              />
              <MainCard mainTitle={'Microsoft'} 
              hasTable={true}
              isApprovals={false}
              />
              <MainCard mainTitle={'Approvals'} 
              hasTable={false}
              isApprovals={true}
              />
            <div  className='bg-slate-50 shadow-lg pt-8 py-4'>
              <InvoiceSummary/>
            </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default App
