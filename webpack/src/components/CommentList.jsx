import React from 'react';
import Comment from './Comment.jsx';

export default class CommentList extends React.Component{
	render() {
		let data = this.props.data;
		const commentNodes = data.map((comment) => (
			<Comment author={comment.author} key={comment.id}>
				{comment.text?comment.text:'placeholder'}
			</Comment>
		));

		return (
			<div className="commentList">
				{commentNodes}
			</div>
		);
	}
};
