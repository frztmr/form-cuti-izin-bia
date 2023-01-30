
//REACT
import logo from './logo.svg';
import './App.css';


//COMPONENTS
import Navbar from './Component/Navbar';
import Footer from './Component/Footer'
import AjuanCutiModal from './Component/AjuanCutiModal'
import PerbaikanKehadiranModal from './Component/PerbaikanKehadiranModal';
import IzinTerlambatModal from './Component/IzinTerlambatModal';

//PAGES
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <AjuanCutiModal /> */}
      {/* <LoginPage /> */}
      {/* <HomePage /> */}
      {/* <PerbaikanKehadiranModal /> */}
      <IzinTerlambatModal />



      <Footer />
    </div>
  );
}

export default App;
