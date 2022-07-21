import { Home } from '@mui/icons-material';
import '../styles/Dashboard.css';

const Dashboard = () => {
    return(
        <div className="dashboard-wrapper">
            <div className='menu'>
                <button>
                    <Home />
                    Home
                </button>
            </div>
        </div>
    )
}

export default Dashboard;