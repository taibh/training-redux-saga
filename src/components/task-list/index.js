import React, { Component } from 'react';

import { withStyles } from '@material-ui/styles';
import styles from './styles';

import Grid from '@material-ui/core/Grid';

import { STATUSES } from '../../constants';
import TaskItem from '../task-item';

import PropTypes from 'prop-types';

class TaskList extends Component {
	render() {
		const { classes, listTask } = this.props;
		return (
			<Grid container spacing={2} className={classes.tasksTable}>
				{STATUSES.map(status => {
					const tasksFiltered = listTask.filter(task => task.status === status.value);
					return (
						<Grid item md={4} xs={12} key={status.value}>

							<div className={classes.status}>{status.label}</div>
							<div className={classes.listWrapper}>
								{tasksFiltered.map(task => {
									return (
										<TaskItem key={task.id} task={task}></TaskItem>
									);
								})}
							</div>
						</Grid>
					);
				})}
			</Grid>
		);
	}
}

TaskList.propTypes = {
	classes: PropTypes.object,
	listTask: PropTypes.array
};

export default withStyles(styles)(TaskList);
