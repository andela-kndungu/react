import React from 'react';
import CommentList from './CommentList.jsx';
import CommentForm from './CommentForm.jsx';
import data from '../data.js';
import $ from 'jquery';

export default class CommentBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};

		this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
	}
	
	loadCommentsFromServer() {
		const _this = this;
		$.ajax({
			url: this.props.url,
			dataType: 'json',
			cache: false,
			success(data) {
				_this.setState({data:data})
			},
			error(xhr, status, err) {
				console.log(this.props.url, status, err.toString());
			}
		});
	}

	componentDidMount() {
		this.loadCommentsFromServer();
		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	}

	render() {
		return (
			<div className="commentBox">
				<h1>
					Comments
				</h1>
				<CommentList data={this.state.data} />
				<CommentForm />
			</div>
		);
	}
}
