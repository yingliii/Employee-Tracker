module.exports = {
  // initial prompt
  initialPrompt: {
    type: 'list',
    name: 'content',
    message: 'What would you like to do?',
    choices: [
      // VIEWing
      'View All Employees',
      'View Employees by Manager',
      'View Employees by Department',
      'View All Roles',
      'View All Departments',
      'View Department Budget',
      // ADDing
      'Add Employee',
      'Add Role',
      'Add Department',
      // UPDATing
      'Update Employee Role',
      'Update Employee Manager',
      // DELETing
      'Remove Employee',
      'Remove Role',
      'Remove Department',
      // EXITing
      'Exit',
    ],
  },

  // View prompt by manager
  viewEmployeesByManager: (managersChoice) => [
    {
      type: 'list',
      name: 'managerId',
      message: 'Select a manager',
      choices: managersChoice,
    },
  ],

  // View prompt by department
  viewEmployeeByDepartment: (departmentsChoice) => [
    {
      type: 'list',
      name: 'departmentId',
      message: 'Select a department',
      choices: departmentsChoice,
    },
  ],

  // Add Employee
  addEmployee: (departmentsArray, rolesArray, managersArray) => [
    {
      type: 'input',
      name: 'firstName',
      message: 'Insert first name',
    },
    {
      type: 'input',
      name: 'lasttName',
      message: 'Insert last name',
    },
    {
      type: 'list',
      name: 'department',
      message: 'Choose a department',
      choices: departmentsArray,
    },
    {
      type: 'list',
      name: 'role',
      message: 'Choose a role',
      choices: rolesArray,
    },
    {
      type: 'list',
      name: 'manager',
      message: 'Choose the manager',
      choices: managersArray,
    },
  ],

  // Add Department
  addDepartment: {
    type: 'input',
    name: 'department',
    message: 'Insert the new department name',
  },

  // Add Role
  addRole: (departmentsArray) => [
    {
      type: 'input',
      name: 'newRole',
      message: 'Insert name of the new role',
    },
    {
      type: 'input',
      name: 'newSalary',
      message: 'Insert the salary for this new role',
    },
    {
      type: 'list',
      name: 'department',
      message: 'Select the department of the new role',
      choices: departmentsArray,
    },
  ],

  // Update Employee Role
  updateEmployeeRole: (employeesArray, rolesArray) => [
    {
      type: 'list',
      name: 'updateEmployee',
      message: 'Select the employee',
      choices: employeesArray,
    },
    {
      type: 'list',
      name: 'updateRole',
      message: 'Select the role to update to',
      choices: rolesArray,
    },
  ],

  // Update Employee Manager
  updateEmployeeManager: (employeesArray, managersArray) => [
    {
      type: 'list',
      name: 'updateEmployee',
      message: 'Select the employee',
      choices: employeesArray,
    },
    {
      type: 'list',
      name: 'updateManager',
      message: 'Select the manager to update to',
      choices: managersArray,
    },
  ],

  // Remove Employee
  removeEmployee: (employeesArray) => [
    {
      type: 'list',
      name: 'removeEmployee',
      message: 'Select the employee to remove',
      choices: employeesArray,
    },
  ],
  // Remove Role
  removeRole: (rolesArray) => [
    {
      type: 'list',
      name: 'removeRole',
      message: 'Select the role to remove',
      choices: rolesArray,
    },
  ],
  // Remove Department
  removeDepartment: (departmentsArray) => [
    {
      type: 'list',
      name: 'removeDepartment',
      message: 'Select the department to remove',
      choices: departmentsArray,
    },
  ],
};
