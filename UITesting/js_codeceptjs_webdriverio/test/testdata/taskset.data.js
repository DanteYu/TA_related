'use strict';

let taskset = function(){

	let taskset = {};

	let tasks = new DataTable(['number', 'description']); //
	tasks.add(['1', 'task a']); // adding records to a table
	tasks.add(['2', 'task b']);
	tasks.add(['3', 'task c']);

	taskset.tasks = tasks;

	return taskset;
}


module.exports = taskset;
