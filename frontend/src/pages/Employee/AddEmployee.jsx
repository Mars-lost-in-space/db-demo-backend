import React from 'react'
import Navbar from '../components/Navbar'
import AddEmployeeForm from '../components/AddEmployeeForm'

const AddEmployee = () => {
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto p-4 mt-16">
        <AddEmployeeForm/>
      </div>
      
    </div>
  )
}

export default AddEmployee