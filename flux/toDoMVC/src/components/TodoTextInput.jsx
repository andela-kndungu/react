import React from 'react';

const ENTER_KEY_CODE = '13';

class TodoTextInput extends React.Component {
	constructor(props) {
		super(props);

		this.state = this.props.value || '';
		this.save = this.save.bind(this);
	}

	onChange(event) {
		this.setState({
			value: event.target.value
		});
	}

	onKeyDown(event) {
		if (event.keyCode === ENTER_KEY_CODE) {
			this.save();
		}
	}

	save() {
		this.props.onSave(this.state.value);
		this.setState({
			value: ''
		});
	}

	render() {
		return (
			<input
				className={this.props.className}
				id={this.props.id}
				placeholder={this.props.placeholder}
				onBlur={this.save}
				onChange={this.onChange}
				onKeyDown={this.onKeyDown}
				value={this.state.value}
				autoFocus={true}
			/>
		);
	}

}

TodoTextInput.propTypes = {
	className: React.PropTypes.string,
	id: React.PropTypes.string,
	placeholder: React.PropTypes.string,
	onSave: React.PropTypes.func.isRequired,
	value: React.PropTypes.string
};

export default TodoTextInput;

