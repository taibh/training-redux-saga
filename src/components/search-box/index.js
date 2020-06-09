import React, { Component } from 'react';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';

import styles from './styles';

class SearchBox extends Component {
	render() {
		const {classes, handleChange} = this.props;
		return (
			<React.Fragment>
				<form className={classes.root} noValidate autoComplete="off">
					<TextField onChange={handleChange} placeholder="Search..."/>
				</form>
			</React.Fragment>
		);
	}
}

SearchBox.propTypes = {
	classes: PropTypes.object,
	handleChange: PropTypes.func
}

export default withStyles(styles)(SearchBox);
