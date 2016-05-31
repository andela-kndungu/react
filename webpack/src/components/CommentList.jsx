(function() {
  'use strict';

  var React = require('react');
  var Comment = require('./Comment.jsx');

  module.exports = React.createClass({
    render: function() {
      return (
        <div className="commentList">
          <Comment author="Pete Hunt">Ths is one comment</Comment>
          <Comment author="Jordan Walke">This is *another* comment </Comment>
        </div>
      );
    }
  });
})();
