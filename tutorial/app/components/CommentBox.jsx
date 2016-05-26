(function() {
  'use strict';

  var React = require('react');
  var CommentList = require('./CommentList.jsx');

  module.exports = React.createClass({
    render: function() {
      return (
        <div className="commentBox">
          <p>I am inside comment box!</p>
          <CommentList />
        </div>
      );
    }
  });
})();
