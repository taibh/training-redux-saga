import React, { Component } from 'react';

import { withStyles } from '@material-ui/styles';
import styles from './styles';

import PropTypes from 'prop-types';

import { Modal, Grid, TextField, Button } from '@material-ui/core';

class TaskForm extends Component {

	handleEntering = () => {
	};

	handleCancel = () => {
		this.props.cancel();
	};

	handleOk = () => {
		// onClose(value);
	};

	render() {
		const {classes, open, onClose} = this.props;
		return (
			<Modal open={open} onClose={onClose}>
				<div className={classes.modal}>
					<form>
						<Grid container spacing={2}>
							<Grid item md={12}>
								<span>Add New</span>
							</Grid>
							<Grid item md={12}>
								<TextField className={classes.textField} />
							</Grid>
							<Grid item md={12}>
								<TextField className={classes.textField} />
							</Grid>
							<Grid item md={12}>
								<Button color="primary">Save</Button>
								<Button color="primary" onClick={onClose}>Cancel</Button>
							</Grid>
						</Grid>
					</form>
				</div>
			</Modal>
		);
	}
}

TaskForm.propTypes = {
	classes: PropTypes.object,
	open: PropTypes.bool,
	onClose: PropTypes.func
};

export default withStyles(styles)(TaskForm);
