/** @jsx React.DOM */

/** JavaScript object module with data structure definitions **/

function LeftClass (att1, att2, name, duration) {
  this.att1 = att1;
  this.att2 = att2;
  this.name = name;
  this.duration = duration;
  this.drawIntoTable = function(startingRow) {
    return att1 + ' ' + att2 + ' ' + name + ' ' + duration;
  }
};

function RightClass (att1, att2, name, duration) {
  this.att1 = att1;
  this.att2 = att2;
  this.name = name;
  this.duration = duration;
  this.drawIntoTable = function(startingRow) {
    return att1 + att2 + name + duration;
  }
};

var leftObj1 = new LeftClass("Aqua", "left", "leftObj1", 5);
var leftObj2 = new LeftClass("Aqua", "left", "leftObj2", 10);
var leftObj3 = new LeftClass("Aqua", "left", "leftObj3", 15);

var rightObj1 = new RightClass("Aqua", "left", "rightObj1", 5);
var rightObj2 = new RightClass("Aqua", "left", "rightObj2", 10);
var rightObj3 = new RightClass("Aqua", "left", "rightObj3", 5);

var containerObj = {
  arrayLeft: [leftObj1, leftObj2, leftObj3,],
  arrayRigh: [rightObj1, rightObj2, rightObj3],
  populateTable: function(tableId) {
    console.log(this.arrayLeft[0].drawIntoTable())
  }
};

var leftCaption = "Objects of class LeftClass";
var rightCaption = "Objects of class RightClass";

var table_style = { 
  width: "50%", 
  border: 0, 
  cellspacing: 0, 
  cellpadding:0 
};

var td_style_center = { textAlign: "center" };
var td_style_aqua = { backgroundColor: "aqua" };
var td_style_aqua_left = { backgroundColor: "aqua", textAlign: "left" };
var td_style_aqua_right = { backgroundColor: "aqua", textAlign: "right" };
var td_style_yellow = { backgroundColor: "yellow", textAlign: "center"};
var td_style_pink = { backgroundColor: "pink" };
var td_style_pink_center = {backgroundColor: "pink", textAlign: "center"};
var td_style_pink_right = {backgroundColor: "pink", textAlign: "right"};

var Table = React.createClass({
  getInitialState: function() {
    return {data: this.props.data};
  },

  render: function () {
    return (
      <table id="mainTable" style={table_style}>
        <tr>
          <td style={td_style_center}><b>{leftCaption}</b></td>
          <td></td>
          <td><b>{rightCaption}</b></td>
        </tr>
        <tr>
          <td></td>
          <td ></td>
          <td ></td>
        </tr>
        <tr>
          <td style={td_style_aqua}></td>
          <td style={td_style_aqua}></td>
          <td style={td_style_aqua}>&nbsp;</td>
        </tr>
        <tr>
          <td style={td_style_aqua_left}>&nbsp;lefty1:</td>
          <td style={td_style_aqua}></td>
          <td></td>
        </tr><tr>
          <td style={td_style_aqua}></td>
          <td style={td_style_aqua}></td>
          <td >&nbsp;</td>
        </tr>

        <tr>
          <td style={td_style_aqua_right}>lefty1.att2:</td>
          <td style={td_style_yellow}>08:20</td>
          <td style={td_style_pink}>righty1.att1</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td style={td_style_pink}></td>
          <td style={td_style_pink}></td>
        </tr>
        <tr>
          <td>(button to insert a left/right pair)</td>
          <td style={td_style_pink_center}>15 mins</td>
          <td style={td_style_pink_right}>&nbsp;righty1</td>
        </tr>
        <tr>
          <td>&nbsp;</td>
          <td style={td_style_pink_center}></td>
          <td style={td_style_pink}></td>
        </tr>
        <tr>
          <td style={td_style_aqua_right}>lefty2.att1:</td>
          <td style={td_style_yellow}>08:35</td>
          <td style={td_style_pink}>righty1.att2</td>
        </tr><tr>
          <td style={td_style_aqua}></td>
          <td style={td_style_aqua}></td>
          <td>&nbsp;</td>
        </tr>
      </table>
    );
  }
});

React.renderComponent(
  Table(),
  document.getElementById('fancy_table')
);
