import React from 'react';
import TodoActions from '../actions/TodoActions.js';

class Footer extends React.Component {
	render() {
		const allTodos = this.props.allTodos;
		const total = Object.keys(allTodos).length;

		if (total === 0) {
			return null;
		}

		let completed = 0;
		for (let key in allTodos) {
			if (allTodos[key].complete) {
				completed++;
			}
		}

		const itemsLeft = total - completed;
		let itemsLeftPhrase = itemsLeft === 1 ? 'item ' : 'items ';
		itemsLeftPhrase += 'left';

		let clearCompletedButton;
		if (completed) {
			clearCompletedButton =
				(
				<button
					id="clear-completed"
					onClick={this.onClearCompletedClick}
				>
					Clear Completed ({completed})
				</button>
			);
		}

		return (
			<footer id="footer">
				<span id="todo-count">
					<strong>{itemsLeft}</strong>{itemsLeftPhrase}
				</span>
				{clearCompletedButton}
			</footer>
		);
	}

	onClearCompletedClick() {
		TodoActions.destroyCompleted();
	}
}

Footer.propTypes = {
	allTodos: React.PropTypes.object.isRequired
};

