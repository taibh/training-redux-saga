import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
	palette: {
		primary: {
			main: '#03A9F4'
		},
		secondary: {
			main: '#4CAF50'
		},
		background: {
			paper: '#fff',
			default: '#fafafa'
		}
	},
	typography: {
		fontFamily: 'Roboto'
	},
	shape: {
		borderRadius: '4px'
	}
});

export default theme;
