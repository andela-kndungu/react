(function() {
  'use strict';

  var React = require('react');
  var CommentList = require('./CommentList.jsx');
  var CommentForm = require('./CommentForm.jsx');

  module.exports = React.createClass({
    render: function() {
      return (
        <div className="commentForm">
          <p>I am inside comment box!</p>
          <CommentList />
          <CommentForm />
        </div>
      );
    }
  });
})();
