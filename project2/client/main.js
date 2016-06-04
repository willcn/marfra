import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import EmployeeList from './src/employee_list';

class App extends Component {
  render() {
    return (
      <div>
        Hello World From Compnents!
        <EmployeeList />
      </div>
    )
  }
}


Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.app'));
});
