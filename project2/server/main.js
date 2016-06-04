import _ from 'lodash';
import {Meteor} from 'meteor/meteor';
import {Employees} from '../imports/collections/employees';
import {image, helpers} from 'faker';


Meteor.startup(() => {

  const numberRecords = Employees.find({}).count();

  if (!numberRecords) {
    console.log('Need to create records...');
    _.times(5000, () => {
      const {name, email, phone} = helpers.createCard();
      Employees.insert({
        name: name,
        email: email,
        phone: phone,
        avatar: image.avatar()
      });
    });
  } else {
    console.log('Total items:' + numberRecords);
  }

  Meteor.publish('employees', function (perpage) {
    return Employees.find({}, {limit: perpage});
  });
});
