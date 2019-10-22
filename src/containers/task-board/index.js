import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { withStyles } from '@material-ui/styles';
import styles from './styles';

import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import TaskList from '../../components/task-list';
import TaskForm from '../../components/task-form';

import * as TaskActions from '../../actions/task';

class TaskBoard extends Component {

	state = {
		open: false
	}

	componentDidMount() {
		const {taskActionCreators} = this.props;
		taskActionCreators.fetchListTaskRequest();
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
		const {classes, listTask} = this.props;
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
	classes: PropTypes.object,
	listTask: PropTypes.array,
	taskActionCreators: PropTypes.shape({
		fetchListTaskRequest: PropTypes.func
	})
};

const mapStateToProps = state => {
	return {
		listTask: state.task.listTask
	};
};

const mapDispatchToProps = dispatch => {
	return {
		taskActionCreators: bindActionCreators(TaskActions, dispatch)
	};
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));
