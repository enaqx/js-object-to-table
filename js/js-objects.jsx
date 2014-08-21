/** JavaScript object module with data structure definitions **/

function LeftClass (att1, att2, name, duration) {
  this.attr1 = attr1;
  this.attr2 = attr2;
  this.name = name;
  this.duration = duration;
  this.drawIntoTable = function(startingRow){}
};

function RightClass (att1, att2, name, duration) {
  this.attr1 = attr1;
  this.attr2 = attr2;
  this.name = name;
  this.duration = duration;
  this.drawIntoTable = function(startingRow){}
};

var containerObj = {
  arrayLeftClass: [],
  arrayRighClass: []
} 

/** @jsx React.DOM */
React.renderComponent(
  React.DOM.h1(null, "Hello World"),
  document.getElementById('content')
);