import logo from './logo.svg';
import './App.css';

//components
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'



//pages
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />


      {/* <LoginPage /> */}
      <HomePage />



      <Footer />
    </div>
  );
}

export default App;
