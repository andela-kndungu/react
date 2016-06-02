import React from 'react';
import Comment from './Comment.jsx';
import data from '../data.js';

export default class CommentList extends React.Component{
	render() {
		const commentNodes = data.map((comment) => (
			<Comment author={comment.author} key={comment.id}>
				{comment.text}
			</Comment>
		));
		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
};
