import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import HomePage from "./Page/HomePage";
import ApartmentDetailsPage from "./Page/ApartmentDetailsPage";
import RegisterPage from "./Page/RegisterPage";
import LoginPage from "./Page/LoginPage";
import AuthProvider from "./Context/AuthProvider";
import Myorders from "./Components/User/Myorders";
import DashboardHome from "./Components/Dashboard/DashboardHome";

function App() {
  return (
    <div className="App">
        <AuthProvider>
      <BrowserRouter>
      <Routes>
          <Route exact path="/" element={<HomePage/>}>
            </Route>
          <Route exact path="/home" element={<HomePage/>}>
          </Route>
          <Route exact path="/register" element={<RegisterPage/>}>
          </Route>
          <Route exact path="/login" element={<LoginPage/>}>
          </Route>

          <Route path="/dashboard" element={<DashboardHome/>}>
              <Route exact path="/dashboard/myorders" element={<Myorders/>}>
              </Route>

          </Route>




          <Route path={`/aparments/:aparmentId`} element={<ApartmentDetailsPage/>} >

          </Route>

      </Routes>
      
      </BrowserRouter>
        </AuthProvider>
    </div>
  );
}

export default App;
