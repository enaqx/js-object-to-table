/** @jsx React.DOM */

var Table = React.createClass({
  getInitialState: function() {
    return {data: this.props.data};
  },
  render: function () {
    return (
      React.DOM.table(null, React.DOM.tbody(null,
        this.state.data.map(function (row) {
          return (
            React.DOM.tr(null, 
              row.map(function (cell) {
                return React.DOM.td(null, cell);
              })
            )
          );
        })
      ))
    );
  }
});

var data = [[1,2,3],[4,5,6],[7,8,9]];

React.renderComponent(
  Table({data: data}),
  document.getElementById('table')
);

