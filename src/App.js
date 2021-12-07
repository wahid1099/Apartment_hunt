import logo from './logo.svg';
import './App.css';
import Menu from '../src/Components/NavBar/Menu';
import TopBanner from './Components/TopBanner/TopBanner';
import Footer from '../src/Components/Footer/Footer';
import Services from './Components/Services/Services';
import Apartments from './Components/Apartments/Apartments';
import AuthProvider from './Context/AuthProvider';
function App() {
  return (
    <div className="App">
     <AuthProvider>
          <Menu></Menu>
        <TopBanner></TopBanner>
        <Apartments></Apartments>
        <Services></Services>
        <Footer></Footer>

        </AuthProvider>
    </div>
  );
}

export default App;
