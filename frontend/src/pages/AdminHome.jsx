import React from 'react'
import Navbar from '../components/Navbar'
import EmployeeTable from '../components/Employee/EmployeeTable';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const AdminHome = () => {

  const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/api/employees/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
            .then(response => response.json())
            .then(data => {
                setEmployees(data);
                console.log(data);
            })
            .catch(error => console.error('Error fetching employees:', error));

           
    }, []);
  return (
    <div>
      <Navbar/>
      <div className="container mx-auto p-4 mt-16">
          <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Employee List</h1>

              <Link to="/addemployees" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
              <button 
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Add Employee
              </button>
              </Link>
          </div>
      </div>
      {employees ? <EmployeeTable employees={employees} /> : <p>Loading...</p>}
    </div>
  )
}
