import * as React from 'react';
import { Container, Paper, Radio, RadioGroup, FormControlLabel, FormControl, Button, Tab, Tabs, Box, AppBar, Toolbar } from '@mui/material';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { strings, setLocale } from '../i18n';
import theme from '../theme';
import MintForm from './mintForm';
import BurnForm from './burnForm';

interface TabPanelProps {
	children: React.ReactNode;
	index: number;
	value: number;
}

const TabPanel = (props: TabPanelProps) => {
	const { value, index, children } = props;

	return (
		<div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`}>
			{value === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
};

const MainTabs = () => {
	const [tab, setTab] = useState(0);

	const handleChangeTab = (event: React.SyntheticEvent, newValue: number): void => setTab(newValue);

	return (
		<>
			<Tabs value={tab} onChange={handleChangeTab} centered>
				<Tab label={strings('tab1')} />
				<Tab label={strings('tab2')} />
			</Tabs>
			<TabPanel value={tab} index={0}>
				<MintForm />
			</TabPanel>
			<TabPanel value={tab} index={1}>
				<BurnForm />
			</TabPanel>
		</>
	);
};

interface LanguageButtonsProps {
	handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	language: string;
}

const LanguageButtons = (props: LanguageButtonsProps) => {
	const { handleChange, language } = props;

	return (
		<FormControl component="fieldset">
			<RadioGroup row aria-label="locale" name="row-radio-buttons-group" value={language} onChange={handleChange}>
				<FormControlLabel value="en" control={<Radio />} label="En" />
				<FormControlLabel value="ru" control={<Radio />} label="Ru" />
			</RadioGroup>
		</FormControl>
	);
};

const Main = () => {
	const [language, setLanguage] = useState('en');

	const handleChangeLanguage = (event: React.ChangeEvent<HTMLInputElement>) => {
		const l = (event.target as HTMLInputElement).value;
		setLocale(l);
		setLanguage(l);
	};

	return (
		<ThemeProvider theme={theme}>
			<Container maxWidth="lg">
				<header className="header">
					<Paper square variant="outlined">
						<AppBar position="static" color="inherit">
							<Toolbar>
								<LanguageButtons handleChange={handleChangeLanguage} language={language} />
								<Button variant="outlined" color="primary">
									{strings('connect_wallet')}
								</Button>
							</Toolbar>
						</AppBar>
					</Paper>
				</header>
				<main className="main">
					<div className="content_wrapper">
						<Paper elevation={4} sx={{ maxWidth: 600, margin: '70px auto 0', transition: 'margin 1s ease-out' }}>
							<MainTabs />
						</Paper>
					</div>
				</main>
			</Container>
		</ThemeProvider>
	);
};

export default Main;
