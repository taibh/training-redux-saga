import React, { Component } from 'react';

import { withStyles } from '@material-ui/styles';
import styles from './styles';

import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';

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
		const {open} = this.props;
		return (
			<Dialog
				disableBackdropClick
				disableEscapeKeyDown
				maxWidth="xs"
				onEntering={this.handleEntering}
				aria-labelledby="confirmation-dialog-title"
				open={open}
			>
				<DialogTitle id="confirmation-dialog-title">Phone Ringtone</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="Email Address"
						type="email"
						fullWidth
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.handleCancel} color="primary">
						Cancel
					</Button>
					<Button onClick={this.handleOk} color="primary">
						Ok
					</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

TaskForm.propTypes = {
	open: PropTypes.bool,
	cancel: PropTypes.func
};

export default withStyles(styles)(TaskForm);