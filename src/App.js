import logo from './logo.svg';
import './App.css';

//components
import Navbar from './Component/Navbar';



//pages
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <LoginPage /> */}
      <HomePage />
    </div>
  );
}

export default App;
