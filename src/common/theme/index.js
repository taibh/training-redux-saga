import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: '#03A9F4',
		secondary: '#4CAF50',
		error: '#FF5722'
	},
	typography: {
		fontFamily: 'Roboto'
	},
	shape: {
		borderRadius: '4px'
	}
});

export default theme;
