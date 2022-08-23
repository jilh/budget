import { Home, Settings, FormatListBulletedTwoTone, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Outlet, NavLink } from 'react-router-dom';
import './App.css';

const App = () => {
    return(
        <div className="dashboard-wrapper">
            <div className='menu'>
                <NavLink to="/app/dashboard" className={ ({ isActive }) => isActive ? 'active' : undefined }><Home fontSize='large'/><p>Dashboard</p></NavLink>
                <NavLink to="/app/expenses"><FormatListBulletedTwoTone fontSize='large' /><p>Expenses</p></NavLink>
                <NavLink to="/app/settings"><Settings fontSize='large' /><p>Settings</p></NavLink>
            </div>

            <div className='main-section'>
                <div className='app-bar'>
                    <b>john@app.com</b>
                    <h4><ChevronLeft />  3/2022  <ChevronRight /></h4>
                    <Button variant="outlined" className='logout-button'>Logout</Button>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default App;