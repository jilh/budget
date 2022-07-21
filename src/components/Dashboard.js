import { Home, Settings, FormatListBulletedTwoTone } from '@mui/icons-material';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import '../styles/Dashboard.css';

const Dashboard = () => {
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
                    <h4>3/2022</h4>
                    <Button variant="outlined" className='logout-button'>Logout</Button>
                </div>
                <div className='main-content'>
                    
                </div>
            </div>
        </div>
    )
}

export default Dashboard;