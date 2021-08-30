-- access employee database and add values to tables --
USE employee_db;

-- add values to department table --
-- department_id 1
INSERT INTO department (name)
VALUES ("Engineering");
-- department_id 2
INSERT INTO department (name)
VALUES ("Finance");
-- department_id 3
INSERT INTO department (name)
VALUES ("Legal");
-- department_id 4
INSERT INTO department (name)
VALUES ("Sales");

-- add values to role table --
-- role_id 1
INSERT INTO role (title, department_id, salary)
VALUES ("Lead Engineer", 1, 150000);
-- role_id 2
INSERT INTO role (title, department_id, salary)
VALUES ("Software Engineer", 1, 120000);
-- role_id 3
INSERT INTO role (title, department_id, salary)
VALUES ("Account Manager", 2, 160000);
-- role_id 4
INSERT INTO role (title, department_id, salary)
VALUES ("Accountant", 2, 125000);
-- role_id 5
INSERT INTO role (title, department_id, salary)
VALUES ("Legal Team Lead", 3, 250000);
-- role_id 6
INSERT INTO role (title, department_id, salary)
VALUES ("Lawyer", 3, 190000);
-- role_id 7
INSERT INTO role (title, department_id, salary)
VALUES ("Sales Lead", 4, 100000);
-- role_id 8
INSERT INTO role (title, department_id, salary)
VALUES ("Salesperson", 4, 80000);

-- add values to employee table --
-- manager_id 1
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Ashley","Rodriguez", 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kevin","Tupik", 2, 1);
-- manager_id 3
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kunal","Singh", 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Malia","Brown", 4, 3);
-- Legal
-- manager_id 5
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Sarah","Lourd", 5, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tom","Allen", 6, 5);
-- Sales
-- manager_id 7
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John","Doe", 7, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike","Chan", 8, 7);