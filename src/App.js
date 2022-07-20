import './App.css';
import Login from "./components/Login";
import Signup from './components/Signup';
import Recover from './components/Recover';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
        <Route path="login" element={ <Login /> } />
        <Route path="signup" element={ <Signup /> } />
        <Route path="recover" element={ <Recover /> } />
      {/* </Route> */}
    </Routes>
  );
}

export default App;
