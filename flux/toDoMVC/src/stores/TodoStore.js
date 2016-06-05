import AppDispatcher from '../dispatcher/AppDispatcher.js';
import { EventEmitter } from 'events';
import TodoConstants from '../constants/TodoConstants';

const CHANGE_EVENT = 'change';

const todos = {};

const create = (text) => {
	const id = Date.now();
	todos[id] = {
		id,
		text
	};
};

const destroy = (id) => {
	delete todos[id];
};

class TodoStoreClass extends EventEmitter {
	getAll() {
		return todos;
	}

	emitChange() {
		this.emit(CHANGE_EVENT);
	}

	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback);
	}

	removeChangeListener(callback) {
		this.removeChangeListener(CHANGE_EVENT, callback);
	}

}

const TodoStore = new TodoStoreClass();

AppDispatcher.register((payload) => {
	const action = payload.action;
	let text;

	switch (action.actionType) {
		case TodoConstants.TODO_CREATE:
			text = action.text.trim();
			if (text !== '') {
				create(text);
				TodoStore.emitChange();
			}

			break;

		case TodoConstants.TODO_DESTROY:
			destroy(action.id);
			TodoStore.emitChange();
			break;

		default:
			return true;
	}

	return true;
});

export default TodoStore;
