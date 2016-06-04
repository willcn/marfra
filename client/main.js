import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  render() {
    return (
      <div>Hello World From Compnents!</div>
    )
  }
}


Meteor.startup(() => {
  ReactDOM.render(<App />, document.querySelector('.app'));
});
