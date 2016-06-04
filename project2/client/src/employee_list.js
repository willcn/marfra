import React, {Component} from 'react';
import {createContainer} from 'meteor/react-meteor-data';
import {Employees} from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 2;

const EmployeeList = (props) => {

  const btnClick = () => {
    Meteor.subscribe('employees', 4);
  }

  return (
    <div>
      <div className="employee-list">
        {props.employees.map((employee) => {
          return <EmployeeDetail key={employee._id} employee={employee} />
        })}
      </div>
      <button className="btn btn-primary" onClick={btnClick}>Load More...</button>
    </div>
  )
};


export default createContainer(() => {
  Meteor.subscribe('employees', PER_PAGE);
  return {employees: Employees.find({}).fetch()};
}, EmployeeList);
