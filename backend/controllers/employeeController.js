const employeeModel = require('../models/employeeModel');

async function getAllEmployees(req, res) {
    try {
        const employees = await employeeModel.getAllEmployees();
        res.json(employees);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching employees');
    }
}

async function getEmployeeById(req, res) {
    const id = req.params.id;
    try {
        const employee = await employeeModel.getEmployeeById(id);
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.json(employee);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error fetching employee');
    }
}

async function insertEmployee(req, res) {
    const newEmployee = req.body;
    try {
        await employeeModel.insertEmployee(newEmployee);
        res.status(201).send('Employee created');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error creating employee');
    }
}

async function updateEmployee(req, res) {
    const updatedEmployee = req.body;
    try {
        const result = await employeeModel.updateEmployee(updatedEmployee);
        if (result.rowsAffected === 0) {
            return res.status(404).send('Employee not found');
        }
        res.send('Employee updated');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error updating employee');
    }
}

async function deleteEmployee(req, res) {
    const id = req.params.id;
    try {
        console.log("deleting");
        const result = await employeeModel.deleteEmployee(id);
        if (result.rowsAffected === 0) {
            return res.status(404).send('Employee not found');
        }
        res.send('Employee deleted');
    } catch (error) {
        console.error(error);
        res.status(500).send('Error deleting employee');
    }
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    insertEmployee,
    updateEmployee,
    deleteEmployee,
};
