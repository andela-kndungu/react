import React from 'react';
import { addItem } from '../actions/TodoActions';

class AddTodo extends React.Component {
	add() {
		addItem();
	}

	render() {
		return (
			<div>
				<button
					type="button"
					onClick={this.add}
					className="btn btn-link btn-block btn-lg"
				>
					<span
						className="glyphicon glyphicon-plus"
						aria-hidden="true"
					>
					</span>
				</button>
			</div>
		);
	}
}

export default AddTodo;

