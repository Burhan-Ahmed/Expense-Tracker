import React from 'react'
import Balan from './Components/Balance'

export default function App() {

  return (
    <div>
      <header className="flex justify-center mt-20 text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }} >
        Expense Tracker
      </header>
      <Balan />
    </div >
  )
}


