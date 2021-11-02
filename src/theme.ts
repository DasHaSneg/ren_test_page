import createTheme, { Theme, ThemeOptions } from '@mui/material/styles/createTheme';

const theme: Theme = createTheme({
	typography: {
		fontWeightMedium: 600,
		fontFamily: ['Open Sans', 'Arial', 'sans-serif'].join(','),
	},
	palette: {
		type: 'light',
		primary: {
			main: '#d2a787',
			light: '#d9d9d9',
		},
		secondary: {
			main: '#027671',
		},
	},
	components: {
		MuiPaper: {
			styleOverrides: {
				root: {
					borderRadius: 12,
				},
			},
		},
	},
} as ThemeOptions);

export default theme;
