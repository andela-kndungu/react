import AppDispatcher from '../dispatcher/AppDispatcher.js';
import TodoConstants from '../constants/TodoConstants.js';

export function addItem() {
	AppDispatcher.handleViewAction({
		actionType: TodoConstants.TODO_CREATE
	});
}

