import React from 'react';
import ReactDOM from 'react-dom';
import Header from './com/header';
import LinkCreate from './com/link_create';
import {Links} from '../imports/collections/links';
import LinkList from './com/link_list';


const App = () => {
  return (
    <div>
      <Header />
      <LinkCreate />
      <LinkList />
    </div>
  )
};


Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.app'));
});
