import React from "react";
import employees from "../../employees.json";
import Table from "../Table"

class App extends React.Component {
  state = {
    employees: employees,
    allEmployees: employees,
  };

  filter = (event) => {
    const department = event.target.value;
    if (department !== '') {
      this.setState({
        employees: this.state.allEmployees.filter(employee => {
          if (department !== employee.department) {
            return false;
          }
          return true;
        })
      })
    }
    else {
      this.setState({
        employees: this.state.allEmployees
      })
    }
  }

  sort = (event) => {
    const sortMethod = event.target.value;

    if (sortMethod === 'alphabetical') {
      this.setState({
        employees: this.state.allEmployees.sort((employee1, employee2) => {
          if (employee1.name > employee2.name) {
            return 1;
          }
          if (employee1.name < employee2.name) {
            return -1;
          }

          return 0;
        })
      })
    } else {
      this.setState({
        employees: this.state.allEmployees.sort((employee1, employee2) => {
          if (employee1.name < employee2.name) {
            return 1;
          }
          if (employee1.name > employee2.name) {
            return -1;
          }

          return 0;
        })
      })
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <label>Filter by Department</label>
          <select onChange={this.filter}>
            <option />
            <option value="Accounting">Accounting</option>
            <option value="Billing">Billing</option>
            <option value="Collections">Collections</option>
            <option value="Engineering">Engineering</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div>
          <label>Sort by Name</label>
          <select onChange={this.sort}>
            <option />
            <option value="alphabetical">Alphabetical</option>
            <option value="reverse">Reverse</option>
          </select>
        </div>

        {/* {this.state.employees.map(employee => (
          <div key={employee.id}>
            <p>{employee.name}: {employee.department}</p>
          </div>
        ))} */}
        <table className="table table-striped">
            <thead>
                <tr>
                <th scope="col">Image</th>
                <th scope="col">Name</th>
                <th scope="col">Department</th>
                <th scope="col">Number</th>
                </tr>
            </thead>
            {this.state.employees.map(employee => (
            <Table
                key={ employee.id }
                image={employee.image }
                name={ employee.name }
                department={ employee.department }
                phoneNumber={ employee.phoneNumber }
            />
            ))}
        </table>
      </div>
    );
  }
}

export default App;