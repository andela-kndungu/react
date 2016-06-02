import React from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
import data from '../data.js';

export default class CommentBox extends React.Component {
  render() {
		return (
			<div className="commentBox">
				<h1>
					Comments
				</h1>
				<CommentList data={data} />
				<CommentForm />
			</div>
		);
	}
}
