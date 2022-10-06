import { Home, Settings, FormatListBulletedTwoTone, ChevronLeft, ChevronRight } from '@mui/icons-material';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import './App.css';

const App = () => {
    const navigate = useNavigate();
    const isAuthenticated = sessionStorage.getItem('is-authenticated')
    // console.log(isAuthenticated);
    const logout = () => {
        sessionStorage.removeItem('is-authenticated')
        sessionStorage.removeItem('jwt')

        navigate('/login');
    } 
    useEffect(() => {
        if(!isAuthenticated || isAuthenticated === "false"){
            navigate('/login')
        }
    }, [isAuthenticated, navigate])

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
                    <Button onClick={ () => logout() } variant="outlined" className='logout-button'>Logout</Button>
                </div>
                <Outlet />
            </div>
        </div>
    )
}

export default App;