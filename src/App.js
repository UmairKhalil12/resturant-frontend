import './App.css';
import Navbar from './Components/Navbar/Navbar';

import Header from './Components/Header/Header';
import AboutUs from './Components/AboutUs/AboutUs';
import BookTable from './Components/BookTable/BookTable';

import overlaybg from './assets/overlaybg.png'
import Menu from './Components/Menu/Menu';

function App() {
  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${overlaybg})` }}>
        <Navbar />
        <Header />
        <AboutUs /> 
        <BookTable /> 
      </div>
    <div>
      <Menu />
    </div>

    </>
  );
}

export default App;
