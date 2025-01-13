// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
// // This line selects the HTML element with the ID “add-employees-btn” from the page. It stores a reference to that button in the addEmployeesBtn variable, allowing us to attach event listeners or manipulate it later.
// Collect employee data
const collectEmployees = function() {
// // This defines a function named collectEmployees. When called, this function will prompt the user for employee information and return an array of employee objects.
  // TODO: Get user input to create and return an array of employee objects
  const employees = [];
// // Initializes an empty array named employees. This will store all the employee objects that the user enters.
  let continueAdding = true;
// // Sets a Boolean flag continueAdding to true. We will use this flag to determine if we should keep asking the user to enter more employees.
  while (continueAdding) {
// // Starts a while loop that runs as long as continueAdding is true. This loop will repeatedly prompt the user for employee data until they indicate they want to stop.    
    let firstName = prompt("Enter the employee's first name:");
// // Prompts the user with a dialog box asking for the employee’s first name. The result is stored in firstName. If the user clicks “Cancel,” firstName will be null.    
    if (firstName === null) {
      // User clicked cancel
      break;
    }
// // Checks if the user canceled the prompt. If firstName is null, it means they clicked “Cancel.” In that case, we break out of the while loop, stopping the addition of employees.
    firstName = firstName.trim();
    if (!firstName) {
      firstName = "Unknown";
    }
// // Trims any extra whitespace from the firstName string. If the resulting firstName is an empty string (which would be falsy), we set it to "Unknown" as a fallback.    

    let lastName = prompt("Enter the employee's last name:");
    if (lastName === null) {
      // User clicked cancel
      break;
    }
    lastName = lastName.trim();
    if (!lastName) {
      lastName = "Unknown";
    }
//  // •	Explanation: Repeats the same process for the employee’s last name:
//  // •	Prompts the user for a last name.
//  // •	If the user clicks “Cancel,” break out of the loop.
//  // •	Trims whitespace and, if empty, defaults to "Unknown".
    let salary = prompt("Enter the employee's salary:");
    if (salary === null) {
      // User clicked cancel
      break;
    }
//  //  Explanation: Prompts the user for the employee’s salary. If the user cancels, stop the process by breaking out of the loop.
    // Convert salary to number and validate
    salary = Number(salary);
    if (isNaN(salary)) {
      salary = 0;
    }
//  //  Converts the entered salary to a numeric value. If salary is not a valid number (isNaN(salary) === true), we set it to 0 as a default.
    // Add the new employee object to the employees array
    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary
    });
//  //    •	Explanation: Creates a new object with firstName, lastName, and salary properties and adds it to the employees array.
    // Ask user if they want to continue
    const addMore = prompt("Do you want to add another employee? (yes or no)");
    if (addMore === null || addMore.toLowerCase().startsWith('n')) {
      continueAdding = false;
    }
//  // •	Explanation: Prompts the user if they want to add more employees.
//  // •	If the user cancels the prompt (addMore === null) or responds with something starting with ‘n’ (like “no”), then we set continueAdding = false to stop the loop.
  } //  // End of while loop

  return employees;
};
// // •	Explanation: After the user finishes adding employees, we return the employees array back to wherever collectEmployees() was called.




// Display the average salary
const displayAverageSalary = function(employeesArray) {
//	// •	Explanation: Defines a function named displayAverageSalary. It will take in an array of employees, calculate the average salary, and log it to the console.  
  // TODO: Calculate and display the average salary
  if (employeesArray.length === 0) {
    console.log("No employees to calculate an average salary for.");
    return;
  }
//  //	•	Explanation: If there are no employees in the array, it logs a message and returns early, since we cannot calculate an average without data.
  let totalSalary = 0;
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary += employeesArray[i].salary;
  }
//  //  	•	Explanation: Initializes totalSalary to 0 and then iterates through each employee, adding up all their salaries into totalSalary.
  const avgSalary = totalSalary / employeesArray.length;
  console.log(`Average Salary: $${avgSalary.toFixed(2)}, Number of Employees: ${employeesArray.length}`);
};
//  // •	Explanation:
//  // •	Calculates the average salary by dividing totalSalary by the number of employees.
//  // •	Uses a template literal to log a formatted message to the console, showing the average salary (rounded to 2 decimal places) and the total number of employees.




// Select a random employee
const getRandomEmployee = function(employeesArray) {
//	// •	Explanation: Defines a function named getRandomEmployee. It picks a random employee from the provided array and logs their name.  
  // TODO: Select and display a random employee
  if (employeesArray.length === 0) {
    console.log("No employees available to select.");
    return;
  }
//  //	•	Explanation: If the array is empty, logs a message and returns early since there are no employees to choose from.
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
//  // •	Explanation:
//	// •	Uses Math.random() to generate a random number between 0 and 1, multiplies it by the length of the employee array to pick a random index.
//	// •	Math.floor() is used to round down to the nearest whole number.
//	// •	randomEmployee is then set to the employee at that randomly chosen index.
  console.log(`Random Employee Selected: ${randomEmployee.firstName} ${randomEmployee.lastName}`);
};
//  //•	Explanation: Logs the randomly selected employee’s full name to the console using a template literal.
/*





  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
