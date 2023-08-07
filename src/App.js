import './App.css';
// import NucampLogo from './app/assets/img/logo.png';
// import CampsiteCard from './features/campsites/CampsiteCard.js';
import CampsitesList from './features/campsites/CampsitesList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <CampsitesList />
      <Footer />
    </div>
  );
}

export default App;
