## Prerequisites
Before you begin, ensure you have met the following requirements:

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Oracle Database**: You need access to an Oracle database instance.
- **Oracle Instant Client**: Depending on your system, you may need the Oracle Instant Client to connect to your Oracle database. Follow the installation instructions provided by Oracle.


## Setting Up Node.js Project

1. **Open Your Terminal**: Launch your command-line interface (Command Prompt, PowerShell, Terminal, etc.).

2. **Create a New Directory for Your Project**: Navigate to the folder where you want to create your project and run:
   ```bash
   mkdir your-project-name
   cd your-project-name

3. **Initialize a New Node.js Project:** Run the following command to create a `package.json` file, which will manage your project’s dependencies:
    ```bash
    npm init -y

4. **Install Required Packages:** Install the necessary packages using npm. Run the following command:
   ```bash
    npm install express oracledb dotenv jsonwebtoken body-parser
   

  - **express**: A web framework for Node.js to build APIs.
  - **oracledb**: A module for connecting to Oracle databases.
  - **dotenv**: A module for loading environment variables from a `.env` file.
  - **jsonwebtoken**: A module for handling JSON Web Tokens (JWT) for authentication.
  - **body-parser**: Middleware for parsing incoming request bodies.

  

## Setting Up Oracle Database Connection

1. **Create a `.env` File:** In the root of your project, create a file named .env and add your database connection details and JWT secret:
   ```bash
   DB_USER=your_db_username
   DB_PASSWORD=your_db_password
   DB_CONNECTION_STRING=your_db_connection_string
   JWT_SECRET=your_secret_key

2. **Create the Database Pool:** In your db.js file, set up the connection to your Oracle database:
```bash
const oracledb = require('oracledb');
require("dotenv").config();

async function getConnection() {
    try {
        await oracledb.createPool({
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            connectString: process.env.DB_CONNECTION_STRING,
        });
        console.log("Connected to Oracle database");
    } catch (err) {
        console.error(err.message);
    }
}

module.exports = { getConnection };









    

    
    
