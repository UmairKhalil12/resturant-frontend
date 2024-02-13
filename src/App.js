import './App.css';
import Navbar from './Components/Navbar/Navbar';

import Header from './Components/Header/Header';
import AboutUs from './Components/AboutUs/AboutUs';
import BookTable from './Components/BookTable/BookTable';

import overlaybg from './assets/overlaybg.png'
import Menu from './Components/Menu/Menu';
import ChefWord from './Components/ChefWord/ChefWord';
import IntroVideo from './Components/IntroVideo/IntroVideo';

function App() {
  return (
    <>
      <div className="App" style={{ backgroundImage: `url(${overlaybg})` }}>
        <Navbar />
        <Header />
        <AboutUs />
        <BookTable />
        <Menu />
        <ChefWord />
        <IntroVideo />
      </div>

    </>
  );
}

export default App;
