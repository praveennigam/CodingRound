// src/data/mysqlData.js
export const mysql = [
  {
    "question": "Write a query to find all employees from the 'employees' table who have a salary greater than 50000.",
    "answer": `SELECT * FROM employees WHERE salary > 50000;`,
    "output": "Returns all rows from the 'employees' table where the salary is greater than 50000."
  },
  {
    "question": "Write a query to join the 'employees' and 'departments' tables and find the employee names along with their department names.",
    "answer": `SELECT employees.name, departments.name 
              FROM employees 
              JOIN departments 
              ON employees.department_id = departments.id;`,
    "output": "Returns employee names along with their respective department names."
  },
  {
    "question": "Write a query to update the salary of an employee with ID 101 to 55000.",
    "answer": `UPDATE employees SET salary = 55000 WHERE id = 101;`,
    "output": "Updates the salary of the employee with ID 101 to 55000."
  },
  // New questions and answers
  {
    "question": "Write a query to find the total number of employees in the 'employees' table.",
    "answer": `SELECT COUNT(*) FROM employees;`,
    "output": "Returns the total number of employees."
  },
  {
    "question": "Write a query to find all departments that have more than 10 employees.",
    "answer": `SELECT departments.name 
              FROM departments
              JOIN employees ON employees.department_id = departments.id
              GROUP BY departments.name
              HAVING COUNT(employees.id) > 10;`,
    "output": "Returns the names of departments that have more than 10 employees."
  },
  {
    "question": "Write a query to find the highest salary in the 'employees' table.",
    "answer": `SELECT MAX(salary) FROM employees;`,
    "output": "Returns the highest salary from the 'employees' table."
  },
  {
    "question": "Write a query to find the average salary of employees in each department.",
    "answer": `SELECT departments.name, AVG(employees.salary) AS average_salary
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              GROUP BY departments.name;`,
    "output": "Returns the average salary for each department."
  },
  {
    "question": "Write a query to find all employees whose salary is between 40000 and 60000.",
    "answer": `SELECT * FROM employees WHERE salary BETWEEN 40000 AND 60000;`,
    "output": "Returns all employees with a salary between 40000 and 60000."
  },
  {
    "question": "Write a query to find all employees whose name starts with 'A'.",
    "answer": `SELECT * FROM employees WHERE name LIKE 'A%';`,
    "output": "Returns all employees whose name starts with the letter 'A'."
  },
  {
    "question": "Write a query to find the employee with the lowest salary.",
    "answer": `SELECT * FROM employees ORDER BY salary ASC LIMIT 1;`,
    "output": "Returns the employee with the lowest salary."
  },
  {
    "question": "Write a query to find employees who do not belong to any department.",
    "answer": `SELECT * FROM employees WHERE department_id IS NULL;`,
    "output": "Returns all employees who do not belong to any department."
  },
  {
    "question": "Write a query to delete an employee with ID 105.",
    "answer": `DELETE FROM employees WHERE id = 105;`,
    "output": "Deletes the employee with ID 105 from the 'employees' table."
  },
  {
    "question": "Write a query to find the total salary expense of all employees.",
    "answer": `SELECT SUM(salary) FROM employees;`,
    "output": "Returns the total salary expense of all employees."
  },
  {
    "question": "Write a query to find all employees who joined after '2022-01-01'.",
    "answer": `SELECT * FROM employees WHERE join_date > '2022-01-01';`,
    "output": "Returns all employees who joined after January 1st, 2022."
  },
  {
    "question": "Write a query to list the names of all employees who have a bonus greater than 2000.",
    "answer": `SELECT name FROM employees WHERE bonus > 2000;`,
    "output": "Returns the names of employees with a bonus greater than 2000."
  },
  {
    "question": "Write a query to find the employee with the second highest salary.",
    "answer": `SELECT * FROM employees WHERE salary = (SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees));`,
    "output": "Returns the employee with the second highest salary."
  },
  {
    "question": "Write a query to find the department with the most employees.",
    "answer": `SELECT departments.name
              FROM departments
              JOIN employees ON employees.department_id = departments.id
              GROUP BY departments.name
              ORDER BY COUNT(employees.id) DESC
              LIMIT 1;`,
    "output": "Returns the department with the most employees."
  },
  {
    "question": "Write a query to update the department of employee with ID 102 to 'Sales'.",
    "answer": `UPDATE employees SET department_id = (SELECT id FROM departments WHERE name = 'Sales') WHERE id = 102;`,
    "output": "Updates the department of employee with ID 102 to 'Sales'."
  },
  {
    "question": "Write a query to find all employees whose salary is not null.",
    "answer": `SELECT * FROM employees WHERE salary IS NOT NULL;`,
    "output": "Returns all employees whose salary is not null."
  },
  {
    "question": "Write a query to find all employees in the 'Marketing' department.",
    "answer": `SELECT * FROM employees WHERE department_id = (SELECT id FROM departments WHERE name = 'Marketing');`,
    "output": "Returns all employees in the 'Marketing' department."
  },
  {
    "question": "Write a query to count the number of employees in the 'Sales' department.",
    "answer": `SELECT COUNT(*) FROM employees WHERE department_id = (SELECT id FROM departments WHERE name = 'Sales');`,
    "output": "Returns the total number of employees in the 'Sales' department."
  },
  {
    "question": "Write a query to find all employees with a salary higher than their manager's salary.",
    "answer": `SELECT employees.name
              FROM employees
              JOIN employees AS managers ON employees.manager_id = managers.id
              WHERE employees.salary > managers.salary;`,
    "output": "Returns the names of employees whose salary is higher than their manager's salary."
  },
  {
    "question": "Write a query to find the average salary of employees who have been with the company for more than 5 years.",
    "answer": `SELECT AVG(salary) FROM employees WHERE join_date < NOW() - INTERVAL 5 YEAR;`,
    "output": "Returns the average salary of employees who have been with the company for more than 5 years."
  },
  {
    "question": "Write a query to find the highest paid employee in each department.",
    "answer": `SELECT departments.name, employees.name, MAX(employees.salary) AS highest_salary
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              GROUP BY departments.name;`,
    "output": "Returns the highest paid employee in each department."
  },
  {
    "question": "Write a query to find all employees who are managers (have subordinates).",
    "answer": `SELECT DISTINCT managers.name
              FROM employees AS managers
              JOIN employees AS subordinates ON managers.id = subordinates.manager_id;`,
    "output": "Returns the names of all employees who are managers."
  },
  {
    "question": "Write a query to list the names of employees who report directly to manager with ID 103.",
    "answer": `SELECT name FROM employees WHERE manager_id = 103;`,
    "output": "Returns the names of employees who report directly to manager with ID 103."
  },
  {
    "question": "Write a query to find all employees whose salary is less than the average salary.",
    "answer": `SELECT * FROM employees WHERE salary < (SELECT AVG(salary) FROM employees);`,
    "output": "Returns all employees whose salary is less than the average salary."
  },
  {
    "question": "Write a query to find the total number of departments in the company.",
    "answer": `SELECT COUNT(*) FROM departments;`,
    "output": "Returns the total number of departments in the company."
  },
  {
    "question": "Write a query to find the department with the least number of employees.",
    "answer": `SELECT departments.name
              FROM departments
              LEFT JOIN employees ON employees.department_id = departments.id
              GROUP BY departments.name
              ORDER BY COUNT(employees.id) ASC
              LIMIT 1;`,
    "output": "Returns the department with the least number of employees."
  },
  {
    "question": "Write a query to find all employees who have a salary equal to or greater than 40000 and belong to the 'HR' department.",
    "answer": `SELECT employees.name
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              WHERE employees.salary >= 40000 AND departments.name = 'HR';`,
    "output": "Returns the names of employees with salary >= 40000 in the 'HR' department."
  },
  {
    "question": "Write a query to find employees who have both a 'bonus' and a 'commission' greater than 1000.",
    "answer": `SELECT name FROM employees WHERE bonus > 1000 AND commission > 1000;`,
    "output": "Returns the names of employees with both a bonus and a commission greater than 1000."
  },
  {
    "question": "Write a query to find all employees whose name contains 'John'.",
    "answer": `SELECT * FROM employees WHERE name LIKE '%John%';`,
    "output": "Returns all employees whose name contains 'John'."
  },
  {
    "question": "Write a query to find the employee with the maximum bonus.",
    "answer": `SELECT * FROM employees WHERE bonus = (SELECT MAX(bonus) FROM employees);`,
    "output": "Returns the employee with the maximum bonus."
  },
  {
    "question": "Write a query to list all departments with more than 5 employees.",
    "answer": `SELECT departments.name
              FROM departments
              JOIN employees ON employees.department_id = departments.id
              GROUP BY departments.name
              HAVING COUNT(employees.id) > 5;`,
    "output": "Returns all departments with more than 5 employees."
  },
  {
    "question": "Write a query to list all employees with a 'promotion_date' in the last 6 months.",
    "answer": `SELECT * FROM employees WHERE promotion_date > NOW() - INTERVAL 6 MONTH;`,
    "output": "Returns all employees who received a promotion in the last 6 months."
  },
  {
    "question": "Write a query to find the employee who has been with the company the longest.",
    "answer": `SELECT * FROM employees ORDER BY join_date ASC LIMIT 1;`,
    "output": "Returns the employee who has been with the company the longest."
  },
  {
    "question": "Write a query to find all employees who were hired after '2020-01-01' but before '2021-01-01'.",
    "answer": `SELECT * FROM employees WHERE join_date BETWEEN '2020-01-01' AND '2021-01-01';`,
    "output": "Returns all employees hired between January 1st, 2020 and January 1st, 2021."
  },
  {
    "question": "Write a query to find the department with the highest average salary.",
    "answer": `SELECT departments.name, AVG(employees.salary) AS avg_salary
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              GROUP BY departments.name
              ORDER BY avg_salary DESC
              LIMIT 1;`,
    "output": "Returns the department with the highest average salary."
  },
  {
    "question": "Write a query to find employees with a salary greater than 10000 who also have a commission greater than 500.",
    "answer": `SELECT * FROM employees WHERE salary > 10000 AND commission > 500;`,
    "output": "Returns employees with a salary greater than 10000 and commission greater than 500."
  },
  {
    "question": "Write a query to find employees who are not managers (do not have any subordinates).",
    "answer": `SELECT name FROM employees WHERE id NOT IN (SELECT DISTINCT manager_id FROM employees WHERE manager_id IS NOT NULL);`,
    "output": "Returns the names of employees who are not managers."
  },
  {
    "question": "Write a query to find employees who work in the 'Finance' department but have not received a bonus.",
    "answer": `SELECT name FROM employees WHERE department_id = (SELECT id FROM departments WHERE name = 'Finance') AND bonus IS NULL;`,
    "output": "Returns employees in the 'Finance' department who have not received a bonus."
  },
  {
    "question": "Write a query to find employees who are located in 'New York' and have a salary greater than 70000.",
    "answer": `SELECT * FROM employees WHERE location = 'New York' AND salary > 70000;`,
    "output": "Returns employees located in New York with a salary greater than 70000."
  },
  {
    "question": "Write a query to find all employees who have a middle name starting with 'A'.",
    "answer": `SELECT * FROM employees WHERE middle_name LIKE 'A%';`,
    "output": "Returns all employees whose middle name starts with the letter 'A'."
  },
  {
    "question": "Write a query to find employees who are eligible for retirement (age greater than 60).",
    "answer": `SELECT * FROM employees WHERE age > 60;`,
    "output": "Returns employees who are eligible for retirement."
  },
  {
    "question": "Write a query to find all employees who have been hired before '2020-01-01'.",
    "answer": `SELECT * FROM employees WHERE hire_date < '2020-01-01';`,
    "output": "Returns all employees who were hired before January 1st, 2020."
  },
  {
    "question": "Write a query to find employees whose salary is higher than the average salary.",
    "answer": `SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);`,
    "output": "Returns all employees with a salary greater than the average salary."
  },
  {
    "question": "Write a query to find all employees who work in the 'Sales' department and have a salary higher than 40000.",
    "answer": `SELECT * FROM employees 
              WHERE department_id = (SELECT id FROM departments WHERE name = 'Sales') 
              AND salary > 40000;`,
    "output": "Returns all employees in the 'Sales' department with a salary higher than 40000."
  },
  {
    "question": "Write a query to find the employee with the longest tenure in the company.",
    "answer": `SELECT * FROM employees ORDER BY hire_date ASC LIMIT 1;`,
    "output": "Returns the employee who has been with the company the longest."
  },
  {
    "question": "Write a query to list all employees whose first name starts with 'J'.",
    "answer": `SELECT * FROM employees WHERE first_name LIKE 'J%';`,
    "output": "Returns all employees whose first name starts with the letter 'J'."
  },
  {
    "question": "Write a query to find all departments that have fewer than 3 employees.",
    "answer": `SELECT departments.name 
              FROM departments 
              LEFT JOIN employees ON employees.department_id = departments.id
              GROUP BY departments.name 
              HAVING COUNT(employees.id) < 3;`,
    "output": "Returns all departments that have fewer than 3 employees."
  },
  {
    "question": "Write a query to calculate the total salary expense for all employees in the 'Marketing' department.",
    "answer": `SELECT SUM(salary) 
              FROM employees 
              WHERE department_id = (SELECT id FROM departments WHERE name = 'Marketing');`,
    "output": "Returns the total salary expense for all employees in the 'Marketing' department."
  },
  {
    "question": "Write a query to find all employees who do not have a manager.",
    "answer": `SELECT * FROM employees WHERE manager_id IS NULL;`,
    "output": "Returns all employees who do not have a manager."
  },
  {
    "question": "Write a query to find all employees who have received a bonus greater than 1000.",
    "answer": `SELECT * FROM employees WHERE bonus > 1000;`,
    "output": "Returns all employees who have received a bonus greater than 1000."
  },
  {
    "question": "Write a query to find the top 5 highest-paid employees.",
    "answer": `SELECT * FROM employees ORDER BY salary DESC LIMIT 5;`,
    "output": "Returns the top 5 highest-paid employees."
  },
  {
    "question": "Write a query to find the total number of employees who are in the 'HR' department.",
    "answer": `SELECT COUNT(*) 
              FROM employees 
              WHERE department_id = (SELECT id FROM departments WHERE name = 'HR');`,
    "output": "Returns the total number of employees in the 'HR' department."
  },
  {
    "question": "Write a query to find all employees who joined in the year 2022.",
    "answer": `SELECT * FROM employees WHERE YEAR(join_date) = 2022;`,
    "output": "Returns all employees who joined in the year 2022."
  },
  {
    "question": "Write a query to find the employees who have a salary lower than the department average salary.",
    "answer": `SELECT employees.name
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              WHERE employees.salary < (SELECT AVG(salary) 
                                        FROM employees 
                                        WHERE department_id = employees.department_id);`,
    "output": "Returns employees whose salary is lower than the department's average salary."
  },
  {
    "question": "Write a query to find all employees who are older than 50 years.",
    "answer": `SELECT * FROM employees WHERE age > 50;`,
    "output": "Returns all employees who are older than 50 years."
  },
  {
    "question": "Write a query to find the employee who has been with the company for the least amount of time.",
    "answer": `SELECT * FROM employees ORDER BY join_date DESC LIMIT 1;`,
    "output": "Returns the employee who has been with the company for the least amount of time."
  },
  {
    "question": "Write a query to list all employees who do not belong to any department.",
    "answer": `SELECT * FROM employees WHERE department_id IS NULL;`,
    "output": "Returns all employees who do not belong to any department."
  },
  {
    "question": "Write a query to find all employees who have not been promoted in the last year.",
    "answer": `SELECT * FROM employees WHERE promotion_date < NOW() - INTERVAL 1 YEAR OR promotion_date IS NULL;`,
    "output": "Returns all employees who have not been promoted in the last year."
  },
  {
    "question": "Write a query to list all employees who have a 'Manager' job title.",
    "answer": `SELECT * FROM employees WHERE job_title = 'Manager';`,
    "output": "Returns all employees who have the job title 'Manager'."
  },
  {
    "question": "Write a query to find the department with the most employees.",
    "answer": `SELECT departments.name
              FROM departments
              JOIN employees ON employees.department_id = departments.id
              GROUP BY departments.name
              ORDER BY COUNT(employees.id) DESC
              LIMIT 1;`,
    "output": "Returns the department with the most employees."
  },
  {
    "question": "Write a query to find all employees who are not part of the 'IT' department.",
    "answer": `SELECT * FROM employees 
              WHERE department_id != (SELECT id FROM departments WHERE name = 'IT');`,
    "output": "Returns all employees who are not part of the 'IT' department."
  },
  {
    "question": "Write a query to find all employees who have more than 5 years of experience.",
    "answer": `SELECT * FROM employees WHERE hire_date < NOW() - INTERVAL 5 YEAR;`,
    "output": "Returns all employees who have more than 5 years of experience."
  },
  {
    "question": "Write a query to find the average salary for each department.",
    "answer": `SELECT departments.name, AVG(employees.salary) AS average_salary
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              GROUP BY departments.name;`,
    "output": "Returns the average salary for each department."
  },
  {
    "question": "Write a query to find all employees who report to manager with ID 101.",
    "answer": `SELECT * FROM employees WHERE manager_id = 101;`,
    "output": "Returns all employees who report to the manager with ID 101."
  },
  {
    "question": "Write a query to find all employees who have a salary lower than their manager.",
    "answer": `SELECT employees.name
              FROM employees
              JOIN employees AS managers ON employees.manager_id = managers.id
              WHERE employees.salary < managers.salary;`,
    "output": "Returns the names of employees who have a salary lower than their manager."
  },
  {
    "question": "Write a query to find all employees who have not received a bonus.",
    "answer": `SELECT * FROM employees WHERE bonus IS NULL;`,
    "output": "Returns all employees who have not received a bonus."
  },
  {
    "question": "Write a query to find the employee with the highest salary.",
    "answer": `SELECT * FROM employees ORDER BY salary DESC LIMIT 1;`,
    "output": "Returns the employee with the highest salary."
  },
  {
    "question": "Write a query to list all employees who have the word 'Engineer' in their job title.",
    "answer": `SELECT * FROM employees WHERE job_title LIKE '%Engineer%';`,
    "output": "Returns all employees with 'Engineer' in their job title."
  },
  {
    "question": "Write a query to find the total number of employees in the company.",
    "answer": `SELECT COUNT(*) FROM employees;`,
    "output": "Returns the total number of employees in the company."
  },
  {
    "question": "Write a query to find the employee with the smallest salary.",
    "answer": `SELECT * FROM employees ORDER BY salary ASC LIMIT 1;`,
    "output": "Returns the employee with the smallest salary."
  },
  {
    "question": "Write a query to find employees who have been with the company for exactly 3 years.",
    "answer": `SELECT * FROM employees WHERE hire_date = NOW() - INTERVAL 3 YEAR;`,
    "output": "Returns employees who have been with the company for exactly 3 years."
  },
  {
    "question": "Write a query to find the department with the highest total salary cost.",
    "answer": `SELECT departments.name, SUM(employees.salary) AS total_salary_cost
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              GROUP BY departments.name
              ORDER BY total_salary_cost DESC LIMIT 1;`,
    "output": "Returns the department with the highest total salary cost."
  },
  {
    "question": "Write a query to list all employees who are not assigned to a department.",
    "answer": `SELECT * FROM employees WHERE department_id IS NULL;`,
    "output": "Returns all employees who are not assigned to a department."
  },
  {
    "question": "Write a query to find employees who have the same salary as the average salary.",
    "answer": `SELECT * FROM employees WHERE salary = (SELECT AVG(salary) FROM employees);`,
    "output": "Returns employees who have the same salary as the average salary."
  },
  {
    "question": "Write a query to find all employees whose hire date is before '2015-01-01' but after '2010-01-01'.",
    "answer": `SELECT * FROM employees WHERE hire_date BETWEEN '2010-01-01' AND '2015-01-01';`,
    "output": "Returns all employees hired between January 1st, 2010 and January 1st, 2015."
  },
  {
    "question": "Write a query to find all employees with a salary between 30000 and 60000.",
    "answer": `SELECT * FROM employees WHERE salary BETWEEN 30000 AND 60000;`,
    "output": "Returns all employees with a salary between 30000 and 60000."
  },
  {
    "question": "Write a query to list all employees who were promoted in the last year.",
    "answer": `SELECT * FROM employees WHERE promotion_date > NOW() - INTERVAL 1 YEAR;`,
    "output": "Returns all employees who have been promoted in the last year."
  },
  {
    "question": "Write a query to find all employees who work in a department with an odd number of employees.",
    "answer": `SELECT employees.name
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              GROUP BY employees.department_id
              HAVING COUNT(employees.id) % 2 != 0;`,
    "output": "Returns employees working in departments with an odd number of employees."
  },
  {
    "question": "Write a query to find the total number of employees in the 'HR' department.",
    "answer": `SELECT COUNT(*) 
              FROM employees 
              WHERE department_id = (SELECT id FROM departments WHERE name = 'HR');`,
    "output": "Returns the total number of employees in the 'HR' department."
  },
  {
    "question": "Write a query to find employees with a salary higher than their manager.",
    "answer": `SELECT employees.name 
              FROM employees 
              JOIN employees AS managers ON employees.manager_id = managers.id
              WHERE employees.salary > managers.salary;`,
    "output": "Returns employees whose salary is higher than their manager's salary."
  },
  {
    "question": "Write a query to find the department with the highest average salary.",
    "answer": `SELECT departments.name, AVG(employees.salary) AS avg_salary
              FROM employees 
              JOIN departments ON employees.department_id = departments.id
              GROUP BY departments.name
              ORDER BY avg_salary DESC LIMIT 1;`,
    "output": "Returns the department with the highest average salary."
  },
  {
    "question": "Write a query to find employees who have not received a raise in the past 2 years.",
    "answer": `SELECT * FROM employees WHERE raise_date < NOW() - INTERVAL 2 YEAR OR raise_date IS NULL;`,
    "output": "Returns employees who haven't received a raise in the past 2 years."
  },
  {
    "question": "Write a query to find the total salary of employees in the 'Sales' department.",
    "answer": `SELECT SUM(salary) AS total_salary 
              FROM employees 
              WHERE department_id = (SELECT id FROM departments WHERE name = 'Sales');`,
    "output": "Returns the total salary of employees in the 'Sales' department."
  },
  {
    "question": "Write a query to find employees with the highest number of projects assigned.",
    "answer": `SELECT employees.name, COUNT(project_assignments.project_id) AS project_count
              FROM employees
              JOIN project_assignments ON employees.id = project_assignments.employee_id
              GROUP BY employees.name
              ORDER BY project_count DESC LIMIT 1;`,
    "output": "Returns the employee with the highest number of projects assigned."
  },
  {
    "question": "Write a query to find employees who are not assigned to any project.",
    "answer": `SELECT employees.name
              FROM employees
              LEFT JOIN project_assignments ON employees.id = project_assignments.employee_id
              WHERE project_assignments.project_id IS NULL;`,
    "output": "Returns employees who are not assigned to any project."
  },
  {
    "question": "Write a query to find the employee who earns the most.",
    "answer": `SELECT * FROM employees ORDER BY salary DESC LIMIT 1;`,
    "output": "Returns the employee with the highest salary."
  },
  {
    "question": "Write a query to find all employees whose name starts with 'J'.",
    "answer": `SELECT * FROM employees WHERE name LIKE 'J%';`,
    "output": "Returns employees whose name starts with 'J'."
  },
  {
    "question": "Write a query to list all employees in 'Finance' department who earn more than 60000.",
    "answer": `SELECT * FROM employees
              WHERE department_id = (SELECT id FROM departments WHERE name = 'Finance')
              AND salary > 60000;`,
    "output": "Returns employees in 'Finance' department earning more than 60000."
  },
  {
    "question": "Write a query to find the average salary of employees in each department.",
    "answer": `SELECT departments.name, AVG(employees.salary) AS avg_salary
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              GROUP BY departments.name;`,
    "output": "Returns the average salary of employees in each department."
  },
  {
    "question": "Write a query to find the total salary expense of each department.",
    "answer": `SELECT departments.name, SUM(employees.salary) AS total_salary
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              GROUP BY departments.name;`,
    "output": "Returns the total salary expense for each department."
  },
  {
    "question": "Write a query to find the second highest salary in the 'employees' table.",
    "answer": `SELECT MAX(salary) AS second_highest_salary
              FROM employees
              WHERE salary < (SELECT MAX(salary) FROM employees);`,
    "output": "Returns the second highest salary."
  },
  {
    "question": "Write a query to find employees who have the same salary as employee ID 105.",
    "answer": `SELECT * FROM employees WHERE salary = (SELECT salary FROM employees WHERE id = 105);`,
    "output": "Returns employees who have the same salary as employee ID 105."
  },
  {
    "question": "Write a query to find the employees who joined after '2019-01-01'.",
    "answer": `SELECT * FROM employees WHERE hire_date > '2019-01-01';`,
    "output": "Returns employees who joined after January 1st, 2019."
  },
  {
    "question": "Write a query to find employees whose job title contains the word 'Developer'.",
    "answer": `SELECT * FROM employees WHERE job_title LIKE '%Developer%';`,
    "output": "Returns employees whose job title contains 'Developer'."
  },
  {
    "question": "Write a query to find the total number of projects an employee with ID 102 is working on.",
    "answer": `SELECT COUNT(project_id) AS total_projects
              FROM project_assignments
              WHERE employee_id = 102;`,
    "output": "Returns the total number of projects employee ID 102 is working on."
  },
  {
    "question": "Write a query to find all employees who were hired before their manager.",
    "answer": `SELECT employees.name
              FROM employees
              JOIN employees AS managers ON employees.manager_id = managers.id
              WHERE employees.hire_date < managers.hire_date;`,
    "output": "Returns employees hired before their manager."
  },
  {
    "question": "Write a query to find the employee with the longest tenure in the company.",
    "answer": `SELECT * FROM employees ORDER BY hire_date ASC LIMIT 1;`,
    "output": "Returns the employee with the longest tenure in the company."
  },
  {
    "question": "Write a query to find the average number of projects assigned to employees.",
    "answer": `SELECT AVG(project_count) AS avg_projects
              FROM (SELECT COUNT(project_id) AS project_count 
                    FROM project_assignments
                    GROUP BY employee_id) AS project_counts;`,
    "output": "Returns the average number of projects assigned to employees."
  },
  {
    "question": "Write a query to find employees who work in the 'Marketing' department and earn more than 70000.",
    "answer": `SELECT * FROM employees
              WHERE department_id = (SELECT id FROM departments WHERE name = 'Marketing')
              AND salary > 70000;`,
    "output": "Returns employees in the 'Marketing' department earning more than 70000."
  },
  {
    "question": "Write a query to find the name and salary of employees who earn more than the average salary of their department.",
    "answer": `SELECT employees.name, employees.salary
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              WHERE employees.salary > 
                (SELECT AVG(salary) FROM employees WHERE department_id = employees.department_id);`,
    "output": "Returns the name and salary of employees who earn more than the average salary in their department."
  },
  {
    "question": "Write a query to find employees who are not assigned to any department.",
    "answer": `SELECT * FROM employees WHERE department_id IS NULL;`,
    "output": "Returns employees who are not assigned to any department."
  },
  {
    "question": "Write a query to find the department with the lowest average salary.",
    "answer": `SELECT departments.name, AVG(employees.salary) AS avg_salary
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              GROUP BY departments.name
              ORDER BY avg_salary ASC LIMIT 1;`,
    "output": "Returns the department with the lowest average salary."
  },
  {
    "question": "Write a query to find the employees who have not been promoted in the past 3 years.",
    "answer": `SELECT * FROM employees WHERE promotion_date < NOW() - INTERVAL 3 YEAR OR promotion_date IS NULL;`,
    "output": "Returns employees who have not been promoted in the past 3 years."
  },
  {
    "question": "Write a query to find employees whose job title contains 'Analyst'.",
    "answer": `SELECT * FROM employees WHERE job_title LIKE '%Analyst%';`,
    "output": "Returns employees whose job title contains 'Analyst'."
  },
  {
    "question": "Write a query to find employees who work in departments with more than 10 employees.",
    "answer": `SELECT employees.name 
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              GROUP BY employees.department_id
              HAVING COUNT(employees.id) > 10;`,
    "output": "Returns employees who work in departments with more than 10 employees."
  },
  {
    "question": "Write a query to find the employees who have not received a bonus.",
    "answer": `SELECT * FROM employees WHERE bonus IS NULL;`,
    "output": "Returns employees who have not received a bonus."
  },
  {
    "question": "Write a query to find employees with a salary higher than 100000 and who were hired after 2018.",
    "answer": `SELECT * FROM employees WHERE salary > 100000 AND hire_date > '2018-01-01';`,
    "output": "Returns employees with a salary higher than 100000 and hired after 2018."
  },
  {
    "question": "Write a query to find the total salary of employees who work in the 'Engineering' department and have a bonus.",
    "answer": `SELECT SUM(employees.salary) AS total_salary
              FROM employees
              WHERE department_id = (SELECT id FROM departments WHERE name = 'Engineering')
              AND bonus IS NOT NULL;`,
    "output": "Returns the total salary of employees in the 'Engineering' department who have a bonus."
  },
  {
    "question": "Write a query to find employees who do not have a manager.",
    "answer": `SELECT * FROM employees WHERE manager_id IS NULL;`,
    "output": "Returns employees who do not have a manager."
  },
  {
    "question": "Write a query to find all employees whose name contains 'a'.",
    "answer": `SELECT * FROM employees WHERE name LIKE '%a%';`,
    "output": "Returns all employees whose name contains the letter 'a'."
  },
  {
    "question": "Write a query to find employees who were hired in the same month as the company started.",
    "answer": `SELECT * FROM employees WHERE MONTH(hire_date) = MONTH(company_start_date);`,
    "output": "Returns employees who were hired in the same month as the company started."
  },
  {
    "question": "Write a query to find employees who have more than one role within the company.",
    "answer": `SELECT employees.name 
              FROM employees
              JOIN roles ON employees.id = roles.employee_id
              GROUP BY employees.name
              HAVING COUNT(roles.id) > 1;`,
    "output": "Returns employees who have more than one role within the company."
  },
  {
    "question": "Write a query to find all employees who have a salary greater than the average salary of all employees.",
    "answer": `SELECT * FROM employees WHERE salary > (SELECT AVG(salary) FROM employees);`,
    "output": "Returns all employees whose salary is greater than the average salary."
  },
  {
    "question": "Write a query to find the department with the most employees.",
    "answer": `SELECT departments.name, COUNT(employees.id) AS employee_count
              FROM departments
              JOIN employees ON employees.department_id = departments.id
              GROUP BY departments.name
              ORDER BY employee_count DESC LIMIT 1;`,
    "output": "Returns the department with the most employees."
  },
  {
    "question": "Write a query to find employees who earn more than 10000 but less than 20000.",
    "answer": `SELECT * FROM employees WHERE salary BETWEEN 10000 AND 20000;`,
    "output": "Returns employees whose salary is between 10000 and 20000."
  },
  {
    "question": "Write a query to find the employee who has the highest bonus.",
    "answer": `SELECT * FROM employees ORDER BY bonus DESC LIMIT 1;`,
    "output": "Returns the employee with the highest bonus."
  },
  {
    "question": "Write a query to find employees who earn between 50000 and 100000 and work in the 'Marketing' department.",
    "answer": `SELECT * FROM employees 
              WHERE salary BETWEEN 50000 AND 100000
              AND department_id = (SELECT id FROM departments WHERE name = 'Marketing');`,
    "output": "Returns employees earning between 50000 and 100000 and working in the 'Marketing' department."
  },
  {
    "question": "Write a query to find all employees who have been with the company for more than 5 years and have received a bonus.",
    "answer": `SELECT * FROM employees WHERE hire_date < NOW() - INTERVAL 5 YEAR AND bonus IS NOT NULL;`,
    "output": "Returns employees who have been with the company for more than 5 years and have received a bonus."
  },
  {
    "question": "Write a query to find employees whose job title contains 'Manager' but their salary is less than 60000.",
    "answer": `SELECT * FROM employees WHERE job_title LIKE '%Manager%' AND salary < 60000;`,
    "output": "Returns employees whose job title contains 'Manager' and salary is less than 60000."
  },
  {
    "question": "Write a query to find employees who do not have a manager.",
    "answer": `SELECT * FROM employees WHERE manager_id IS NULL;`,
    "output": "Returns employees who do not have a manager."
  },
  {
    "question": "Write a query to find employees with a job title of 'Developer' who work in the 'IT' department.",
    "answer": `SELECT * FROM employees 
              WHERE job_title = 'Developer'
              AND department_id = (SELECT id FROM departments WHERE name = 'IT');`,
    "output": "Returns employees with the job title 'Developer' who work in the 'IT' department."
  },
  {
    "question": "Write a query to find the total number of employees in the company.",
    "answer": `SELECT COUNT(*) FROM employees;`,
    "output": "Returns the total number of employees in the company."
  },
  {
    "question": "Write a query to find all departments with no employees.",
    "answer": `SELECT * FROM departments 
              WHERE id NOT IN (SELECT DISTINCT department_id FROM employees);`,
    "output": "Returns departments that do not have any employees."
  },
  {
    "question": "Write a query to find employees who have a salary greater than their manager.",
    "answer": `SELECT employees.name 
              FROM employees
              JOIN employees AS managers ON employees.manager_id = managers.id
              WHERE employees.salary > managers.salary;`,
    "output": "Returns employees whose salary is greater than their manager's salary."
  },
  {
    "question": "Write a query to find the department with the least number of employees.",
    "answer": `SELECT departments.name, COUNT(employees.id) AS employee_count
              FROM departments
              JOIN employees ON employees.department_id = departments.id
              GROUP BY departments.name
              ORDER BY employee_count ASC LIMIT 1;`,
    "output": "Returns the department with the least number of employees."
  },
  {
    "question": "Write a query to find employees who have been promoted more than once.",
    "answer": `SELECT name, COUNT(promotion_date) AS promotion_count 
              FROM employees 
              WHERE promotion_date IS NOT NULL 
              GROUP BY name 
              HAVING promotion_count > 1;`,
    "output": "Returns employees who have been promoted more than once."
  },
  {
    "question": "Write a query to find employees with the same salary as the employee with ID 101.",
    "answer": `SELECT * FROM employees WHERE salary = (SELECT salary FROM employees WHERE id = 101);`,
    "output": "Returns employees with the same salary as employee ID 101."
  },
  {
    "question": "Write a query to find the employee with the longest tenure in the company.",
    "answer": `SELECT * FROM employees ORDER BY hire_date ASC LIMIT 1;`,
    "output": "Returns the employee with the longest tenure in the company."
  },
  {
    "question": "Write a query to find employees who work in the 'Sales' department and have a salary above the average salary of the department.",
    "answer": `SELECT employees.name, employees.salary
              FROM employees 
              JOIN departments ON employees.department_id = departments.id
              WHERE departments.name = 'Sales' 
              AND employees.salary > 
                (SELECT AVG(salary) FROM employees WHERE department_id = employees.department_id);`,
    "output": "Returns employees in the 'Sales' department with a salary above the average salary."
  },
  {
    "question": "Write a query to find employees who were hired in '2019'.",
    "answer": `SELECT * FROM employees WHERE YEAR(hire_date) = 2019;`,
    "output": "Returns employees who were hired in 2019."
  },
  {
    "question": "Write a query to find employees whose job title contains 'Engineer' and who have received a bonus.",
    "answer": `SELECT * FROM employees 
              WHERE job_title LIKE '%Engineer%' 
              AND bonus IS NOT NULL;`,
    "output": "Returns employees whose job title contains 'Engineer' and who have received a bonus."
  },
  {
    "question": "Write a query to find the average salary of all employees in the company.",
    "answer": `SELECT AVG(salary) FROM employees;`,
    "output": "Returns the average salary of all employees."
  },
  {
    "question": "Write a query to find employees with a salary less than 50000 and hire date after '2020-01-01'.",
    "answer": `SELECT * FROM employees WHERE salary < 50000 AND hire_date > '2020-01-01';`,
    "output": "Returns employees with a salary less than 50000 and hire date after January 1st, 2020."
  },
  {
    "question": "Write a query to find employees who are not in the 'IT' department and earn more than 60000.",
    "answer": `SELECT * FROM employees 
              WHERE department_id != (SELECT id FROM departments WHERE name = 'IT') 
              AND salary > 60000;`,
    "output": "Returns employees who are not in the 'IT' department and earn more than 60000."
  },
  {
    "question": "Write a query to find the department with the highest average salary.",
    "answer": `SELECT departments.name, AVG(employees.salary) AS avg_salary
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              GROUP BY departments.name
              ORDER BY avg_salary DESC LIMIT 1;`,
    "output": "Returns the department with the highest average salary."
  },
  {
    "question": "Write a query to find all employees who have not received a promotion in the past 5 years.",
    "answer": `SELECT * FROM employees WHERE promotion_date < NOW() - INTERVAL 5 YEAR OR promotion_date IS NULL;`,
    "output": "Returns employees who have not received a promotion in the past 5 years."
  },
  {
    "question": "Write a query to find employees with the title 'Manager' who earn more than 70000.",
    "answer": `SELECT * FROM employees WHERE job_title = 'Manager' AND salary > 70000;`,
    "output": "Returns 'Manager' employees who earn more than 70000."
  },
  {
    "question": "Write a query to find the total number of employees in each department.",
    "answer": `SELECT departments.name, COUNT(employees.id) AS employee_count
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              GROUP BY departments.name;`,
    "output": "Returns the total number of employees in each department."
  },
  {
    "question": "Write a query to find the department with the lowest salary total.",
    "answer": `SELECT departments.name, SUM(employees.salary) AS total_salary
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              GROUP BY departments.name
              ORDER BY total_salary ASC LIMIT 1;`,
    "output": "Returns the department with the lowest salary total."
  },
  {
    "question": "Write a query to find employees who were hired before '2022-01-01' and have a salary greater than 50000.",
    "answer": `SELECT * FROM employees WHERE hire_date < '2022-01-01' AND salary > 50000;`,
    "output": "Returns employees who were hired before January 1st, 2022 and have a salary greater than 50000."
  },
  {
    "question": "Write a query to find employees who have a salary greater than the average salary of their department.",
    "answer": `SELECT employees.name, employees.salary
              FROM employees 
              JOIN departments ON employees.department_id = departments.id
              WHERE employees.salary > 
                (SELECT AVG(salary) FROM employees WHERE department_id = employees.department_id);`,
    "output": "Returns employees whose salary is greater than the average salary in their department."
  },
  {
    "question": "Write a query to find employees who are assigned to the most projects.",
    "answer": `SELECT employees.name, COUNT(project_assignments.project_id) AS project_count
              FROM employees
              JOIN project_assignments ON employees.id = project_assignments.employee_id
              GROUP BY employees.name
              ORDER BY project_count DESC LIMIT 1;`,
    "output": "Returns the employee assigned to the most projects."
  },
  {
    "question": "Write a query to find all employees with a salary above 50000 and who have not received a bonus.",
    "answer": `SELECT * FROM employees WHERE salary > 50000 AND bonus IS NULL;`,
    "output": "Returns employees with a salary above 50000 who have not received a bonus."
  },
  {
    "question": "Write a query to find the total number of employees in the 'HR' department.",
    "answer": `SELECT COUNT(*) FROM employees WHERE department_id = (SELECT id FROM departments WHERE name = 'HR');`,
    "output": "Returns the total number of employees in the 'HR' department."
  },
  {
    "question": "Write a query to find the average salary of all employees who were hired before '2018-01-01'.",
    "answer": `SELECT AVG(salary) FROM employees WHERE hire_date < '2018-01-01';`,
    "output": "Returns the average salary of employees hired before January 1st, 2018."
  },
  {
    "question": "Write a query to find all employees who work in departments with more than 5 employees.",
    "answer": `SELECT employees.name 
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              GROUP BY employees.department_id
              HAVING COUNT(employees.id) > 5;`,
    "output": "Returns employees who work in departments with more than 5 employees."
  },
  {
    "question": "Write a query to find the department with the highest total salary expense.",
    "answer": `SELECT departments.name, SUM(employees.salary) AS total_salary
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              GROUP BY departments.name
              ORDER BY total_salary DESC LIMIT 1;`,
    "output": "Returns the department with the highest total salary expense."
  },
  {
    "question": "Write a query to find employees who are not assigned to any project.",
    "answer": `SELECT employees.name
              FROM employees
              LEFT JOIN project_assignments ON employees.id = project_assignments.employee_id
              WHERE project_assignments.project_id IS NULL;`,
    "output": "Returns employees who are not assigned to any project."
  },
  {
    "question": "Write a query to find the department that has the most employees with a salary greater than 70000.",
    "answer": `SELECT departments.name, COUNT(employees.id) AS employee_count
              FROM employees
              JOIN departments ON employees.department_id = departments.id
              WHERE employees.salary > 70000
              GROUP BY departments.name
              ORDER BY employee_count DESC LIMIT 1;`,
    "output": "Returns the department with the most employees earning more than 70000."
  }
];