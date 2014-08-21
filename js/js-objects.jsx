/** JavaScript object module with data structure definitions **/

function LeftClass (att1, att2, name, duration) {
  this.att1 = att1;
  this.att2 = att2;
  this.name = name;
  this.duration = duration;
  this.drawIntoTable = function(startingRow) {}
};

function RightClass (att1, att2, name, duration) {
  this.att1 = att1;
  this.att2 = att2;
  this.name = name;
  this.duration = duration;
  this.drawIntoTable = function(startingRow) {}
};

var leftObj1 = LeftClass(null, null, "leftObj1", null);
var leftObj2 = LeftClass(null, null, "leftObj2", null);
var leftObj3 = LeftClass(null, null, "leftObj3", null);

var rightObj1 = RightClass(null, null, "rightObj1", null);
var rightObj2 = RightClass(null, null, "rightObj2", null);
var rightObj3 = RightClass(null, null, "rightObj3", null);

var containerObj = {
  arrayLeft: [leftObj1, leftObj2, leftObj3,],
  arrayRigh: [rightObj1, rightObj2, rightObj3],
  populateTable: function(tableId) {}
} 

