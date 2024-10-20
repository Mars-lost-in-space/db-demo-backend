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
        `INSERT INTO employees (employee_id, first_name, last_name, email, phone_number, job_id, salary, commission_pct, manager_id, department_id, hire_date) VALUES (:employee_id, :first_name, :last_name, :email, :phone_number, :job_id, :salary, :commission_pct, :manager_id, :department_id, TO_DATE(:hire_date,'yyyy-MM-dd'))`,
        [employee.employee_id, employee.first_name, employee.last_name, employee.email, employee.phone_number, employee.job_id, employee.salary, employee.commision_pct, employee.manager_id, employee.department_id, employee.hire_date]
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
