// REQUIRE inquirer pacakge
const inquirer = require('inquirer');
// REQUIRE from config
const connection = require('./config/connection');
const prompts = require('./config/prompts');
// REQUIRE console.table
require('console.table');

console.log(`✨Employee Tracker✨ \n`);
// Launch App
initialTracker();

// initial prompt
function initialTracker() {
  // Content
  inquirer.prompt(prompts.initialPrompt).then(function ({ content }) {
    switch (content) {
      case 'View All Employees':
        viewAllEmployees();
        break;
      case 'View Employees by Manager':
        viewEmployeesByManager();
        break;
      case 'View Employees by Department':
        viewEmployeesByDepartment();
        break;
      case 'View All Roles':
        viewAllRoles();
        break;
      case 'View All Departments':
        viewAllDepartments();
        break;
      case 'View Department Budget':
        viewDepartmentBudget();
        break;
      case 'Add Employee':
        addEmployee();
        break;
      case 'Add Role':
        addRole();
        break;
      case 'Add Department':
        addDepartment();
        break;
      case 'Update Employee Role':
        updateEmployeeRole();
        break;
      case 'Update Employee Manager':
        updateEmployeeManager();
        break;
      case 'Remove Employee':
        removeEmployee();
        break;
      case 'Remove Role':
        removeRole();
        break;
      case 'Remove Department':
        removeDepartment();
        break;
      case 'Exit':
        console.log(`Exited employee tracker! 👋`);
        connection.end();
        break;
    }
  });
}

// VIEW all employees
function viewAllEmployees() {
  console.log(`Viewing all employees: \n`);

  var query = `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department, r.salary
    FROM employee e
    LEFT JOIN role r
    ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    LEFT JOIN employee m
    ON m.id = e.manager_id`;

  connection.query(query, function (err, res) {
    if (err) throw err;

    console.table(res);
    console.log(`\n ====================BREAK LINE====================\n`);

    initialTracker();
  });
}

// VIEW employees by manager
// TODO: Remove NULL?????
function viewEmployeesByManager() {
  console.log(`Viewing employees by manager: \n`);

  var query = `SELECT e.manager_id, CONCAT(m.first_name, ' ', m.last_name) AS manager 
    FROM employee e LEFT JOIN role r
    ON e.role_id = r.id
    LEFT JOIN department d
    ON d.id = r.department_id
    LEFT JOIN employee m
    ON m.id = e.manager_id 
    GROUP BY e.manager_id`;

  connection.query(query, function (err, res) {
    if (err) throw err;

    const managersChoice = res.map(({ manager_id, manager }) => ({
      value: manager_id,
      name: manager,
    }));

    inquirer.prompt(prompts.viewEmployeesByManager(managersChoice)).then(function (response) {
      var query = `SELECT e.id, e.first_name, e.last_name, r.title, CONCAT(m.first_name, ' ', m.last_name) AS manager
        FROM employee e
        JOIN role r
        ON e.role_id = r.id
        JOIN department d
        ON d.id = r.department_id
        LEFT JOIN employee m
        ON m.id = e.manager_id
        WHERE m.id = ?`;

      connection.query(query, response.managerId, function (err, res) {
        if (err) throw err;
        console.table(res);
        console.log(`====================BREAK LINE====================\n`);

        initialTracker();
      });
    });
  });
}

// VIEW employee by department
function viewEmployeesByDepartment() {
  console.log('Viewing employees by department:\n');

  var query = `SELECT d.id, d.name
	FROM employee e
	LEFT JOIN role r
	ON e.role_id = r.id
	LEFT JOIN department d
	ON d.id = r.department_id
	GROUP BY d.id, d.name`;

  connection.query(query, function (err, res) {
    if (err) throw err;

    // Select department
    const departmentsChoice = res.map((data) => ({
      value: data.id,
      name: data.name,
    }));

    inquirer.prompt(prompts.viewEmployeeByDepartment(departmentsChoice)).then(function (response) {
      var query = `SELECT e.id, e.first_name, e.last_name, r.title, d.name AS department 
        FROM employee e
        JOIN role r
        ON e.role_id = r.id
        JOIN department d
        ON d.id = r.department_id
        WHERE d.id = ?`;

      connection.query(query, response.departmentId, function (err, res) {
        if (err) throw err;

        console.table(res);
        console.log(`====================BREAK LINE====================\n`);

        initialTracker();
      });
    });
  });
}

// VIEW all roles
function viewAllRoles() {
  var query = 'SELECT * FROM role';
  connection.query(query, function (err, res) {
    if (err) throw err;
    console.log(`\nAll Roles:\n`);

    console.table(res);

    // res.forEach((role) => {
    //   console.log(`ID: ${role.id} | Title: ${role.title}\n Salary: ${role.salary}\n`);
    // });
    console.log(`====================BREAK LINE====================\n`);

    initialTracker();
  });
}
// VIEW all departments
function viewAllDepartments() {
  let query = 'SELECT * FROM department;';
  connection.query(query, function (err, res) {
    if (err) throw err;

    console.log(`All Departments:`);

    console.table(res);

    console.log(`====================BREAK LINE====================\n`);

    initialTracker();
  });
}

function viewDepartmentBudget() {
  let query = `SELECT d.name, r.salary, sum(r.salary) AS budget
		FROM employee e 
		LEFT JOIN role r 
        ON e.role_id = r.id
		LEFT JOIN department d 
        ON r.department_id = d.id
        GROUP BY d.name`;

  connection.query(query, function (err, res) {
    if (err) throw err;

    console.log(`\nDepartments' budgets:\n`);

    // res.forEach((department) => {
    //   console.log(`Department: ${department.name}\n Budget: ${department.budget}\n`);
    // });
    console.table(res);

    console.log(`====================BREAK LINE====================\n`);

    initialTracker();
  });
}

// ADD new employees, roles, departments
/*
function addEmployee() {
  let query = ``;

  connection.query(query, (err, res) => {
    if (err) throw err;

    console.log(`\nAdding Employee:\n`);

    console.table(res);

    console.log(`Successfully added`);
    console.log(`====================BREAK LINE====================\n`);

    initialTracker();
  });
}

function addRole() {
  let query = ``;

  connection.query(query, (err, res) => {
    if (err) throw err;

    console.log(`\nAdding Employee:\n`);

    console.table(res);

    console.log(`Successfully added`);
    console.log(`====================BREAK LINE====================\n`);

    initialTracker();
  });
}*/

function addDepartment() {
  inquirer.prompt(prompts.addDepartment).then(function (response) {
    let query = `INSERT INTO department (name) VALUES ( ? )`;

    connection.query(query, (err, res) => {
      if (err) throw err;

      console.log(`\nSuccessfully added ${response.department}!\n`);
    });

    console.log(`====================BREAK LINE====================\n`);

    viewAllDepartments();
  });
}
// Update employees role or manager

// Remove employees, roles, departments
