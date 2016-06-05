import React from 'react';
import TodoStore from '../stores/TodoStore.js';
import AddTodo from './AddTodo.jsx';
// import TodoList from './TodoList';

class TodoApp extends React.Component {
	constructor(props) {
		super(props);
		this.state = TodoStore.getAll();
		this.onChange = this.onChange.bind(this);
	}

	componentDidMount() {
		TodoStore.addChangeListener(this.onChange);
	}

	componentWillUnmount() {
		TodoStore.removeChangeListener(this.onChange);
	}

	onChange() {
		this.setState(TodoStore.getAll());
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-sm-6 col-sm-offset-3">
						<div className="panel panel-default">
							<div className="panel-heading">
								<AddTodo />
							</div>
							<div className="panel-body">
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default TodoApp;
