import MyMap from "./MyMap";
import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('xs')]: {
      backgroundColor: theme.palette.background.paper,
      width: 375
    },
    [theme.breakpoints.up('sm')]: {
      backgroundColor: theme.palette.background.paper,
      width: 600
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.background.paper,
      width: 960
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: theme.palette.background.paper,
      width: 1280
    },
  },
}));

export default function CardComponent({ fetchedData, countryInfo }) {


  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"

        >
          <Tab label="MAP" {...a11yProps(0)} />
          <Tab label="MORE DETAILS" {...a11yProps(1)} />
          <Tab label="FLAG" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel style={Object.assign({})} value={value} index={0} dir={theme.direction} >
          <MyMap geoLocation={fetchedData} countryInfo={countryInfo} />
        </TabPanel>
        <TabPanel style={Object.assign({})} value={value} index={1} dir={theme.direction} className="country-info">
          <h6>Region:</h6>
          <div>{countryInfo.region}</div>
          <h6>Capital city:</h6>
          <div>{countryInfo.capital}</div>
          <h6>Numeric Code:</h6>
          <div>{countryInfo.numericCode}</div>
          <h6>Population:</h6>
          <div> {countryInfo.population}</div>
        </TabPanel>
        <TabPanel style={Object.assign({})} value={value} index={2} dir={theme.direction}>
          <img src={countryInfo.flag} alt="flag" style={{ height: "70%", width: "70%", border: "1px black solid" }} />
        </TabPanel>
      </SwipeableViews>
    </div>

  )
}
