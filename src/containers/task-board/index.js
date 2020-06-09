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
import SearchBox from '../../components/search-box';

import * as TaskActions from '../../actions/task';
import * as ModalActions from '../../actions/modal';


class TaskBoard extends Component {

	state = {
		open: false
	}

	componentDidMount() {
		const {taskActionCreators} = this.props;
		taskActionCreators.fetchListTaskRequest();
	}

	renderBoard() {
		const { listTask } = this.props;
		let xhtml = null;
		xhtml = <TaskList listTask={listTask} />;
		return xhtml;
	}

	renderSearchBox() {
		let xhtml = null;
		xhtml = (<SearchBox handleChange={this.handleFilter} />);
		return xhtml;
	}

	handleFilter = (e) => {
		const {value} = e.target;
		const {taskActionCreators} = this.props;
		const { filterTasks } = taskActionCreators;
		filterTasks(value);
	}

	openTaskForm = () => {
		const { modalActionCreators } = this.props;
		const { showModal } = modalActionCreators;
		showModal();
	}

	cancelTaskForm = () => {
		const { modalActionCreators } = this.props;
		const { hideModal } = modalActionCreators;
		hideModal();
	}

	render() {
		const {classes, open} = this.props;
		return (
			<div className={classes.taskBoard}>
				<Button variant='contained' color='primary'
					className={classes.button}
					onClick={this.openTaskForm}
				>
					<AddIcon />
				</Button>
				{this.renderSearchBox()}
				{this.renderBoard()}
				<TaskForm open={open} onClose={this.cancelTaskForm}></TaskForm>
			</div>
		);
	}
}

TaskBoard.propTypes = {
	classes: PropTypes.object,
	listTask: PropTypes.array,
	taskActionCreators: PropTypes.shape({
		fetchListTaskRequest: PropTypes.func,
		filterTasks: PropTypes.func
	}),
	modalActionCreators: PropTypes.shape({
		showModal: PropTypes.func,
		hideModal: PropTypes.func
	})
};

const mapStateToProps = state => {
	return {
		listTask: state.task.listTask,
		open: state.modal.open
	};
};

const mapDispatchToProps = dispatch => {
	return {
		taskActionCreators: bindActionCreators(TaskActions, dispatch),
		modalActionCreators: bindActionCreators(ModalActions, dispatch)
	};
};

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(TaskBoard));
