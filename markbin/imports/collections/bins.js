import {Mongo} from 'meteor/mongo';


Meteor.methods({
  'bins.insert': function () {
    return Bins.insert({
      ownerId: this.userId,
      createdAt: new Date(),
      content: '',
      sharedWith: []
    });
  },

  'bins.remove': function (bin) {
    return Bins.remove(bin);
  },
});

export const Bins = new Mongo.Collection('bins');
