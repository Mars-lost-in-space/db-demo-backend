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
  - **body-parser**: Middleware for parsing incoming request bodies.<br><br>
  

5. **Creating the Main Application File**: In the root of your project directory, create a file named `app.js`. This file will be the entry point of your application and where you will set up your basic express server.

6. **Creating the Project Structure**: After installing the packages, create the following directory structure:

   ```bash
   /backend
   |-- /controllers
   |   |-- employeeController.js
   |-- /models
   |   |-- employeeModel.js
   |-- /middlewares
   |   |-- auth.js
   |-- /routes
   |   |-- employeeRoutes.js
   |-- app.js
   |-- db.js
   |-- .env
   |-- package.json


Note: You can create these directories or follow any other pattern since it’s not the only way to structure an application


  

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


## Understanding the Architecture

1. **Model**
   The Model represents the data of the application. It is responsible for managing the data, logic, and rules of the application.
   The Model would handle employee data, such as names, positions, and salaries. It communicates with the database to perform operations like retrieving or updating employee records.

2. **Controller**
   The Controller acts as an intermediary between the Model and the View. It handles user input, processes it (often using the Model), and determines what response to send back to the View.
   When a user wants to add a new employee, the Controller receives the request, uses the Model to save the employee data in the database, and then updates the View to show the new list of employees.

3. **Routes**
   Routes are the paths that determine how an application responds to a specific HTTP request. They are essentially the URLs that users will access in their web browser.
   In our application, a route like `/employees` might respond to a request to get a list of all employees.


<h2>How it Works Together</h2> 

- **User Interaction:** A user interacts with the application, for example, by clicking a button to add an employee.

- **HTTP Request:** The action triggers an HTTP request (a way for the client to communicate with the server) to the Controller.

- **Controller Logic:** The Controller processes this request, often interacting with the Model to get or update data.

- **Model Update:** The Model interacts with the database to perform the necessary operations (like adding a new employee).

- **Response:** The Controller then sends back a response to the View, which updates what the user sees.


## Understanding Middleware

Middleware is a function or a set of functions that sits between the raw request and the final handling of that request in a web application. It can modify the request, perform actions, or even end the request-response cycle before it reaches the intended endpoint.

Middleware functions are executed in the order they are defined in your application. They have access to the request and response objects and can perform operations such as:

- **Logging:** Recording information about requests.
- **Authentication:** Verifying user identities.
- **Error Handling:** Catching and processing errors.
- **Parsing Request Bodies:** Converting incoming request data into a usable format.


















    

    
    
