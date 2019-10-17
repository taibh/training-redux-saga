import React, { Component } from 'react';

import { withStyles } from '@material-ui/styles';
import styles from './styles';

import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import TaskList from '../../components/task-list';
import TaskForm from '../../components/task-form';

const listTask = [
	{
		id: 1,
		title: '1',
		description: '1111111',
		status: 0
	},
	{
		id: 2,
		title: '2',
		description: '222222',
		status: 1
	},
	{
		id: 3,
		title: '3',
		description: '333333',
		status: 2
	},
	{
		id: 4,
		title: '4',
		description: '444444',
		status: 0
	},
	{
		id: 5,
		title: '5',
		description: '555555',
		status: 0
	}
];

class TaskBoard extends Component {

	state = {
		open: false
	}

	renderBoard() {
		let xhtml = null;
		return xhtml;
	}

	openTaskForm = () => {
		this.setState({
			open: !this.state.open
		});
	}
	cancelTaskForm = () => {
		this.setState({
			open: false
		});
	}
	render() {
		const {classes} = this.props;
		const {open} = this.state;
		return (
			<div className={classes.taskBoard}>
				<Button variant='contained' color='primary'
					className={classes.button}
					onClick={this.openTaskForm}
				>
					<AddIcon />
				</Button>
				<TaskList listTask={listTask}></TaskList>
				<TaskForm open={open} cancel={this.cancelTaskForm}></TaskForm>
			</div>
		);
	}
}

TaskBoard.propTypes = {
	classes: PropTypes.object
};

export default withStyles(styles)(TaskBoard);
