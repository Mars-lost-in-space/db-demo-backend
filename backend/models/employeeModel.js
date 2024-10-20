const oracledb = require('oracledb');

async function getAllEmployees() {
    const connection = await oracledb.getConnection();
    const result = await connection.execute('SELECT * FROM employees');
    await connection.close();
    return result.rows;
}

async function getEmployeeById(id) {
    const connection = await oracledb.getConnection();
    const result = await connection.execute('SELECT * FROM employees WHERE employee_id = :id', [id]);
    await connection.close();
    return result.rows[0]; // Return the first row
}

async function insertEmployee(employee) {
    const connection = await oracledb.getConnection();
    const result = await connection.execute(
        `INSERT INTO employees (employee_id, name, position, salary) VALUES (:id, :name, :position, :salary)`,
        [employee.id, employee.name, employee.position, employee.salary]
    );
    await connection.commit(); // Commit the transaction
    await connection.close();
    return result;
}

async function updateEmployee(employee) {
    const connection = await oracledb.getConnection();
    const result = await connection.execute(
        `UPDATE employees SET name = :name, position = :position, salary = :salary WHERE employee_id = :id`,
        [employee.name, employee.position, employee.salary, employee.id]
    );
    await connection.commit();
    await connection.close();
    return result;
}

async function deleteEmployee(id) {
    const connection = await oracledb.getConnection();
    const result = await connection.execute(
        `DELETE FROM employees WHERE employee_id = :id`,
        [id]
    );
    await connection.commit();
    await connection.close();
    return result;
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    insertEmployee,
    updateEmployee,
    deleteEmployee,
};
