const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");

// const oracledb = require('oracledb'); 
const { getConnection } = require('./config/db'); 
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to enable CORS
app.use(cors());
app.use(bodyParser.json());
app.use('/api/employees', employeeRoutes);

//start the database connection pool
getConnection().then(() => {
    console.log('Database connection pool created.');

    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Failed to configure the database:', err);
});









// const app = express();
// const PORT = 3000;

// app.use(express.json());

// //start database connection pool
// getConnection().then(() => {
//     console.log('database connection pool created');

//     //test the database connection
//     app.get('/', async (req, res) => {
//         let connection;

//         try {
//             connection = await oracledb.getConnection();
//             const result = await connection.execute('SELECT * FROM employees ORDER BY first_name DESC');
//             res.json(result.rows); //send the rows as a JSON response
//         } catch (err) {
//             console.error(err);
//             res.status(500).send('database error');
//         } finally {
//             if (connection) {
//                 try {
//                     await connection.close(); 
//                 } catch (err) {
//                     console.error(err);
//                 }
//             }
//         }
//     });

//     //start the server
//     app.listen(PORT, () => {
//         console.log(`server is running on http://localhost:${PORT}`);
//     });
// }).catch(err => {
//     console.error('failed to configure the database:', err);
// });


// app.get('/', (req, res) => {
//     res.send('Server is up and running');

// });

// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`)
// });


