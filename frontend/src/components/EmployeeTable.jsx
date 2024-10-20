import React from 'react'

const EmployeeTable = ({ employees }) => {
   
    const handleDelete = async (employeeId) => {
        try {
            const response = await fetch(`http://localhost:5000/employees/${employeeId}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                // Handle successful deletion (e.g., refresh the employee list)
                console.log(`Employee with ID ${employeeId} deleted successfully.`);
            } else {
                console.error('Failed to delete the employee.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <table className="min-w-full bg-white">
            <thead>
                <tr>
                    <th className="py-2 px-2 border-b">ID</th>
                    <th className="py-2 px-2 border-b">First Name</th>
                    <th className="py-2 px-2 border-b">Last Name</th>
                    <th className="py-2 px-2 border-b">Email</th>
                    <th className="py-2 px-2 border-b">Phone Number</th>
                    <th className="py-2  border-b">Actions</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => (
                    <tr key={index}>
                        <td className="py-2 px-4 border-b">{employee[0]}</td>
                        <td className="py-2 px-4 border-b">{employee[1]}</td>
                        <td className="py-2 px-4 border-b">{employee[2]}</td>
                        <td className="py-2 px-4 border-b">{employee[3]}</td>
                        <td className="py-2 px-4 border-b">{employee[4]}</td>
                        <td className="py-2 px-4 border-b">
                            <button className="mr-2 bg-blue-500 text-white py-1 px-2 rounded">Edit</button>
                            <button 
                                className="bg-red-500 text-white py-1 px-2 rounded" 
                                onClick={() => handleDelete(employee[0])}
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default EmployeeTable