import { Card, CardContent, LinearProgress } from '@mui/material';
import '../styles/Dashboard.css';

const Dashboard = () => {
    return(
        <div className='main-content'>
            <Card>
                <CardContent>
                    <div className='metrics-wrapper'>
                        <div className='metrics'>
                            <div className='info'>
                                <p>Total Budget</p>
                                <b>$800.00</b>
                            </div>
                            <div className='info'>
                                <p>Total Expenses</p>
                                <b>$200.00</b>
                            </div>
                            <div className='info'>
                                <p>Total Left</p>
                                <b>$600.00</b>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card className='progress-card'>
                <CardContent>
                    <b>Budgets by Category</b>
                    
                    <div className='progress-bar-details'>
                        <div className='category-info'>
                            <b>Food</b>
                            <b>left $400</b>
                        </div>
                        <div className='progress-info'>
                            <div className='progress-metrics'>
                                <b>$100/$500</b>
                                <b>|</b>
                            </div>
                            <LinearProgress value={20} variant='determinate' className='progress-bar' />
                        </div>
                    </div>

                    <div className='progress-bar-details'>
                        <div className='category-info'>
                            <b>Shopping</b>
                            <b>left $200</b>
                        </div>
                        <div className='progress-info'>
                            <div className='progress-metrics'>
                                <b>$100/$300</b>
                                <b>|</b>
                            </div>
                            <LinearProgress value={33} variant='determinate' className='progress-bar' />
                        </div>
                    </div>

                    <div className='progress-bar-details'>
                        <div className='category-info'>
                            <b>Entertainment</b>
                            <b>left $100</b>
                        </div>
                        <div className='progress-info'>
                            <div className='progress-metrics'>
                                <b>$200/$300</b>
                                <b>|</b>
                            </div>
                            <LinearProgress value={66} variant='determinate' className='progress-bar' />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default Dashboard;