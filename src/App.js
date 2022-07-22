import { Home, Settings, FormatListBulletedTwoTone, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Outlet } from 'react-router-dom';
import './App.css';

const App = () => {
    return(
        <div className="dashboard-wrapper">
            <div className='menu'>
                <button><Home fontSize='large'/><p>Dashboard</p></button>
                <button><FormatListBulletedTwoTone fontSize='large' /><p>Expenses</p></button>
                <button><Settings fontSize='large' /><p>Settings</p></button>
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