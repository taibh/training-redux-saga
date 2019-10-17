import React, { Component } from 'react';

import { withStyles } from '@material-ui/styles';
import styles from './styles';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Fab from '@material-ui/core/Fab';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Typography from '@material-ui/core/Typography';

import PropTypes from 'prop-types';

class TaskItem extends Component {
	render() {
		const {classes} = this.props;
		const {title, description} = this.props.task;
		return (
			<Card className={classes.card}>
				<CardContent>
					<Grid container justify='space-between'>
						<Grid item md={8}>
							<Typography component='h2'>{title}</Typography>
						</Grid>
						<Grid item md={4}>
							{description}
						</Grid>
					</Grid>
				</CardContent>
				<CardActions className={classes.cardActions}>
					<Fab color="primary" aria-label="add" size='small' className={classes.fab}>
						<Icon className={classes.icon}>edit</Icon>
					</Fab>
					<Fab color="primary" aria-label="add" size='small' className={classes.fab}>
						<Icon className={classes.icon}>delete</Icon>
					</Fab>
				</CardActions>
			</Card>
		);
	}
}

TaskItem.propTypes = {
	classes: PropTypes.object,
	task: PropTypes.shape({
		title: PropTypes.string,
		description: PropTypes.string
	})
};

export default withStyles(styles)(TaskItem);