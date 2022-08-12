import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Link, Outlet } from 'react-router-dom';
import '../styles/Settings.css';

const Settings = () => {
  const [value, setValue] = useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const a11yProps = (index) => {
    return {
      id: `nav-tab-${index}`,
      "aria-controls": `nav-tabpanel-${index}`
    };
  }

  const LinkTab = (props) => {
    // console.log(props);
    return (
      <Tab
        component={Link}
        //   onClick={(event) => {
        //     event.preventDefault();
        //   }}
        to={props.pathname}
        {...props}
      />
    );
  }

  return (
    <Box sx={{ width: '100%', typography: 'body1', }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList indicatorColor='primary' textColor='inherit' onChange={handleChange} aria-label="Tab List" className='link-tabs'>
            <LinkTab label="Account" value="1" pathname="/app/settings/account" {...a11yProps(0)} />
            <LinkTab label="Categories" value="2" pathname="/app/settings/categories" {...a11yProps(0)} />
          </TabList>
        </Box>
        <TabPanel value="1"><Outlet /></TabPanel>
        <TabPanel value="2"><Outlet /></TabPanel>
      </TabContext>
    </Box>
  );
}

export default Settings;
