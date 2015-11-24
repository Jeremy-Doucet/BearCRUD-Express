"use strict";
let bears = [];

let Bear = function(name, color, species) {
  this.name = name;
  this.color = color;
  this.species = species;
};

let bearModel = {
  getAllBears: function() {
    return bears;
  },
  createSync: function(obj, color, species) {
    if(typeof obj === 'object') {
      bears.push(new Bear(obj.name, obj.color, obj.species));
    } else {
      bears.push(new Bear(obj, color, species));
    }
  },
  create: function(name_obj, color_cb, species, cb) {
    //if an object is passed in as the first parameter, use that object for the constructor
    if(typeof name_obj === 'obj') {
      bears.push(new Bear(name_obj.name, name_obj.color, name_obj.species));
      //check that color_cb is a function before trying to run it
      if(typeof color_cb === 'function') color_cb(null, "success");
      //if it is not a function, throw and error
      else throw "Callback was not passed into the create function";
    } else {
      //an object was not passed in, assume the first 3 params are strings
      bears.push(new Bear(name_obj, color_cb, species));
      if(typeof cb === 'function') cb(null, "success");
      else throw "Callback was not passed into the create function";
    }
  }
}

bearModel.createSync({name: 'Smokey', color: 'Brown', species: 'Fire Bear'});
bearModel.createSync('Jerk', 'Grey', 'Koala');
bearModel.createSync('Shamoo', 'Black and White', 'A bear in disguise');

module.exports = bearModel;
