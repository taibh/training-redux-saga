import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';

import CircularProgress from '@material-ui/core/CircularProgress';

import styles from './styles';

class GlobalLoading extends Component {
	render() {
		const {classes} = this.props;
		return (
		<div className={classes.overlay}>
			<CircularProgress className={classes.loading}/>
		</div>
		);
	}
}

GlobalLoading.propTypes = {
	classes: PropTypes.object
};

export default withStyles(styles)(GlobalLoading);
