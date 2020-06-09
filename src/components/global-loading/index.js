import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import * as uiActions from '../../constants/ui';
import styles from './styles';

class GlobalLoading extends Component {
	render() {
		const {classes, showLoading} = this.props;
		let xhtml = null;
		if (showLoading) {
			xhtml = (
				<div className={classes.overlay}>
					<CircularProgress className={classes.loading}/>
				</div>
			);
		}
		return xhtml;
	}
}

GlobalLoading.propTypes = {
	classes: PropTypes.object,
	showLoading: PropTypes.bool,
};

const mapStateToProps = state => ({
	showLoading: state.ui.showLoading
});

const withConnect = connect(mapStateToProps, null);

export default compose(
	withStyles(styles),
	withConnect
)(GlobalLoading);
